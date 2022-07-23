export default {
  mounted: el => {
    el.focus();
  },
};

/**
 * directive 도 컴포넌트와 마찬가지로 아래의 Hook들을 제공
 * created(el, binding, vnode, prevVnode) {}
 * boforeMount() {}
 * mounted() {}
 * beforeUpdate() {}
 * updated() {}
 * beforeUnmount() {}
 * unmounted() {}
 */

/**
 * created의 각 매개변수들
 * el : 바인딩된 DOM
 * binding : value, oldValue, arg, modifiers, instance, dir 포함
 * vnode : 바다인딩된 vnode
 * prevNode : 이전 렌더링에서 바인딩된 vnode. beforeUpdate, updated에서만 사용할 수 있다.
 */
