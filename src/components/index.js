import Row from './atoms/grid/Row'
import Col from './atoms/grid/Col'
import Box from './atoms/grid/Box'
import Center from './atoms/grid/Center'
import Icon from './molecules/Icon'
import DashfiForm from './molecules/DashfiForm'
import DashfiInput from './organisms/DashfiInput'
import DashfiButton from './molecules/DashfiButton'

export default {
  install (Vue) {
    Vue.component('df-icon', Icon)
    Vue.component('df-row', Row)
    Vue.component('df-col', Col)
    Vue.component('df-box', Box)
    Vue.component('df-center', Center)
    Vue.component('df-form', DashfiForm)
    Vue.component('df-input', DashfiInput)
    Vue.component('df-btn', DashfiButton)
  }
}