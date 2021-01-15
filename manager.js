class YTManager
{
    constructor()
    {
        if (new.target === YTManager)
            throw "Cannot construct Manager instances. Abstract class detected.";

        this._cache = [];
    }

    get cache() { return this._cache }

    async list(query, restApi) 
    {
        try
        {
            let data = await this._list(query, restApi);

            return data.items;
        }
        catch (error)
        {
            console.error(error);
            return [];
        }
    };

    async _list(query, restApi)
    {
        const YTRequest = require("./request");

        const data = await YTRequest.send({
            restApi: restApi,
            method: "get",
            fields: query
        });

        if (query.maxResults === undefined && data.nextPageToken)
        {
            query.pageToken = data.nextPageToken;
            
            const nextData = await this._list(query, restApi);

            data.items = data.items.concat(nextData.items);
        }

        return data;
    }
}

module.exports = YTManager;