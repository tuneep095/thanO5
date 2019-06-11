import {on, off, getScrollContainer, isInContainer} from '../../element-helpers/utils/dom';
import {isString, isHtmlElement} from '../../element-helpers/utils/types';
import {throttle} from 'throttle-debounce';
import styleString from './core-image.scss';

// create style element
const style = document.createElement('style');
style.innerHTML = styleString;

// Helper function: determine if the browser supports object-fit css rule
const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;

// object-fit valid values
const ObjectFit = {
  NONE: 'none',
  CONTAIN: 'contain',
  COVER: 'cover',
  FILL: 'fill',
  SCALE_DOWN: 'scale-down',
};

/**
 * An image with lazy-loading option
 */
class CoreImage extends HTMLElement {
  /**
   * Initialize private fields, shadowRoot and the view
   */
  constructor() {
    super();

    this._src = this.getAttribute('src') || undefined;
    this._fit = this.getAttribute('fit') || undefined;
    this._lazy = this.hasAttribute('lazy') || false;

    this._loading = true;
    this._error = false;

    this._show = !this._lazy;
    this._imageWidth = 0;
    this._imageHeight = 0;
    this._scrollContainer = {};
    this._isServer = !(typeof window != 'undefined' && window.document);

    this._template = document.createElement('template');
    this.attachShadow({mode: 'open'});
    this._updateTemplate();
  }

  /**
   * Handle lazy-loading option when the element is appended to the DOM
   */
  connectedCallback() {
    if (this.lazy) {
      this._addLazyLoadListener();
    } else {
      this._loadImage();
    }
  }

  /**
   * Clean up possible lazy loading linsteners 
   * when the element is disconnected with the DOM
   */
  disconnectedCallback() {
    this.lazy && this._removeLazyLoadListener();
  }

  /**
   * The image source URL
   */
  get src() {
    return this._src;
  }

  set src(val) {
    if (typeof val === 'string') {
      this._src = val;
      this.setAttribute('src', val);
    } else {
      this._src = undefined;
      this.removeAttribute('src');
    }

    this._updateTemplate();
    this._show && this._loadImage();
  }

  /**
   * The object-fit mode
   * <br> chosen from [none, contain, cover, fill, scale-down]
   */
  get fit() {
    return this._fit;
  }

  set fit(val) {
    if (['fill', 'contain', 'cover', 'none', 'scale-down'].indexOf(val) > -1) {
      this._fit = val;
      this.setAttribute('fit', val);
    } else {
      this._fit = undefined;
      this.removeAttribute('fit');
    }

    this._updateTemplate();
  }

  /**
   * If the lazy loading option is turned on
   */
  get lazy() {
    return this._lazy;
  }

  set lazy(val) {
    if (val === true) {
      this._lazy = true;
      this.setAttribute('lazy', '');
    } else {
      this._lazy = false;
      this.removeAttribute('lazy');
    }
  }

  /**
   * Whether the image is still loading
   */
  get loading() {
    return this._loading;
  }

  /**
   * loading setter
   * @param {*} val
   */
  set loading(val) {
    this._loading = val;
  }

  /**
   * Whether an error is detected when the image is beging loaded
   */
  get error() {
    return this._error;
  }

  set error(val) {
    this._error = val;
  }

  /**
   * CSS style of the image element
   */
  get imageStyle() {
    if (!this._isServer && this.fit) {
      if (isSupportObjectFit()) {
        return `object-fit:${this.fit}`;
      } else {
        const _imageStyle = this._getImageStyle(this.fit);
        return _imageStyle.substr(1, _imageStyle.length - 2);
      }
    }
    return '';
  }

  /**
   * If the image should aligned at the center
   */
  get alignCenter() {
    return !this._isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
  }

