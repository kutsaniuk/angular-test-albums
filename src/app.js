import 'ng-dialog/css/ngDialog.min.css';
import 'ng-dialog/css/ngDialog-theme-default.min.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
import ngDialog from 'ng-dialog';
import './sass/main.scss';

angular.module('myApp', [
        uiRouter,
        Common.name, 
        Components.name,
        ngDialog
    ])
    .directive('app', AppComponent);
