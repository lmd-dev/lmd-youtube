const YTChannel = require("./channel");
const YTManager = require('./manager');

class YTChannels extends YTManager
{
    constructor()
    {
        super();
    }

    async list(query)
    {
        const data = await super.list(query, "channels");

        this._cache = data.map((item) => { return new YTChannel(item); });

        return this.cache;
    }
}

module.exports = YTChannels