import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import ngMap from 'ngMap'

import { feed } from 'components/feed'
import { mappy } from 'components/mappy'

import { dataservice } from 'services/dataservice'
import { userstatusservice } from 'services/userstatusservice'
import { mapservice } from 'services/mapservice'


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
    .service('dataservice', dataservice)
    .service('userstatusservice', userstatusservice)
    .service('mapservice', mapservice)
    .config(config)
    .config(routes)
    .run(run)
    .name
