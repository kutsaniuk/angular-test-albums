import template from './albums.html';
import controller from './albums.controller';

let albumsComponent = {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
};

export default albumsComponent;
