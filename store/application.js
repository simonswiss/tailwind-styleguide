export const state = () => ({
  count: 0
})

export const mutations = {
  updateCount(state, amount) {
    state.count = state.count + amount
  }
}
