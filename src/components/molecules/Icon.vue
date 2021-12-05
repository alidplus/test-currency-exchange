<template>
	<component :is="safeName" v-bind="svgProps"></component>
</template>

<script>
import iconMixin from '../../mixins/icon'

import CaretDown from '../atoms/icons/CaretDown'

export default {
	name: 'Icon.molecule',
  components: { CaretDown },
  mixins: [iconMixin],
  props: {
    name: { type: String, required: true }
  },
  computed: {
    safeName () {
      return this.name
    }
  }
}
</script>