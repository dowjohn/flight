import styles from './book-flight.styles'
import templateUrl from './book-flight.template'

const controller = class {
  styles = styles
  constructor ($state, userstatusservice) {
    this.$state = $state
    this.userstatusservice = userstatusservice
  }

  goToLogin () {
    this.$state.go('login')
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
