export const dataservice = class {
  constructor ($http) {
    this.$http = $http
    this.ipAddress = 'localhost:8000'
  }

  getFlights () {
    return this.$http.get(`http://${this.ipAddress}/flights`)
    .then((response) => {
      // console.log('success getFlights', response.data)
      return response.data
    }, (error) => {
      // console.log('failed getFlights', error.data)
    })
  }

  // doesTagExist (tag) {
  //   return this.$http.get(`http://${this.ipAddress}/api/validate/tag/exists/${tag}`)
  //   .then((response) => {
  //     console.log('success doesTagExist', response.data)
  //     return response.data
  //   }, (error) => {
  //     console.log('failed doesTagExist', error.data)
  //   })
  // }

  login (user) {
    return this.$http.post(`http://${this.ipAddress}/login`, user)
    .then((response) => {
      console.log('success login', response.data)
      return response.data
    }, (error) => {
      console.log('failed login', error.data)
    })
  }
}
