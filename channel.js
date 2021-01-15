const YTPlaylists = require('./playlists');

/**
 * Represents a Youtube Channel
 */
class YTChannel
{
    /**
     * Constructor
     * @param {*} data Initialization data 
     */
    constructor(data)
    {        
        this.kind = data?.kind ?? this.kind;
        this.id = data?.id ?? this.kind;
        this.title = data?.snippet?.title ?? "";
        this.description = data?.snippet?.description ?? "";
        this.customUrl = data?.snippet?.customUrl ?? "";
        this.publishedAt = new Date(data?.snippet?.publishedAt) ?? null;
        this.thumbnails = data?.snippet?.thumbnails ?? {};
        this.defaultLanguage = data?.snippet?.defaultLanguage ?? "";
        this.country = data?.snippet?.country ?? "";

        this.playlists = new YTPlaylists(this);
    }
}

module.exports = YTChannel;