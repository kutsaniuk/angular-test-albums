import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumsProfileComponent from './albums.profile.component';
import albumsProfileVideoDialog from './videoDialog/albums.profile.videoDialog'

let albumsProfileModule = angular.module('albums.profile', [
        uiRouter,
        albumsProfileVideoDialog.name
    ])

    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('albums.profile', {
                url: 'albums/:albumId',
                views: {
                    '@': {
                        template: '<albums-profile></albums-profile>'
                    }
                }
            });
    })

    .component('albumsProfile', albumsProfileComponent);

export default albumsProfileModule;
