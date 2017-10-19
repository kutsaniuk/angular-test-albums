import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addComponent from './add.component';

let addModule = angular.module('albums.profile.add', [
        uiRouter
    ])

    .directive('addVideo', addComponent);

export default addModule;
