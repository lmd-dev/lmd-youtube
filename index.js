const YTChannels = require("./channels");

class Youtube
{
    static _instance = null;
    static apiKey = "";

    constructor(apiKey)
    {
        this.channels = new YTChannels();

        Youtube.apiKey = apiKey;
    }

    static getInstance(apiKey = null)
    {
        if (Youtube._instance === null)
            Youtube._instance = new Youtube(apiKey);

        return Youtube._instance;
    }
}

module.exports = Youtube;