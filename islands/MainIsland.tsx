import { useEffect } from "preact/hooks";
// import Button from "../lib/button.js";
import { Elena } from "@elenajs/core";
import { IS_BROWSER } from "fresh/runtime";

export default function Counter() {
  useEffect(() => {
    class Button extends Elena(HTMLElement) {
      static override tagName = "elena-button";
      static override shadow = "open" as const;
    }

    Button.define;
    console.log("Hello World!");
  });

  // if (IS_BROWSER) {
  return (
    <div>
      <elena-button>
        <template shadowrootmode="open">
          <link rel="stylesheet" href="button.css" />
          <button>
            <slot></slot>
          </button>
        </template>
        Click me
      </elena-button>
    </div>
  );
  // }
}
