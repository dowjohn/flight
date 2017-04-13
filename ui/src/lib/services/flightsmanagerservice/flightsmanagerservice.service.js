/* @ngInject */
export const flightsmanagerservice = class {
  constructor ($interval, dataservice) {
    this.flights = []
    this.possibleRoutes = []
    this.permutations = []
    this.$interval = $interval
    this.dataservice = dataservice
    this.startPolling()
    // this.startPermPolling()
  }

  // startPermPolling () {
  //   this.$interval(this.getLocationPermutations(), 1000)
  // }

  // index 0 of each nested array (possibleNextFlights) is the original flight
  // getLocationPermutations () {
  //   return () => {
  //     this.dataservice.getFlights()
  //     .then((flights) => {
  //       this.permutations = []
  //       flights.forEach((flightOrigin) => {
  //         let possibleNextFlights = []
  //         flights.forEach((nextFlight) => {
  //           if (this.isAddable(flightOrigin, nextFlight)) {
  //             possibleNextFlights.push(nextFlight)
  //           }
  //         })
  //         this.permutations.push(possibleNextFlights)
  //       })
  //       console.log(this.permutations)
  //     })
  //   }
  // }

  isAddable (firstFlight, secondFlight) {
    if (firstFlight.destination === secondFlight.origin && (firstFlight.offset + firstFlight.flightTime) < (secondFlight.offset)) {
      return true
    }
    else {
      return false
    }
  }

  getTravelables(destination, origin) {
    let takeableFlights = []
    let direct = false
    let noPossible = true
    this.flights.forEach(flight => {
      if (flight.destination.toLowerCase() === destination.toLowerCase()) {
        noPossible = false
      }
      if (flight.origin === origin && flight.destination === destination) {
        takeableFlights.push(flight)
        direct = true
      }
    })
    if (noPossible) {
      return []
    } else if (direct) {
      return takeableFlights
    } else {
      return this.getParentTree(destination, origin)
    }
  }

  getParentTree(destination, origin) {
    let route = []
    this.flights.forEach(flight => {
      if (flight.destination === destination) {
        route.unshift(flight)
        this.flights.forEach(flighty => {
          if (flighty.destination === flight.origin && this.isAddable(flighty, flight)) {
            route.unshift(flighty)
            if (flighty.origin === origin) {
              console.log('success')
              route.push('success')
              return route
            } else {
              this.flights.forEach(flightier => {
                if (flightier.destination === flighty.origin && this.isAddable(flightier, flighty)) {
                  route.unshift(flightier)
                  if (flightier.origin === origin) {
                    console.log('success')
                    route.push('success')
                    return route
                  } else {
                    this.flights.forEach(flightiest => {
                      route.unshift(flightiest)
                      if (flightiest.destination === flightier.origin && this.isAddable(flightiest, flightier)) {
                        if (flightiest.origin === origin) {
                          console.log('success')
                          route.push('success')
                          return route
                        } else {
                          console.log('we went too deep')
                          route = []
                        }
                      }
                    })
                  }
                }
              })
            }
          }
        })
      }
    })
    console.log(route, 'shitty routing')
    return
  }

  startPolling () {
    this.$interval(this.checkForChanges(), 1000)
  }

  stopPolling () {
    this.$interval.cancel()
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
