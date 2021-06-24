import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './userModule';
import vehicleModule from './userModule';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    u: userModule,
    v: vehicleModule,
  }
})