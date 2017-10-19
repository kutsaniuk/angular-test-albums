import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AlbumsProfile from './profile/albums.profile';
import albumsComponent from './albums.component';

let albumsModule = angular.module('albums', [
        uiRouter, AlbumsProfile.name
    ])

    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('albums', {
                url: '/',
                template: '<albums></albums>'
            });
    })

    .component('albums', albumsComponent);

export default albumsModule;
