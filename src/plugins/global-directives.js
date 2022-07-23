import Focus from '@/directives/focus';
import Color from '@/directives/color';

export default {
  install(app) {
    app.directive('focus', Focus);
    app.directive('color', Color);
  },
};
