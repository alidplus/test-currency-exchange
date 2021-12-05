<template>
  <div class="input-group dashfi-dropdown-input" v-click-outside="hide">
    <input type="text" class="form-control" :id="$attrs.id" :name="$attrs.name" :value="selected?.label" @focus="show = true" readonly/>
    <button :disabled="!options.length" type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split text-white" @click.stop="show = !show">
      <span class="sr-only"></span>
    </button>
    <div v-if="options.length" class="dropdown-menu" :class="{ show }" @click.stop="hide">
      <button v-if="selected" class="dropdown-item">{{ selected.label }}</button>
      <div v-if="selected" role="separator" class="dropdown-divider my-0"></div>
      <button class="dropdown-item" v-for="opt in options" :key="opt.id" @click="$emit('update:modelValue', opt.id)">{{ opt.label }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownInput.molecule',
  props: {
    options: { type: Array, default: () => ([]) },
    modelValue: { type: String, default: '' }
  },
  data () {
    return {
      show: false 
    }
  },
  methods: {
    hide () { this.show = false }
  },
  computed: {
    selected () {
      return this.options.find(opt => opt.id === this.modelValue)
    }
  },
}
</script>

<style lang="scss">
  .dashfi-dropdown-input {
    input {
      background-color: white !important;
    }
    button {
      z-index: 1001 !important;
    }
    .dropdown-menu {
      width: 100%;
      right: 0;
      padding: 0.1rem 0;
      .dropdown-item {
        padding: 0.25rem 0.75rem;
      }
    }
  }
</style>