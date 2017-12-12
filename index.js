import MoonCountDown from './MoonCountDown.vue'

const CountDown = {
  install: Vue => {
    Vue.component('moon-count-down', MoonCountDown)
  }
}
 
export default CountDown