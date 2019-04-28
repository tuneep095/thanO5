const helloTranslations = {
    af: 'Hello Wêreld',
    sq: 'Përshendetje Botë',
    am: 'ሰላም ልዑል',
    hy: 'Բարեւ աշխարհ',
    eu: 'Kaixo Mundua',
    be: 'Прывітанне Сусвет',
    bn: 'ওহে বিশ্ব',
    bg: 'Здравей свят',
    ca: 'Hola món',
    ny: 'Moni Dziko Lapansi',
    zh: '你好世界',
    hr: 'Pozdrav svijete',
    cs: 'Ahoj světe',
    da: 'Hej Verden',
    nl: 'Hallo Wereld',
    en: 'Hello World',
    et: 'Tere maailm',
    fi: 'Hei maailma',
    fr: 'Bonjour monde',
    ka: 'გამარჯობა მსოფლიო',
    de: 'Hallo Welt',
    el: 'Γειά σου Κόσμε',
    ha: 'Sannu Duniya',
    he: 'שלום עולם',
    hi: 'नमस्ते दुनिया',
    hu: 'Helló Világ',
    is: 'Halló heimur',
    ig: 'Ndewo Ụwa',
    id: 'Halo Dunia',
    it: 'Ciao mondo',
    jp: 'こんにちは世界',
    kk: 'Сәлем Әлем',
    km: 'សួស្តី​ពិភពលោក',
    ky: 'Салам дүйнө',
    lo: 'ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ',
    lv: 'Sveika pasaule',
    lt: 'Labas pasauli',
    lb: 'Moien Welt',
    mk: 'Здраво свету',
    ms: 'Hai dunia',
    ml: 'ഹലോ വേൾഡ്',
    mn: 'Сайн уу дэлхий',
    ne: 'नमस्कार संसार',
    nb: 'Hei Verden',
    fa: 'سلام دنیا',
    pl: 'Witaj świecie',
    pt: 'Olá Mundo',
    pa: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ',
    ro: 'Salut Lume',
    ru: 'Привет мир',
    sr: 'Здраво Свете',
    si: 'හෙලෝ වර්ල්ඩ්',
    sl: 'Pozdravljen svet',
    es: 'Hola Mundo',
    su: 'Halo Dunya',
    sw: 'Salamu Dunia',
    sv: 'Hej världen',
    tg: 'Салом Ҷаҳон',
    th: 'สวัสดีชาวโลก',
    tk: 'Selam Dünya',
    uk: 'Привіт Світ',
    uz: 'Salom Dunyo',
    vi: 'Chào thế giới',
    cy: 'Helo Byd',
    xh: 'Molo Lizwe',
    yi: 'העלא וועלט',
    yo: 'Mo ki O Ile Aiye',
    zu: 'Sawubona Mhlab',
  };
  
  /**
   * A class for core-hello custom element
   */
  class CoreHello extends HTMLElement {
    /**
     * Constructor for this element
     */
    constructor() {
      super();
      // Attach element template to shadow root
      const shadowRoot = this.attachShadow({mode: 'open'});
  
      const template = document.getElementById('core-hello');
      const templateContent = template.content;
  
      shadowRoot.appendChild(templateContent.cloneNode(true));
  
      // Get message p element and hello span element
      const message = shadowRoot.getElementById('message');
      const hello = shadowRoot.getElementById('hello');
  
      // Animated raimbow effect
      if (this.hasAttribute('rainbow')) {
        message.classList.add('rainbow');
      }
  
      // Translate the hello message based on 'lang' attribute
      if (this.hasAttribute('lang')) {
        const lang = this.getAttribute('lang');
        if (helloTranslations[lang] != undefined) {
          hello.textContent = helloTranslations[lang] + ' ';
        }
      }
    }
  }
  
  // Define core-hello element
  customElements.define('core-hello', CoreHello);