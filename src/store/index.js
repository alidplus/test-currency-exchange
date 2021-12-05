import { createStore } from 'vuex'

import exchange from './modules/exchange.module'

const store = new createStore({
  modules: {
    exchange
  }
})

export default store