import Vue from 'vue'
import './style.scss'
import store from './store/index'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })

import App from './components/App.vue'

/*let events = [
  {description: 'Random Event 1', date: moment()},
  {description: 'Random Event 2', date: moment()},
  {description: 'Random Event 3', date: moment()}
]*/

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
})

let initialState = Object.assign({}, store.state, { events })
store.replaceState(initialState)

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
