import AppAlert from '@/components/app/AppAlert.vue';
import AppAlerts from '@/components/app/AppAlerts.vue';
import AppCard from '@/components/app/AppCard.vue';
import AppModal from '@/components/app/AppModal.vue';

export default {
  install(app) {
    app.component('AppAlert', AppAlert);
    app.component('AppAlerts', AppAlerts);
    app.component('AppCard', AppCard);
    app.component('AppModal', AppModal);
  },
};
