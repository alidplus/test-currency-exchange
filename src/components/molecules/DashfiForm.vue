<template>
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'DashfiForm.molecule',
  props: {
    name: { type: String, required: true },
    submit: { type: Function, default: () => {} }
  },
  provide () {
    return {
      formScope: this.name
    }
  }
}
</script>