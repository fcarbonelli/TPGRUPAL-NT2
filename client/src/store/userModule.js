import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/users';

const userModule = {
  
  namespaced: true,
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

          if(data) {
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

          commit('setIsAuthenticated', false);
          commit('saveUser', {});

      } catch (error) {
          console.log(error);
      }
    },
    async checkTokenExists({commit}) {
      const token = localStorage.getItem('token');
      if(token) {
          try {
              const { data } = await axios.get(URL + '/me', {
                  headers: {
                      'Authorization': 'Bearer ' + token
                  }
              })
              if(!data){
                  localStorage.removeItem('token');
              } else {
                commit('setIsAuthenticated', true);
                commit('saveUser', data);
              }
          
          } catch (error) {
              console.log(error);
          }
      }  
    }
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
