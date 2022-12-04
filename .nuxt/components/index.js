export { default as AppBtn } from '../../components/AppBtn.vue'
export { default as AppChestBox } from '../../components/AppChestBox.vue'
export { default as AppFire } from '../../components/AppFire.vue'
export { default as AppForm } from '../../components/AppForm.vue'
export { default as AppGnome } from '../../components/AppGnome.vue'
export { default as AppLogo } from '../../components/AppLogo.vue'
export { default as AppModal } from '../../components/AppModal.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
