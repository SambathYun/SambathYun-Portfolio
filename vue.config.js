const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "AmSampar",
    description: "Web-developer",
    themeColor: "#081521",
    msTileColor: "#deb992",
    workboxOptions: {
      skipWaiting: true,
      exclude: [/_redirects/],
    },
  },
});
