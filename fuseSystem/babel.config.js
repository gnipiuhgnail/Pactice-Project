let plugins = [];
if (process.env.NODE_ENV === "production") {    // todo  if判断是否打包,打包环境下控制台去掉console.log,也可去掉if判断，整个项目不会出现console.log(不建议)
  plugins.push("transform-remove-console");
}

module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:plugins,
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      'plugins': ['dynamic-import-node']
    }
  }
}
