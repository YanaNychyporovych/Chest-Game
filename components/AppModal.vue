<template>
  <div class="modal-overlay" @click="$emit('close:modal')">
    <div class="modal" @click.stop>
      <div class="modal__wrapper">
        <button class="modal__close" @click="$emit('close:modal')">
          <img src="/icons/close-icon.svg" alt="" />
        </button>
        <p class="modal__content">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
.modal {
  padding: 1em;
  max-height: calc(100vh);
  &__wrapper {
    background: url("/images/modal.png");
    background-repeat: no-repeat;
    overflow: hidden;
    width: 323px;
    height: 174px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &__content {
    padding: 30px;
    text-align: center;
    color: $dark;
    font-size: 22px;
    line-height: 22px;
    font-weight: bold;
  }
  &__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    img {
      width: 20px;
    }
  }
}
</style>