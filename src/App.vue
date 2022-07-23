<template>
  <MainHeader></MainHeader>
  <MainView></MainView>

  <div id="postModal"></div>
</template>

<script setup>
import MainView from '@/layouts/MainView.vue';
import { inject } from 'vue';
import MainHeader from './layouts/MainHeader.vue';

const person = inject('person');
console.log('person', person);
</script>

<script>
export default {
  created() {
    console.log(this.$person);
  },
};
</script>

<style></style>
