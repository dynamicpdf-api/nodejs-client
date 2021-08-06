export class Endpoint {
    static DefaultBaseUrl;
    static DefaultApiKey;
    BaseUrl;
    ApiKey;
    Resources = [];
    #EndPointName;
    static loggingEnabled = false;
    static get DefaultBaseUrl() {
        return "https://api.dynamicpdf.com/v1.0";
    }
    static set DefaultBaseUrl(value) {
        this.DefaultBaseUrl = value;
    }
    static get DefaultApiKey() {
        return this.DefaultApiKey;
    }
    static set DefaultApiKey(value) {
        this.DefaultApiKey = value;
    }
    get BaseUrl() {
        return this.DefaultBaseUrl;
    }
    set BaseUrl(value) {
        this.BaseUrl = value;
    }
    get ApiKey() {
        return this.DefaultApiKey;
    }
    set ApiKey(value) {
        this.ApiKey = value;
    }
};
