import http from 'https';
import { Readable } from 'stream';
import { PdfResponse } from './PdfResponse.js';

/** Represents the base class for endpoint and has settings for base url,
 * api key and creates a rest request object.
 */
export class Endpoint {

    /** Gets or sets default api key.*/
    static DefaultApiKey;
    Resources = [];
    #endPoint;
    get EndPointName() {
        return this.#endPoint;
    }
    set EndPointName(value) {
        this.#endPoint = value;
    }

    static loggingEnabled = false;

    /** Gets or Sets default base url.*/
    static DefaultBaseUrl = "https://api.dynamicpdf.com/v1.0";

    /**Gets base url for the api. */
    BaseUrl = Endpoint.DefaultBaseUrl;

    /** Gets or Sets api key. */
    ApiKey = Endpoint.DefaultApiKey;

    postForm(form, EndpointName) {
        let ret = new Promise((resolve, reject) => {
            let response = new PdfResponse();

            let url = new URL(this.BaseUrl + EndpointName);
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
                        response.ErrorJson = Buffer.concat(outData, len).toString();
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
    postHttpRequest(url, data, content, endPoint) {
        let response;
        let ret = new Promise((resolve, reject) => {
            var request = http.request(url, {
                method: 'post',
                headers: {
                    'Content-Type': content
                }

            }, function (res) {

                let outData = [];
                res.on('data', (chunk) => {
                    outData.push(chunk);
                });
                res.resume();
                res.on("end", function () {
                    request.end();
                    let len = 0;
                    outData.forEach((chunk) => { len += chunk.length; });
                    var s = outData.toString();

                    response = new endPoint(s);
                    response.IsSuccessful = true;
                    response.SetPdfContent = s;
                    response.ErrorJson = Buffer.concat(outData, len).toString();
                    response.statusCode = res.statusCode;

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
            Readable.from(data).pipe(request);
        });
        return ret;
    }
};
