import { LitElement, PropertyValues, property, html } from 'lit-element';
import { style } from './pwa-modal-style';

export class PWAModal extends LitElement {
  static styles = style;

  @property({ type: Array }) tags: string[] = [];
  @property({ type: Array }) screenshots: string[] = [];
  @property({ type: String }) description?: string;
  @property({ type: Boolean }) open?: boolean;

  @property({ attribute: false }) _swiping?: boolean;
  @property({ attribute: false }) _activeScreenshot?: string;

  _screenshotContainer: HTMLElement | null = null;

  closeModal = () => {
    this.open = false;
  };

  closeScreenshot = () => {
    this._activeScreenshot = '';
  };

  onKeyDown = (e: KeyboardEvent) => {
    if (e.code !== 'Escape') return;
    if (this._activeScreenshot) this.closeScreenshot();
    else this.closeModal();
  };

  onMouseMove = (e: MouseEvent) => {
    if (!this._swiping && Math.abs(e.movementX) >= 1) {
      this._swiping = true;
    }
    if (this._screenshotContainer) {
      this._screenshotContainer.scrollLeft -= e.movementX;
    }
  };

  startSwipe = (e: MouseEvent) => {
    e.preventDefault();
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.onMouseMove);
      requestAnimationFrame(() => this._swiping = false);
    }, { once: true });
  };

  updated(changes: PropertyValues) {
    if (changes.has('open') && this.open) {
      this._screenshotContainer = this.renderRoot.querySelector('.screenshots');
    }
  }

  firstUpdated() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    const { open, _activeScreenshot } = this;
    return html`
    <slot @click=${() => this.open = true}></slot>
    ${open ? html`
      <div class="screen-cover">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <div class="modal">
          <div class="summary">
            <img class="photo" src="https://picsum.photos/200?6" alt="">
            <div>
              <div class="name">Twitter</div>
              <div class="publisher">mobile.twitter.com</div>
              <div class="limits">
                <img class="limit-age-icon" src="https://i.imgur.com/t0M3Ty8.png" alt="">
                Rated to 12+
                <img class="limit-info-icon" src="https://fonts.gstatic.com/s/i/materialiconsoutlined/info/v6/24px.svg?download=true" alt="">
              </div>
            </div>
          </div>
          <div class="tags">
            ${this.tags.map(tag => html`<div class="tag">${tag}</div>`)}
          </div>
          ${this.description || this.tags.length || this.screenshots.length ? html`
            <hr class="hr">
          ` : html``}
          <div class="description">${this.description}</div>
          ${this.screenshots.length ? html`
            <div class="screenshots" @mousedown=${this.startSwipe}>
              ${this.screenshots.map((src, i) => html`
                <button class="screenshot"
                  aria-label="Open screenshot ${i + 1}"
                  @click=${() => !this._swiping && (this._activeScreenshot = src)}
                >
                  <img class="screenshot-img" src=${src} alt="" />
                </button>
              `)}
            </div>
          ` : html``}
          ${_activeScreenshot ? html`
            <div class="screen-cover screenshot-full-wrap">
              <img class="screenshot-full-img" src=${_activeScreenshot} alt="">
              <button class="screenshot-close-btn" @click=${this.closeScreenshot}>X</button>
            </div>
          ` : html``}
          <div class="actions">
            <button class="action" type="button" @click=${this.closeModal}>
              Cancel
            </button>
            <button class="action" type="button">
              Install
            </button>
          </div>
        </div>
      </div>
    ` : html``}
    `;
  }
}

customElements.define('pwa-modal', PWAModal)
