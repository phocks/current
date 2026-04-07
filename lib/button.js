import { Elena, html } from "@elenajs/core";

/** ░█ [ELENA]: Primitive Component example */
export default class Button extends Elena(HTMLElement) {
  static tagName = "my-button";
  static props = ["variant"];

  variant = "default";

  render() {
    return html`
      <button class="my-button">
        ${this.text}
      </button>
    `;
  }
}

Button.define();
