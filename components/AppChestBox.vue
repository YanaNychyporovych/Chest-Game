<template>
  <div class="chest-box">
    <img
      v-if="item.isOpen"
      :src="
        item.isSuccessfully
          ? '/gifs/chest-empty.gif'
          : '/gifs/chest-not-empty.gif'
      "
      alt="chest"
      class="chest-box__item chest-box__item_gif"
    />
    <img v-else src="/images/chest.gif" alt="chest" class="chest-box__item" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.chest-box {
  background-image: url("/images/chest-box.png");
  width: 166px;
  height: 166px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 6px;
  margin-bottom: 7px;
  transition: 0.2s;
  &__item {
    width: 145px;
  }
}
</style>