<template>
  <h2>About vue</h2>
  <p>{{ $route.path }}</p>
  <button @click="onClickButton">Go Home</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onClickButton = () => {
  router.push('/');
};
</script>
