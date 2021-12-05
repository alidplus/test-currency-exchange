<template>
  <dropdownInput v-bind="$attrs" :options="assetsOptions" :modelValue="$attrs.modelValue" @update:modelValue="$emit('update:modelValue', $event)" />
</template>

<script>
import dropdownInput from '../molecules/DropdownInput'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CurrencyInput.organism',
  components: { dropdownInput },
  computed: mapGetters(['assetsOptions']),
  methods: mapActions(['loadAssetsModule']),
  mounted () {
    this.loadAssetsModule()
  }
}
</script>