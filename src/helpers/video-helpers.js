import { objectKeys } from 'simple-object-handler';

class VideoHelpers {
  constructor(timesheetVideos) {
    this._timesheetVideos = timesheetVideos || [];
    this._activeVideoIndex = 0;
    this._lastVideoIntex = this._timesheetVideos.length;
    this._nextVideosPreviewImageList = [];
    this._currentVideoThumbnails = {};
    this._currentVideoImageOpts = {};
  }

  get activeVideo() {
    let currentVideo = null;
    if (this._timesheetVideos.length >= this._activeVideoIndex) {
      currentVideo = this._timesheetVideos[this._activeVideoIndex];
    }
    return currentVideo;
  }

  nextVideo() {
    this._activeVideoIndex += 1;
    return this;
  }

  _isVideoIndexAvailable(index) {
    return index <= this._activeVideoIndex;
  }

  buildNextVideosPreviewImages() {
    const nextIndex = this._activeVideoIndex + 1;
    if (this._isVideoIndexAvailable(nextIndex)) {
      const nextVideos = this._timesheetVideos.slice(nextIndex);
      this._nextVideosPreviewImageList = nextVideos.map(({ timesheet_video_thumbnails }) => timesheet_video_thumbnails.url)
    }

    return this;
  };

  buildCurrentVideoThumbnails() {
    this.activeVideo.timesheet_video_thumbnails.forEach((timesheetVideoThumbnail) => {
      this._currentVideoThumbnails[timesheetVideoThumbnail.image_quality_type] = timesheetVideoThumbnail;
      if (timesheetVideoThumbnail.image_quality_type === 'default') {
        this._currentVideoImageOpts = {
          width: timesheetVideoThumbnail.width,
          height: timesheetVideoThumbnail.height,
        }
      } 
    })
    return this;
  }
};

export default VideoHelpers;