import album1 from './1.json';
import album2 from './2.json';

class AlbumsProfileController {
    constructor($stateParams, ngDialog, $sce, $scope) {
        this.albumId = $stateParams.albumId;
        this.ngDialog = ngDialog;
        this.$sce = $sce;
        this.$scope = $scope;

        switch ($stateParams.albumId) {
            case '1':
                this.album = album1;
                break;
            case '2':
                this.album = album2;
                break;

        }
    }

    addVideo() {
        this.ngDialog.open({
            template: '<add-video album="vm.album"></add-video>',
            plain: true,
            scope: this.$scope
        })
    }
}

export default AlbumsProfileController;
