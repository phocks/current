import { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "my-button": JSX.HTMLAttributes<HTMLElement>;
    }
  }
}

export {};
