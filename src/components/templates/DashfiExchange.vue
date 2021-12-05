<template>
  <df-center class="w-100">
    <df-box>
      <df-form name="exchange">
        <df-row>
          <df-col col="6">
            <df-input type="currency" name="origin" v-model="exForm.origin" label="From" />
            <df-input type="number" name="value" v-model="exForm.value" />
          </df-col>
          <df-col col="6">
            <df-input type="currency" name="destination" v-model="exForm.destination" label="From" />
            <df-input type="number" name="resault" :value="amountExchanged" />
          </df-col>
        </df-row>
        <df-center class="w-100">
          <df-btn primary @click="handleSubmit" label="Convert" :loading="loading" />
        </df-center>
      </df-form>
    </df-box>
  </df-center>
</template>

<script>
import { doExchange } from "../../api"

export default {
  name: 'DashfiExchange.template',
  props: {
    msg: String
  },
  data () {
    return {
      amountExchanged: 0,
      loading: false,
      error: null,
      exForm: {
        origin: 'EUR',
        destination: 'USD',
        value: 5
      }
    }
  },
  methods: {
    async handleSubmit () {
      if (this.loading) return
      this.loading = true
      const { origin: from, destination: to, value: amount } = this.exForm
      try {
        const { amount_exchanged: amountExchanged = 0 } = await doExchange({ from, to, amount })
        this.amountExchanged = amountExchanged
      } catch (e) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
</style>
