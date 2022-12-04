<template>
  <nuxt-link to="/" class="logo">
    <img src="/images/logo.png" alt="logo" class="logo__icon" />
    <img src="/images/logo-text.png" alt="logo-text" class="logo__title" />
  </nuxt-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  &__icon {
    position: relative;
    left: -8px;
  }
}
</style>