<template>
  <form-group>
    <form-label :label="label" v-bind="labelProps" />
    <component :is="inputMap[type]" v-bind="inputProps" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" :options="options" />
  </form-group>
</template>

<script>
import formGroup from '../atoms/form/FormGroup'
import formLabel from '../atoms/form/FormLabel'
import numberInput from '../atoms/form/NumberInput'
import textInput from '../atoms/form/TextInput'
import selectInput from '../atoms/form/SelectInput'
import dropdownInput from '../molecules/DropdownInput'
import currencyInput from './CurrencyInput'
export default {
  name: 'DashfiInput.organism',
  components: { formGroup, formLabel, textInput, selectInput, numberInput, dropdownInput, currencyInput },
  props: {
    modelValue: { type: [String, Number, Boolean], default: () => null },
    name: { type: String, required: true },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
    options: { type: Array, default: () => undefined }
  },
  inject: ['formScope'],
  data () {
    return {
      uuid: 'uuid',
      inputMap: {
        text: 'textInput',
        number: 'numberInput',
        select: 'selectInput',
        drop: 'dropdownInput',
        currency: 'currencyInput'
      }
    }
  },
  computed: {
    scope () {
      return `${this.formScope}-${this.name}`
    },
    labelProps () {
      return {
        for: `${this.scope}-id-${this.uuid}`
      }
    },
    inputProps () {
      return {
        ...this.$attrs,
        id: `${this.scope}-id-${this.uuid}`,
        name: this.scope
      }
    }
  },
  created () {
    this.uuid = (Math.random() * 9999999).toString(16)
  },

}
</script>