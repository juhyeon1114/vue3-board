<template>
  <MainHeader></MainHeader>
  <MainView></MainView>

  <AppAlerts :items="alerts" />

  <div id="postModal"></div>
</template>

<script setup>
import MainView from '@/layouts/MainView.vue';
import { inject } from 'vue';
import MainHeader from './layouts/MainHeader.vue';
import { useAlert } from './composables/alert';

const person = inject('person');
console.log('person', person);

const { alerts } = useAlert();
</script>

<script>
export default {
  created() {
    console.log(this.$person);
  },
};
</script>

<style></style>
