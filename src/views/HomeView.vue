<template>
  <h2>Home view</h2>
  {{ x }}
  {{ y }}
  {{ pos }}
  {{ posAsRefs }}
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue';

const pos = reactive({ x: 100, y: 1000 });
const x = toRef(pos, 'x'); // === ref(100). pos의 x와 동기화 되어 있음.
const y = toRef(pos, 'y');

const posAsRefs = toRefs(pos);
</script>

<style></style>
