<template>
  <Teleport to="#postModal">
    <transition>
      <div v-if="modelValue">
        <div class="modal-backdrop fade show"></div>

        <!-- Modal -->
        <div
          class="modal fade d-block show"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <slot name="header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {{ title }}
                  </h5>
                </slot>
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
              <div class="modal-footer">
                <slot name="actions">
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
/**
 * component에서 v-model을 사용하려면,
 * props에는 modelValue를 emit에는 update:modelValue를 선언하고 사용하면 됨
 */
defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: '' },
  modelValue: { type: String, default: '' },
});

defineEmits(['close', 'update:modelValue']);
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
