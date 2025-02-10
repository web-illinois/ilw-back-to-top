import { LitElement, html } from 'lit';
import styles from './ilw-back-to-top.styles.js';
import './ilw-back-to-top.css';

class BackToTop extends LitElement {

  static get properties() {
    return {
      alt: { type: String, attribute: true },
      target: { type: String, attribute: true },
      isTopOfPage: {type: Boolean, state: true}
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.alt = 'Back to top';
    this.target = null;
    this.expectedPositionAfterScroll = null;
    this.topOfPage = 0;
    this.isTopOfPage = true;
    this.continueScroll = this.continueScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.handleScroll);

    // This prevents the briefly appearing back-to-top element when
    // using a target, since it lets the page render fully before calculating
    setTimeout(() => {
      this.setResizeObserver();
      // We need to call this here as well, since the resize observer isn't guaranteed to be set
      this.handleScroll();
    }, 0)
  }

  setResizeObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.target) {
      const targetElement = document.getElementById(this.target);
      if (targetElement) {
        this.topOfPage = targetElement.getBoundingClientRect().top + document.documentElement.scrollTop;
        this.observer = new ResizeObserver((entries) => {
          if (entries.length > 0 && targetElement) {
            this.topOfPage = targetElement.getBoundingClientRect().top + document.documentElement.scrollTop;
          } else {
            this.topOfPage = 0;
          }
          this.handleScroll();
        })

        this.observer.observe(window.document.documentElement);
      }
    }
  }

  update(changedProperties) {
    if (changedProperties.get('target')) {
      this.setResizeObserver();
    }
    super.update(changedProperties);
  }

  continueScroll() {
    if (!this.isTopOfPage && this.isInExpectedPosition()) {
      this.scrollToTop();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  getButton() {
    return this.shadowRoot.querySelector('button');
  }

  getFoldPosition() {
    return window.innerHeight * .8;
  }

  getNextScrollPosition() {
    return Math.max(this.topOfPage, this.getScrollPosition() - 50);
  }

  getScrollPosition() {
    return window.scrollY || document.documentElement.scrollTop;
  }

  handleClick(evt) {
    evt.preventDefault();
    this.getButton().blur();
    if (this.isBelowFold()) this.jumpToFold();
    this.startScrollToTop();
  }

  handleScroll() {
    // Render is only called if the boolean actually changes
    this.isTopOfPage = this.getScrollPosition() <= this.topOfPage;
  }

  isBelowFold() {
    return this.getScrollPosition() > this.getFoldPosition();
  }

  isInExpectedPosition() {
    return this.getScrollPosition() === this.expectedPositionAfterScroll;
  }

  jumpToFold() {
    window.scrollTo(0, this.getFoldPosition());
  }

  scrollToTop() {
    this.expectedPositionAfterScroll = this.getNextScrollPosition();
    window.scrollTo(0, this.expectedPositionAfterScroll);
    setTimeout(this.continueScroll, 10);
  }

  startScrollToTop() {
    this.scrollToTop();
  }

  renderIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="presentation">
      <path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"/>
    </svg>`;
  }

  render() {
    return html`<button @click="${this.handleClick}" class="${this.isTopOfPage ? 'top-of-page' : ''}"
    aria-label=${this.alt}>${this.renderIcon()}</button>`;
  }
}

customElements.define('ilw-back-to-top', BackToTop);
