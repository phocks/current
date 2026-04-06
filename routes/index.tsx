import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import MainIsland from "../islands/MainIsland.tsx";

export default define.page(function Home() {
  return (
    <div>
      <Head>
        <title>Current</title>
      </Head>
      <MainIsland></MainIsland>
    </div>
  );
});
