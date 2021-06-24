import axios from 'axios';

const URL = '';

const vehicleModule = {

  state: {
    vehicles: [],
  },
  
  actions: {
    async getVehicles({commit}) {
      try {
        let { data } = await axios(URL);
        commit('getVehicles', data);
      } catch(e) {
        console.log(e);
      }
      return this.state.vehicles;
    },
    async saveVehicle({commit}, vehicleData) {
      try {
        let { data } = await axios.post(URL, vehicleData);
        commit('postVehicle', data);
      } catch(e) {
        console.log(e);
      }
    },
  },

  mutations: {
    getVehicles(state, data) {
      state.vehicles = data;
    },
    postVehicle(state, vehicleData) {
      state.vehicles = [...state.vehicles, vehicleData];
    },
  }

}

export default vehicleModule;