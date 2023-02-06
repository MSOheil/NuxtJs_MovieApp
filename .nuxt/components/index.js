export { default as Body } from '../..\\components\\Body\\index.vue'
export { default as Header } from '../..\\components\\Header\\index.vue'
export { default as BodyMovieList } from '../..\\components\\Body\\MovieList\\index.vue'
export { default as HeaderHeaderContent } from '../..\\components\\Header\\HeaderContent\\index.vue'
export { default as HeaderHeaderNavbar } from '../..\\components\\Header\\HeaderNavbar\\index.vue'
export { default as HeaderHeaderVideo } from '../..\\components\\Header\\HeaderVideo\\index.vue'

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
