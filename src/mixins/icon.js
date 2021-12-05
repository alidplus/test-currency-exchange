const FONTAWESOME_ATTRIBUTES = {
  xmlns: "http://www.w3.org/2000/svg"
}
export default {
  name: 'Icon.icon.atom',
  props: {
    scale: { type: Number, default: 1 }
  },
  computed: {
    size () {
      return this.scale * 16
    },
    svgProps () {
      const { size } = this
      return { ...FONTAWESOME_ATTRIBUTES, width: size, height: size }
    }
  }
}