<template>
  <btn :label="label" class="dashifi-btn" :class="btnClass" />
</template>

<script>
import btn from '../atoms/form/Button.vue'
export default {
  name: 'DashfiForm.molecule',
  components: { btn },
  props: {
    label: { type: String, required: true },
    primary: { type: Boolean, default: false }
  },
  provide: {
    formScope () {
      return this.name
    }
  },
  computed: {
    btnClass () {
      return {
        'btn-primary': this.primary
      }
    }
  }
}
</script>

<style lang="scss">
  .dashifi-btn {
    border-color: gray !important;
    border-radius: 0.75rem !important;
    color: white !important;
  }
</style>