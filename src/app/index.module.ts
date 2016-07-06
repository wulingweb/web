/// <reference path="../../typings/index.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { LoginController } from './login/login.controller';
import { MenuController } from './menu/menu.controller';
import { ContactController } from './contact/contact.controller';


import { Navigation } from './components/directives/navigation/navigation.directive';
import { Toolbar } from './components/directives/toolbar/toolbar.directive';


declare var malarkey: any;
declare var moment: moment.MomentStatic;

module admin {
  'use strict';

  angular.module('admin', [
      'ngAnimate',
      'ui.router',
      'ngMaterial'
      ])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)

    .controller('LoginController', LoginController)
    .controller('MenuController', MenuController)
    .controller('ContactController', ContactController)

    .directive('navigation', Navigation.Factory())
    .directive('toolbar', Toolbar.Factory());
}
