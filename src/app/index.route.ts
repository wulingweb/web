/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('web', {
      abstract: true
    })
    .state('web.login', {
      url: '/login',
      views: {
        'main@': {
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        }
      }
    })
    .state('web.menu', {
      abstract: true,
      views: {
        'main@': {
          templateUrl: 'app/menu/menu.html',
          controller: 'MenuController',
          controllerAs: 'menu'
        }
      }
    })
    .state('web.menu.contact', {
      url: '/contact',
      views: {
        'menu-content': {
          templateUrl: 'app/contact/contact.html',
          controller: 'ContactController',
          controllerAs: 'contact'
        }
      }
    });
  $urlRouterProvider.otherwise('/contact');
}
