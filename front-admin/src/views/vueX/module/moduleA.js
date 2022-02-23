export default {
  state: () => ({
    countA:"countA"
  }),
  mutations: {
    contact(state,playload){
      state.countA +=playload.amount
    }
  },
  actions: {},
  getters: {}
}