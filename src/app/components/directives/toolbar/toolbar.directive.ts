/** @ngInject */
export class Toolbar implements angular.IDirective {
  restrict = 'A';
  scope = false;
  templateUrl = 'app/components/directives/toolbar/toolbar.html';
  tranclude = true;
  controller = ToolbarCtrl;
  controllerAs = 'Toolbar';
  bindToController = true;
  // replace = true;

  public static Factory() {
    return () => {
      return new Toolbar();
    };
  }
  constructor() { return; }
}

/** @ngInject */
export class ToolbarCtrl {
  /** @ngInject */
  constructor(
    private $mdBottomSheet: angular.material.IBottomSheetService
    ) {

  }

  showMenu() {
   let self = this;
   self.$mdBottomSheet.show({
     templateUrl: 'app/components/services/bottom-menu/bottom-menu-list.html',
     controller: ListBottomSheetCtrl,
     controllerAs: 'vm'
   });
  }
}

/** @ngInject */
export class ListBottomSheetCtrl {
  /** @ngInject */
  constructor() {

  }
}
