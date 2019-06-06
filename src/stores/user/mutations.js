const mutations = {
    updateUserStore (data, payload) {
      // State mutations
      data.firstName = payload.firstName
      data.lastName = payload.lastName
      data.email = payload.email
      data.session = payload.session
      data.userID = payload._id
      data.isAuthenticated = true
    },
    clearUserStore (data) {
      // State mutations
      data.firstName = ''
      data.lastName = ''
      data.email = ''
      data.session = {}
      data.userID = null
      data.isAuthenticated = false
    }
  }
  
  export default mutations