<template>
  <h2>About vue</h2>
  <p>{{ $route.path }}</p>
  <button @click="onClickButton">Go Home</button>

  <h2>Store</h2>
  <div>count: {{ store.count }}</div>
  <div>doubleCount: {{ store.doubleCount }}</div>
  <div>doubleCountPlusOne: {{ doubleCountPlusOne }}</div>
  <button @click="store.increment()">+</button>
  <button @click="increment()">Add</button>
</template>

<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();

const onClickButton = () => {
  router.push('/');
};

const store = useCounterStore();
const { doubleCountPlusOne } = storeToRefs(store);
const { increment } = store;
</script>
