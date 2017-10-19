import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoDialogComponent from './albums.profile.videoDialog.component';

let albumsProfileVideoDialogModule = angular.module('albums.profile.videoDialog', [
        uiRouter
    ])

    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('albums.profile.videoDialog', {
                url: '/:videoId',
                onEnter: function (ngDialog, $state) {
                    ngDialog.open({
                        template: '<video-dialog></video-dialog>',
                        plain: true
                    }).closePromise.then(function () {
                        $state.go('albums.profile');
                    })
                }
            });
    })

    .component('videoDialog', videoDialogComponent);

export default albumsProfileVideoDialogModule;
