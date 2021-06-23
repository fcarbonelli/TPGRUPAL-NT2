import axios from 'axios';

const URL = '';

export default userModule = {

  state: {
    users: [],
  },
  
  actions: {
    async getUsers({commit}) {
      try {
        let { data } = await axios(URL);
        commit('getUsers', data);
      } catch(e) {
        console.log(e);
      }
      return this.state.users;
    },
    async saveUser({commit}, userData) {
      try {
        let { data } = await axios.post(URL, userData);
        commit('postUser', data);
      } catch(e) {
        console.log(e);
      }
    },
  },

  mutations: {
    getUsers(state, data) {
      state.users = data;
    },
    postUser(state, userData) {
      state.users = [...state.users, userData];
    },
  }

}
