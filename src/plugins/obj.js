const objPlugins = {
  install(app, options) {
    /**
     * app.component()
     * app.config.globalProperties
     * app.directive
     * app.provide
     */
    console.log('objPlugins', app, options);
  },
};

export default objPlugins;
