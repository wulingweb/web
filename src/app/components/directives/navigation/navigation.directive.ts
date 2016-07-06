/** @ngInject */
export class Navigation implements angular.IDirective {
  restrict = 'A';
  scope = false;
  templateUrl = 'app/components/directives/navigation/navigation.html';
  tranclude = true;
  controller = NavigationCtrl;
  controllerAs = 'Navigation';
  bindToController = true;
  replace = true;

  public static Factory() {
    return () => {
      return new Navigation();
    };
  }
  constructor() { return; }
}

/** @ngInject */
export class NavigationCtrl {
  /** @ngInject */
  constructor() {

  }
}
