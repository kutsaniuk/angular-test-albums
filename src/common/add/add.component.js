import template from './add.html';
import controller from './add.controller';

let addComponent = function () {
    return {
        restrict: 'E',
        scope: {
            album: '='
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default addComponent;
