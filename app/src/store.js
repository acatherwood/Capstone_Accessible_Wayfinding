import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      // build out object to make reactive 
      data: {
        displayName: null,
        email: null
      }
    },
    // add the directions hash to store the from/to values
    directions: {
      from: '',
      to: '',
    },
    routes: []
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
      
    },
    // this is the mutation that takes the data and updates the state
    SET_DIRECTIONS(state, data) {
      var userEmail = this.getters.user.data.email;
    	state.directions.from = data.from;
      state.directions.to = data.to;
    },
    SET_SAVED_ROUTE(state, route){
      state.routes.push(route);
    }
  },
  actions: {
    fetchUser({ commit, dispatch }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
        dispatch("RETRIEVE_ROUTES");
      } else {
        commit("SET_USER", null);
      }
    },
    SAVE_ROUTE({commit}, route) {
      commit("SET_SAVED_ROUTE", route);
      firebase.firestore().collection("savedRoutes").add(route)
    },
    RETRIEVE_ROUTES({commit}){
      firebase.firestore().collection("savedRoutes").get().then((snap)=>{
        const routes = snap.docs.map((docRef) => docRef.data())
        routes.forEach((route)=> {
          commit("SET_SAVED_ROUTE", route);
        })
      })
    }
  }
});