import styles from './navbar.styles'
import templateUrl from './navbar.template'

const controller = class {
  styles = styles
  constructor (userstatusservice, $state) {
    this.userstatusservice = userstatusservice
    this.$state = $state
  }

  goToHistory () {
    this.$state.go('history')
  }

  goToFlights () {
    this.$state.go('home')
  }

  goToLogin () {
    this.$state.go('login')
  }

  logOut () {
    this.userstatusservice.logOut()
    this.goToLogin()
  }
}
export const navbar = {
  templateUrl,
  controller,
  controllerAs: 'navbar'
}
