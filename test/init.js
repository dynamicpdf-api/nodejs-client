const cApiKey = "[YOUR API KEY GOES HERE]";
const cBaseUrl = "https://api.dynamicpdf.com/v1.0/pdf";
const cLogging = false;

export class TestParams {
    static get ApiKey() { return cApiKey; }
    static get BaseUrl() { return cBaseUrl; }
    static get Logging() { return cLogging; }
};