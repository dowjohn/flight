import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import ngMap from 'ngMap'

import { allflights } from 'components/allflights'
import { direct } from 'components/direct'
import { connecting } from 'components/connecting'
import { bookFlight } from 'components/book-flight'
import { mappy } from 'components/mappy'

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
    .component('mappy', mappy)
    .component('allflights', allflights)
    .component('direct', direct)
    .component('connecting', connecting)
    .component('bookFlight', bookFlight)

    .component('login', login)
    .component('credentials', credentials)
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
