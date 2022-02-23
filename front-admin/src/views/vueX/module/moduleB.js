export default {
  state: () => ({
    countB:"countB"
  }),
  mutations: {
    contact(state,playload){
      state.countB +=playload.amount
    }
  },
  actions: {},
  getters: {}
}