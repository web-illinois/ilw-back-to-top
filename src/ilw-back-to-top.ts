import { LitElement, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './ilw-back-to-top.styles.js';
import './ilw-back-to-top.css';
import './ilw-colors.css';

@customElement('ilw-back-to-top')
export default class BackToTop extends LitElement {
  static styles = styles;

  @property({ type: String, attribute: true })
  alt: string = 'Back to top';

  @property({ type: String, attribute: true })
  target: string | null = null;

  @state()
  isTopOfPage: boolean = true;

  private expectedPositionAfterScroll: number | null = null;
  private topOfPage: number = 0;
  private observer: ResizeObserver | null = null;

  constructor() {
    super();
    this.continueScroll = this.continueScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback(): void {
    super.connectedCallback();

    // This prevents the briefly appearing back-to-top element when
    // using a target, since it lets the page render fully before calculating. There's
    // also a large number of redundant scroll events that happens right away, hence the 10ms wait.
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll);
      this.setResizeObserver();
      // We need to call this here as well, since the resize observer isn't guaranteed to be set
      this.handleScroll();
    }, 10);
  }

  private setResizeObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    if (this.target) {
      const targetElement = document.getElementById(this.target);
      if (targetElement) {
        this.topOfPage = targetElement.getBoundingClientRect().top + document.documentElement.scrollTop;
        this.observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
          if (entries.length > 0 && targetElement) {
            this.topOfPage = targetElement.getBoundingClientRect().top + document.documentElement.scrollTop;
          } else {
            this.topOfPage = 0;
          }
          this.handleScroll();
        });

        this.observer.observe(window.document.documentElement);
      }
    }
  }

  updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('target')) {
      this.setResizeObserver();
    }
  }

  private continueScroll(): void {
    if (!this.isTopOfPage && this.isInExpectedPosition()) {
      this.scrollToTop();
    } else if (this.isTopOfPage) {
      this.focusFirstElement();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private getButton(): HTMLButtonElement | null {
    return this.shadowRoot?.querySelector('button') || null;
  }

  private getFoldPosition(): number {
    return window.innerHeight * 0.8;
  }

  private getNextScrollPosition(): number {
    return Math.max(this.topOfPage, this.getScrollPosition() - 50);
  }

  private getScrollPosition(): number {
    return window.scrollY || document.documentElement.scrollTop;
  }

  // Helper method to find the first focusable element on the page
  private getFirstFocusableElement(): Element | null {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'audio[controls]',
      'video[controls]',
      '[contenteditable]:not([contenteditable="false"])',
      'details > summary'
    ];

    const focusableElements = document.querySelectorAll(focusableSelectors.join(','));

    // Filter out elements that are not visible or have negative tabindex
    for (let element of focusableElements) {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();

      if (style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          (element as HTMLElement).tabIndex !== -1 &&
          (rect.width > 0 || rect.height > 0)) {
        return element;
      }
    }

    return null;
  }

  // Method to focus the first focusable element
  private focusFirstElement(): void {
    const firstFocusable = this.getFirstFocusableElement() as HTMLElement | null;
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  private handleClick(evt: Event): void {
    evt.preventDefault();

    const button = this.getButton();
    if (button) {
      button.blur();
    }
    if (this.isBelowFold()) this.jumpToFold();
    this.startScrollToTop();
  }

  private handleScroll(): void {
    // Render is only called if the boolean actually changes
    this.isTopOfPage = this.getScrollPosition() <= this.topOfPage;
  }

  private isBelowFold(): boolean {
    return this.getScrollPosition() > this.getFoldPosition();
  }

  private isInExpectedPosition(): boolean {
    return this.expectedPositionAfterScroll !== null &&
        this.getScrollPosition() === this.expectedPositionAfterScroll;
  }

  private jumpToFold(): void {
    window.scrollTo(0, this.getFoldPosition());
  }

  private scrollToTop(): void {
    this.expectedPositionAfterScroll = this.getNextScrollPosition();
    window.scrollTo(0, this.expectedPositionAfterScroll);
    setTimeout(this.continueScroll, 10);
  }

  private startScrollToTop(): void {
    this.scrollToTop();
  }

  private renderIcon(): TemplateResult {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="presentation">
      <path d="M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z"/>
    </svg>`;
  }

  render(): TemplateResult {
    return html`<button @click="${this.handleClick}" class="${this.isTopOfPage ? 'top-of-page' : ''}"
                        aria-label=${this.alt}>${this.renderIcon()}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ilw-back-to-top': BackToTop;
  }
}