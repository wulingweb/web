/** @ngInject */
export function config($logProvider: angular.ILogProvider, $mdThemingProvider: angular.material.IThemingProvider) {
  // enable log
  $logProvider.debugEnabled(true);
  // set options third-party lib
  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue')
    ;
}
