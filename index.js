import MoonCountDown from './MoonCountDown.vue'
import MoonInfiniteScroll from './MoonInfiniteScroll.vue'

const CountDown = {
  install: Vue => {
    Vue.component('moon-count-down', MoonCountDown)
  }
}
const InfiniteScroll = {
  install: Vue => {
    Vue.component('moon-infinite-scroll', MoonInfiniteScroll)
  }
}

const MoonUI = {
  install: Vue => {
    Vue.component('moon-count-down', MoonCountDown)
    Vue.component('moon-infinite-scroll', MoonInfiniteScroll)
  }
}
 
export  { 
  CountDown,
  InfiniteScroll
}

export default MoonUI