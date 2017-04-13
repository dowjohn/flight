/* @ngInject */
export const flightsmanagerservice = class {
  constructor ($interval, dataservice) {
    this.flights = []
    this.savedItinerary = []
    this.$interval = $interval
    this.dataservice = dataservice
    this.startPolling()
  }

  isAddable (firstFlight, secondFlight) {
    return (firstFlight.destination === secondFlight.origin && (firstFlight.offset + firstFlight.flightTime) < (secondFlight.offset))
  }

  setItinerary (destination, origin) {
    const itin = this.getTravelables(destination, origin)
    if (itin.includes('success')) {
      this.savedItinerary = itin
      console.log(this.savedItinerary)
      return this.savedItinerary
    } else {
      console.log('IT FAILED')
      return undefined
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
        console.log('direct flight possible')
        direct = true
      }
    })
    if (noPossible) {
      return []
    } else if (direct) {
      takeableFlights.push('success')
      return takeableFlights
    } else {
      return this.getParents(destination, origin)
    }
  }

  getParents(destination, origin) {
    let route = []
    for (let h = 0; h < this.flights.length; h++) {
      if (this.flights[h].destination === destination) {
        if (route.includes('success')) {
          break
        }
        route.unshift(this.flights[h])
        for (let i = 0; i < this.flights.length; i++) {
          if (this.flights[i].destination === this.flights[h].origin && this.isAddable(this.flights[i], this.flights[h])) {
            route.unshift(this.flights[i])
            if (this.flights[i].origin === origin) {
              console.log('success')
              route.push('success')
              break
            } else {
              for (let j = 0; j < this.flights.length; j++) {
                if (this.flights[j].destination === this.flights[i].origin && this.isAddable(this.flights[j], this.flights[i])) {
                  route.unshift(this.flights[j])
                  if (this.flights[j].origin === origin) {
                    console.log('success')
                    route.push('success')
                    break
                  } else {
                    for (let k = 0; k < array.length; k++) {
                      route.unshift(flightiest)
                      if (this.flights[k].destination === this.flights[k].origin && this.isAddable(this.flights[k], this.flights[k])) {
                        if (this.flights[k].origin === origin) {
                          console.log('success')
                          route.push('success')
                          break
                        } else {
                          console.log('we went too deep')
                          route = []
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return route
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
            console.log('flights updated')
          }
        }
      }, (error) => {
        console.log(error)
      })
    }
  }
}
