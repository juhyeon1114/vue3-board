import { defineStore } from 'pinia';

// Store는 reactive객체
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: state => state.count * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
