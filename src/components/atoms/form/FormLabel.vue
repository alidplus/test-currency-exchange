<template>
  <label v-if="$attrs.label">
    {{ $attrs.label }}:
  </label>
</template>

<script>
export default {
  name: 'FormLabel.atom'
}
</script>