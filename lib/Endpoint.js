import { PdfResponse } from './PdfResponse.js';
import http from 'https';
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
    postHttpRequest(form) {
        let ret = new Promise((resolve, reject) => {
            let response = new PdfResponse();

            let url = new URL(this.BaseUrl);
            var request = http.request({
                method: 'post',
                host: url.hostname,
                path: url.pathname,
                port: url.port,
                headers: form.getHeaders()
            }, function (res) {
                response.statusCode = res.statusCode;
                let outData = [];
                res.on('data', (chunk) => {
                    outData.push(chunk);
                });
                res.resume();
                res.on("end", function () {
                    request.end();
                    let len = 0;
                    outData.forEach((chunk) => { len += chunk.length; });
                    var s = outData.slice(0, 5).toString().trim();
                    if (s.slice(0, 5) === '%PDF-') {
                        response.SetPdfContent = Buffer.concat(outData, len);;
                        response.IsSuccessful = true;
                    }
                    else if (s.slice(0, 1) === '{') {
                        response.IsSuccessful = false;
                        response.ErrorJson = Buffer.concat(outData, len);
                        response.ErrorId = res.statusCode;
                        response.IsSuccessful = false;
                        response.statusCode
                    }

                    if (res.statusCode != 200) {
                        response.IsSuccessful = false;
                        response.statusMessage = res.statusMessage;
                        if (this.loggingEnabled) {
                            console.log(res.statusCode);
                            console.log(res.statusMessage);
                        }
                        reject(response);
                    }
                    else {
                        resolve(response);
                    }
                })

            });
            request.setHeader("Authorization", "Bearer " + this.ApiKey);
            form.pipe(request);
        });
        return ret;
    }
};
