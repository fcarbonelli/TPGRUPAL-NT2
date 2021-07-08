import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/vehicles';

const vehicleModule = {

  namespaced: true,
  state: {
    vehicles: [],
  },
  
  actions: {
    async getVehicles({commit}) {
      try {
        let data = await axios(URL);
        console.log(data.data.vehicles)
        commit('getVehicles', data.data.vehicles);
      } catch(e) {
        console.log(e);
      }
      return this.state.vehicles;
    },
    async saveVehicle({commit}, vehicleData, userToken) {
      try {
        let { data } = await axios.post(URL, vehicleData, {
          headers: {
              'Authorization': 'Bearer ' + userToken
          }
        });
        commit('postVehicle', data);
      } catch(e) {
        console.log(e);
      }
    },
    async getVehicleById(id) {
      try {
        let { data } = await axios.get(URL + '/' + id);
        return data;
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