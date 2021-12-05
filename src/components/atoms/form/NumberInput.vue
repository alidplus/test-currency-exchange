<template>
  <input type="number" class="form-control" :value="$attrs.modelValue" @input="$emit('update:modelValue', +$event.target.value)" />
</template>

<script>
export default {
  name: 'NumberInput.atom'
}
</script>