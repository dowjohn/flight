import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import ngMap from 'ngMap'

import { direct } from 'components/direct'
import { mappy } from 'components/mappy'
import { allflights } from 'components/allflights'
import { bookFlight } from 'components/book-flight'

import { credentials} from 'components/credentials'
import { login } from 'components/login'
import { createUser } from 'components/create-user'

import { navbar } from 'components/navbar'

import { dataservice } from 'services/dataservice'
import { userstatusservice } from 'services/userstatusservice'
import { mapservice } from 'services/mapservice'
import { flightsmanagerservice } from 'services/flightsmanagerservice'


import { app } from './app.component'
import { config } from './app.config'
import { routes } from './app.routes'
import { run } from './app.run'

export default
  angular
    .module('app.app', [
      ngAnimate,
      ngAria,
      ngMaterial,
      ngMessages,
      uiRouter,
      ngMap
    ])
    .component('app', app)
    .component('allflights', allflights)
    .component('mappy', mappy)
    .component('direct', direct)
    .component('bookFlight', bookFlight)

    .component('credentials', credentials)
    .component('login', login)
    .component('createUser', createUser)

    .component('navbar', navbar)

    .service('dataservice', dataservice)
    .service('userstatusservice', userstatusservice)
    .service('mapservice', mapservice)
    .service('flightsmanagerservice', flightsmanagerservice)
    .config(config)
    .config(routes)
    .run(run)
    .name
