const Youtube = require('./index');
const fetch = require('node-fetch');
/**
 * Centralize requests to the Youtube Data API
 */
class YTRequest
{
    /**
     * Send a request to the API
     * @param {*} queryFields Parameters of the request
     */
    static async send(queryFields)
    {
        let queryString = "";

        for (const field in queryFields.fields)
        {
            const value = queryFields.fields[field];

            queryString += `&${field}=`;

            if (value instanceof Array)
                queryString += value.map((item) => { return item.trim(); }).join(",");
            else
                queryString += value;
        }

        let url = `https://www.googleapis.com/youtube/v3/${queryFields.restApi}?key=${Youtube.apiKey}${queryString}`;

        const response = await fetch(url, { method: queryFields.method });
        const data = await response.json();

        return data;
    }
}

module.exports = YTRequest;