import { loadAssets  } from "../../api"

const REPLACE_ASSETS = 'DASHFI/EXCHANGE/REPLACE_ASSETS'

export default {
  state: () => ({
    assets: [],
    loading: false,
    loaded: false
  }),
  mutations: {
    [REPLACE_ASSETS] (state, payload) {
      state.assets = payload || []
      state.loaded = !!payload
      state.loading = false
    }
  },
  actions: {
    loadAssetsModule ({ commit, state }) {
      if (state.loading) return
      loadAssets()
      .then(res => {
        commit(REPLACE_ASSETS, res)
      })
      .catch(err => {
        console.warn(err)
        commit(REPLACE_ASSETS, null)
      })
    }
  },
  getters: {
    assetsOptions (state) {
      return state.assets.map(({ name, symbol }) => ({ id: symbol, label: name }))
    }
  }
}