  /**
   * Update the template so as to update the view
   */
  _updateTemplate() {
    let templateString;
    if (this.loading) {
      templateString = `
        <slot name="placeholder">
          <div class="el-image__placeholder"></div>
        </slot>
      `;
    } else if (this.error) {
      templateString = `
        <slot name="error">
          <div class="el-image__error"></div>
        </slot>
      `;
    } else {
      let classAttr;
      if (this.alignCenter) {
        classAttr = `class="el-image__inner--center"`;
      } else {
        classAttr = '';
      }

      let imageStyleAttr;
      if (this.imageStyle !== {}) {
        imageStyleAttr = `style=${this.imageStyle}`;
      } else {
        imageStyleAttr = '';
      }

      templateString = `
        <img
          class="el-image__inner"
          src=${this.src}
          ${imageStyleAttr}
          ${classAttr}>
      `;
    }

    this._template.innerHTML = templateString;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this._template.content);
    this.shadowRoot.appendChild(style.cloneNode(true));
  }

  /**
   * Loading the image
   */
  _loadImage() {
    if (this._isServer) return;
    // reset status
    this.loading = true;
    this.error = false;
    const img = new Image();
    img.onload = (e) => this._handleLoad(e, img);
    img.onerror = this._handleError.bind(this);
    // If no src specified, an error appears in the console (this is the expected behavior)

    img.src = this.src;
  }

  /**
   * Handle image-loaded event
   * @param {Object} e the image-loaded event
   * @param {Object} img the img element
   */
  _handleLoad(e, img) {
    this.imageWidth = img.width;
    this.imageHeight = img.height;
    this.loading = false;
    this._updateTemplate();
  }

  /**
   * Handle error event
   * @param {Object} e the error event
   */
  _handleError(e) {
    this.loading = false;
    this.error = true;
    this._updateTemplate();
    // this.$emit('error', e);
  }

  /**
   * Load the image in the lazy-loading fashion
   */
  _handleLazyLoad() {
    if (isInContainer(this, this._scrollContainer)) {
      this.show = true;
      this._loadImage();
      this._removeLazyLoadListener();
    }
  }

  /**
   * Add a lazy loading linstener that listenes to lazy-loaded event
   */
  _addLazyLoadListener() {
    if (this._isServer) return;
    const {scrollContainer} = this;
    let _scrollContainer = null;
    if (isHtmlElement(scrollContainer)) {
      _scrollContainer = scrollContainer;
    } else if (isString(scrollContainer)) {
      _scrollContainer = document.querySelector(scrollContainer);
    } else {
      _scrollContainer = getScrollContainer(this);
    }
    if (_scrollContainer) {
      this._scrollContainer = _scrollContainer;
      this._lazyLoadHandler = throttle(500, this._handleLazyLoad.bind(this));
      on(_scrollContainer, 'scroll', this._lazyLoadHandler);
      this._handleLazyLoad();
    }
  }

  /**
   * Remove the lazy loading linstener
   */
  _removeLazyLoadListener() {
    const {_scrollContainer, _lazyLoadHandler} = this;
    if (this._isServer || !_scrollContainer || !_lazyLoadHandler) return;
    off(_scrollContainer, 'scroll', _lazyLoadHandler);
    this._scrollContainer = null;
    this._lazyLoadHandler = null;
  }

  /**
   * simulate object-fit behavior to compatible with IE11 and other browsers which not support object-fit
   * @param {string} fit the object-fit mode
   * @return {Object}
   */
  _getImageStyle(fit) {
    // const {_imageWidth, _imageHeight} = this;
    const {
      clientWidth: containerWidth,
      clientHeight: containerHeight,
    } = this;
    if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {};
    const vertical = imageWidth / imageHeight < 1;
    if (fit === ObjectFit.SCALE_DOWN) {
      const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
      fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
    }
    switch (fit) {
      case ObjectFit.NONE:
        return {width: 'auto', height: 'auto'};
      case ObjectFit.CONTAIN:
        return vertical ? {width: 'auto'} : {height: 'auto'};
      case ObjectFit.COVER:
        return vertical ? {height: 'auto'} : {width: 'auto'};
      default:
        return {};
    }
  }
}

// Register the web component
if (!customElements.get('core-image')) {
  customElements.define('core-image', CoreImage);
}
