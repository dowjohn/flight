export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'home',
      url: '/home',
      component: 'allflights'
    })
    .state({
      name: 'login',
      url: '/login',
      component: 'credentials'
    })
    // .state({
    //   name: 'history',
    //   url: '/history',
    //   component: 'history'
    // })

  }