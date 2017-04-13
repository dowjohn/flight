import styles from './subtinerary.styles'
import templateUrl from './subtinerary.template'

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

export const subtinerary = {
  templateUrl,
  controller,
  bindings: {
    flight: '<'
  },
  controllerAs: 'subtinerary'
}
