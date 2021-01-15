const YTVideos = require('./videos');

class YTPlaylist
{
    constructor(data, channel = null)
    {
        this.kind = data?.kind ?? this.kind;
        this.id = data?.id ?? this.kind;
        this.snippet = data?.snippet ?? this.snippet;

        this.channel = channel;
        this.videos = new YTVideos(channel, this);
    }
}

module.exports = YTPlaylist;