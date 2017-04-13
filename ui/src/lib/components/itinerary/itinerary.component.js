import styles from './itinerary.styles'
import templateUrl from './itinerary.template'

const controller = class {
  styles = styles
  savedItinerary
  displayMapBoolean = false
  constructor (flightsmanagerservice, userstatusservice) {
    this.flightsmanagerservice = flightsmanagerservice
    this.userstatusservice = userstatusservice
    this.parseItinerary()
  }

  flipMap () {
    if (this.displayMapBoolean === false) {
      this.displayMapBoolean = true
    } else {
      this.displayMapBoolean = false
    }
  }

  parseItinerary () {
    let temp = this.flightsmanagerservice.savedItinerary
    this.savedItinerary = this.flightsmanagerservice.savedItinerary
    this.savedItinerary.pop()
  }

}

export const itinerary = {
  templateUrl,
  controller,
  controllerAs: 'itinerary'
}
