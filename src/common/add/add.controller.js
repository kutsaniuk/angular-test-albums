class AddController {
    constructor(ngDialog, $sce) {
        this.ngDialog = ngDialog;
        this.youtubeVideoUrl = null;
        this.$sce = $sce;
    }

    getVideo(url) {
        var videoId;

        videoId = url ? url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/) : false;

        if (videoId) {
            this.youtubeVideoUrl = this.$sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId[1]);
        }
        else
            this.youtubeVideoUrl = null;
    }

    getVideoId(video) {
        var videoId;
        videoId = video.link.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

        if (videoId) {
            video.id = videoId[1];
            video.link = undefined;
            return video;
        } else {
            return false;
        }
    }
}

export default AddController;
