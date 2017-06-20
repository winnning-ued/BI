/**
 * Created by sven on 2017/6/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    index
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
