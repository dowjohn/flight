/* @ngInject */
export const flightsmanagerservice = class {
  constructor ($interval, dataservice) {
    this.flights = []
    this.$interval = $interval
    this.dataservice = dataservice
    this.$interval(this.checkForChanges(), 1000)
  }

  checkForChanges () {
    return () => {
      this.dataservice.getFlights()
      .then((flights) => {
        if (this.flights.length !== 0 || this.flights[0] !== flights[0]) {
          this.flights = flights
          console.log('flights')
        }
      })
    }
  }
}
