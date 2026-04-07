const result = await Deno.bundle({
  entrypoints: ["./index.html"],
  outputDir: "dist",
  platform: "browser",
  minify: true,
});

console.log(result);
