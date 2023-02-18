const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); // path.join(__dirname)设置绝对路径
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  // vue中针对webpack的配置不能直接写在外面
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", ".vue"], //自动添加文件后缀
    },
  },
  chainWebpack: (config) => {
    // 配置解析别名
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@c", resolve("./src/components"));
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
});
