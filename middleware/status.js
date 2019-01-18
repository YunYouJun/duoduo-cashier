export default function({ $axios, store }) {
  if (!store.state.sessionStorage) {
    if (sessionStorage.getItem('sessionToken') !== null) {
      let sessionToken = sessionStorage.getItem('sessionToken')
      store.commit('SET_SESSION_TOKEN', sessionToken)
      $axios.setHeader('X-LC-Session', sessionToken)
    }
  }
  if (!store.state.username) {
    if (sessionStorage.getItem('username') !== null) {
      let username = sessionStorage.getItem('username')
      store.commit('SET_USER', username)
    }
  }
  if (!store.state.objectId) {
    if (sessionStorage.getItem('objectId') !== null) {
      let objectId = sessionStorage.getItem('objectId')
      store.commit('SET_OBJECT_ID', objectId)
    }
  }
}
