import template from './albums.profile.videoDialog.html';
import controller from './albums.profile.videoDialog.controller';

let videoDialogComponent = {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default videoDialogComponent;
