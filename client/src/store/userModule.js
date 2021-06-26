import axios from 'axios';

const URL = 'http://localhost:3000/users';

const userModule = {

  state: {
    users: [],
    user: {},
    isAuth: false
  },
  
  actions: {
    async registerHandler({commit}, credentials) {
      try {
          const { data } = await axios.post(URL, credentials);

          localStorage.setItem('token', data.token);

          if(user) {
            commit('setIsAuthenticated', true);
            commit('saveUser', data);
            return true;
          }

          return false;
      } catch (error) {
          console.log(error);
      }
    },
    async loginHandler({commit}, credentials) {
      try {
          const { data } = await axios.post(URL + '/login', credentials);
          localStorage.setItem('token', data.token);

          commit('setIsAuthenticated', true);
          commit('saveUser', data);

          return true;
      } catch (error) {
          console.log(error);
      }
    },
    async logoutHandler({commit}) {
      const token = localStorage.getItem('token');
      try {
          await axios.post(URL + '/logout', {} , {
                  headers: {
                      'Authorization': 'Bearer ' + token
                  }
          });

          localStorage.removeItem('token');

          commit('setIsAuthenticated', true);
          commit('saveUser', {});

      } catch (error) {
          console.log(error);
      }
  }
    // async getUsers({commit}) {
    //   try {
    //     let { data } = await axios(URL);
    //     commit('getUsers', data);
    //   } catch(e) {
    //     console.log(e);
    //   }
    //   return this.state.users;
    // },
  },

  mutations: {
    getUsers(state, data) {
      state.users = data;
    },
    saveUser(state, userData) {
      state.users = [...state.users, userData];
    },
    setIsAuthenticated(state, isAuth) {
      state.isAuth = isAuth;
    }
  }

}

export default userModule;