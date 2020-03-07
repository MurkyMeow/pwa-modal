import { LitElement, html } from 'lit-element'
import './pwa-modal'

export class AppEntry extends LitElement {
  render() {
    return html`
    <pwa-modal
      description="Just add your desired image size (width & height) after our URL, and youll get a random image."
      .tags=${['News', 'Social']}
      .screenshots=${['https://picsum.photos/200?1', 'https://picsum.photos/200?2', 'https://picsum.photos/200?3', 'https://picsum.photos/200?4', 'https://picsum.photos/200?5']}
    >
      <button>Install</button>
    </pwa-modal>
    `;
  }
}

customElements.define('app-entry', AppEntry);
