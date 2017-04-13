import styles from './itinerary.styles'
import templateUrl from './itinerary.template'

const controller = class {
  styles = styles
  constructor (flightsmanagerservice) {
    this.flightsmanagerservice = flightsmanagerservice
  }
}

export const itinerary = {
  templateUrl,
  controller,
  controllerAs: 'itinerary'
}
