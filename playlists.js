const YTPlaylist = require('./playlist');
const YTManager = require('./manager');

class YTPlaylists extends YTManager
{
    constructor(channel)
    {
        super();
        this.channel = channel;
    }

    async list(query)
    {
        query = query || {};
        query.channelId = this.channel.id;

        const data = await super.list(query, "playlists");
        this._cache = data.map((item) => { return new YTPlaylist(item, this.channel); });

        return this.cache;
    }
}

module.exports = YTPlaylists;