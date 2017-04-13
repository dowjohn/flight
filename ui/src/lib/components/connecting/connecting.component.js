import styles from './connecting.styles'
import templateUrl from './connecting.template'

const controller = class {
  styles = styles
  origin = ''
  destination = ''
  constructor (flightsmanagerservice) {
    this.flightsmanagerservice = flightsmanagerservice
  }

  searchForRoute () {
    console.log(this.flightsmanagerservice.getTravelables(this.destination, this.origin))
  }
}

export const connecting = {
  templateUrl,
  controller,
  controllerAs: 'connecting'
}
