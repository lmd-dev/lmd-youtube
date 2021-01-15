const YTManager = require('./manager');
const YTVideo = require('./video');

class YTVideos extends YTManager
{
    constructor(channel, playlist)
    {
        super();
        this.channel = channel;
        this.playlist = playlist;
    }

    async list(query)
    {
        query = query || {};
        query.playlistId = this.playlist.id;

        const data = await super.list(query, "playlistItems");

        this._cache = data.map((item) => {return new YTVideo(item, this.channel, this.playlist); });

        return this._cache;
    }
}

module.exports = YTVideos;