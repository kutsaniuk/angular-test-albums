import template from './albums.profile.html';
import controller from './albums.profile.controller';

let albumsProfileComponent = {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default albumsProfileComponent;
