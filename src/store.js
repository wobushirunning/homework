import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agentsData: []
  },
  mutations: {
    GET_AGENTS(state, payload) {
      state.agentsData = payload.data;
    },
    UPDATE_AGENTS(state, payload) {
      let index = state.agentsData.map((item, index) => {
        if (item.id === payload.data.id) {
          return index;
        }
      });
      state.agentsData[index] = payload.data;
    }
  },
  getters: {
    agentsCount(state) {
      const agentsLength = state.agentsData.length;
      let count = {
        building: 0,
        idle: 0,
        typeCount: [
          {
            name: "ALL",
            count: agentsLength
          },
          {
            name: "PHYSICAL",
            count: 0
          },
          {
            name: "VIRTUAL",
            count: 0
          }
        ]
      };
      state.agentsData.map(item => {
        item.status === "building" ? count.building++ : count.idle++;
        item.type === "physical" ? count.typeCount[1].count++ : count.typeCount[2].count++;
      });
      return count;
    }
  },
  actions: {
    getAgents({ commit }) {
      axios
        .get("/agents")
        .then(suc => {
          commit("GET_AGENTS", suc);
        })
        .catch(err => {
          console.log("getAgents:", err);
        });
    },
    editAgents({ commit }, param) {
      return new Promise((resolve, reject) => {
        axios
          .put(`/agents/${param.id}`, param)
          .then(suc => {
            commit("UPDATE_AGENTS", suc);
            resolve(suc);
          })
          .catch(err => {
            console.log("editAgents:", err);
            reject(err);
          });
      });
    }
  }
});
