<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "./assets/vite.svg";
  import heroImg from "./assets/hero.png";
  import Counter from "./lib/Counter.svelte";
</script>

<section class="main">
  <div class="hero">
    <img src={heroImg} class="base" width="170" height="179" alt="" />
    <img src={svelteLogo} class="framework" alt="Svelte logo" />
    <img src={viteLogo} class="vite" alt="Vite logo" />
  </div>
  <div class="text">
    <h1>Hello World!</h1>
  </div>
</section>

<style lang="scss">
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    background-color: aliceblue;
    width: 600px;
    height: 600px;
    color: #333;
  }
</style>
