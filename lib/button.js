import { Elena } from "@elenajs/core";

export default class Button extends Elena(HTMLElement) {
  static tagName = "elena-button";
  static shadow = "open";
}

Button.define();
