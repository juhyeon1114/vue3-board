export default {
  install(app, options) {
    const person = {
      name: 'hello',
      say() {
        alert('hi');
      },
    };
    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};
