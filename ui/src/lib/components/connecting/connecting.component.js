import styles from './connecting.styles'
import templateUrl from './connecting.template'

const controller = class {
  styles = styles
  constructor (flightsmanagerservice) {
    this.flightsmanagerservice = flightsmanagerservice
  }
}

export const connecting = {
  templateUrl,
  controller,
  controllerAs: 'connecting'
}
