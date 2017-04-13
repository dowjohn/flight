/* @ngInject */
export const flightsmanagerservice = class {
  constructor ($interval, dataservice) {
    this.flights = []
    this.possibleRoutes = []
    this.$interval = $interval
    this.dataservice = dataservice
    this.startPolling()
  }

  createRoutes (allFlights) {
    let allRoutes = []
    const allFlightsTemp = allFlights
    allFlights.forEach((flight) => {
      let newFlightRoutes = []
      let newRoute = []

      allFlights.forEach((flight) => {
        if ()
      })
    })
  }

  startPolling () {
    this.$interval(this.checkForChanges(), 1000)
  }

  stopPolling () {
    this.$interval.cancel()
  }

  getUsers () {
   return this.$http.get(`http://${this.ipAddress}/users`)
   .then((response) => {
     console.log('success getUsers', response.data)
     return response.data
   }, (error) => {
     console.log('failed getUsers', error.data)
   })
  }


  // TODO add iteration to server
  checkForChanges () {
    return () => {
      this.dataservice.getFlights()
      .then((flights) => {
        if (this.flights.length === 0) {
          this.flights = flights
          this.routing = flights
          console.log('flights updated')
        }
        else {
          if (this.flights[0].destination !== flights[0].destination
              || this.flights[1].destination !== flights[1].destination
              || this.flights[2].destination !== flights[2].destination
              || this.flights[3].destination !== flights[3].destination
              || this.flights[4].destination !== flights[4].destination
              || this.flights[0].origin !== flights[0].origin
              || this.flights[1].origin !== flights[1].origin
              || this.flights[2].origin !== flights[2].origin
              || this.flights[3].origin !== flights[3].origin
              || this.flights[4].origin !== flights[4].origin
              || this.flights[0].offset !== flights[0].offset
              || this.flights[1].offset !== flights[1].offset
              || this.flights[2].offset !== flights[2].offset
              || this.flights[3].offset !== flights[3].offset
              || this.flights[4].offset !== flights[4].offset
              || this.flights[0].flightTime !== flights[0].flightTime
              || this.flights[1].flightTime !== flights[1].flightTime
              || this.flights[2].flightTime !== flights[2].flightTime
              || this.flights[3].flightTime !== flights[3].flightTime
              || this.flights[4].flightTime !== flights[4].flightTime
            ) {
            this.flights = flights
            this.routing = flights
            console.log('flights updated')
          }
        }
      }, (error) => {
        console.log(error)
      })
    }
  }
}
