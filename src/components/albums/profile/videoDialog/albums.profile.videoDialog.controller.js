class VideoController {
    constructor($sce, $stateParams) {
        console.log($stateParams);
        this.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $stateParams.videoId)
    }
}

export default VideoController;
