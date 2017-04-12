import styles from './book-flight.styles'
import templateUrl from './book-flight.template'

const controller = class {
  styles = styles
  constructor (userstatusservice) {
    this.userstatusservice = userstatusservice
  }
}

export const bookFlight = {
  templateUrl,
  controller,
  bindings: {
    flight: '<'
  },
  controllerAs: 'bookFlight'
}
