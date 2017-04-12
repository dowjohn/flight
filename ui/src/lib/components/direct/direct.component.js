import styles from './direct.styles'
import templateUrl from './direct.template'

const controller = class {
  styles = styles
  constructor (userstatusservice, $interval, flightsmanagerservice) {
    this.userstatusservice = userstatusservice
    this.$interval = $interval
    this.flightsmanagerservice = flightsmanagerservice
  }
}

export const direct = {
  templateUrl,
  controller,
  controllerAs: 'direct'
}
