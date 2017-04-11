import styles from './feed.styles'
import templateUrl from './feed.template'

const controller = class {
  constructor (dataservice, userstatusservice, $interval) {
    this.dataservice = dataservice
    this.$interval = $interval
    this.tweets = []
    this.userstatusservice = userstatusservice
    this.setFeed()
  }
  styles = styles
  setFeed () {
    this.dataservice.getFeed(this.userstatusservice.credentials.username).then(value => {
      this.tweets = value
    })
  }
}

export const feed = {
  templateUrl,
  controller,
  controllerAs: 'feed'
}
