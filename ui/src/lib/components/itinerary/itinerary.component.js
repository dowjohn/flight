import styles from './itinerary.styles'
import templateUrl from './itinerary.template'

const controller = class {
  styles = styles
  savedItinerary
  constructor (flightsmanagerservice) {
    this.flightsmanagerservice = flightsmanagerservice
    this.parseItinerary()
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
