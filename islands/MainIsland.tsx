import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "fresh/runtime";

export default function MainIsland() {
  useEffect(() => {
    import("../lib/button.js");
  }, []);

  if (!IS_BROWSER) {
    return <button>Click me</button>;
  }

  return <my-button variant="primary">Save</my-button>;
}
