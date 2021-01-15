const YTPlaylists = require('./playlists');

class YTChannel
{
    constructor(data)
    {
        this.kind = data?.kind ?? this.kind;
        this.id = data?.id ?? this.kind;
        this.snippet = data?.snippet ?? this.snippet;

        this.playlists = new YTPlaylists(this);
    }
}

module.exports = YTChannel;