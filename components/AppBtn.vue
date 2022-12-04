<template>
  <button
    type="button"
    class="primary-btn"
    :class="{ gold: type === 'gold', disabled: disabled }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <img
      class="primary-btn__bg"
      :src="type === 'gold' ? '/images/button.png' : '/images/button-grey.png'"
      alt="button"
    />
    <span class="primary-btn__title"> {{ title }}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Купить",
    },
    type: {
      type: String,
      default: "gold",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.primary-btn {
  font-size: 36px;
  width: 228px;
  height: 63px;
  line-height: normal;
  color: $dark-btn;
  text-transform: uppercase;
  font-family: "a_BremenCaps";
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  opacity: 1;
  transition: 0.2s;
  &__bg {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4px;
  }
  &__title {
    z-index: 1;
    position: relative;
  }
  &.gold {
    color: $gold-btn;
  }
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.8;
  }
}
</style>