import http from 'https';
import { Readable } from 'stream';
import { PdfResponse } from './PdfResponse.js';
import { PdfImageResponse, Image } from './main.js';

/** Represents the base class for endpoint and has settings for base url,
 * api key and creates a rest request object.
 */
export class Endpoint {

    #endPoint;

    static loggingEnabled = false;

    resources = [];

    /** Gets or sets default api key.*/
    static defaultApiKey;

    get endPointName() {
        return this.#endPoint;
    }
    set endPointName(value) {
        this.#endPoint = value;
    }

    /** Gets or Sets default base url.*/
    static defaultBaseUrl = "https://api.dynamicpdf.com/";

    /**Gets base url for the api. */
    baseUrl = Endpoint.defaultBaseUrl;

    /** Gets or Sets api key. */
    apiKey = Endpoint.defaultApiKey;

    /** Gets or Sets the query string for the request url */
    queryString = "";

    _postForm(form, EndpointName) {
        let ret = new Promise((resolve, reject) => {
            let response = new PdfResponse();
            let endpointUrl = this.baseUrl.endsWith("/") ? this.baseUrl + "v1.0/" + EndpointName : this.baseUrl + "/v1.0/" + EndpointName;
            //endpointUrl = (this.queryString == "" || this.queryString == null || this.queryString == 'undefined') ? endpointUrl : endpointUrl + "?" + this.queryString;
            let url = new URL(endpointUrl);
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
                        response.content = Buffer.concat(outData, len);;
                        response.isSuccessful = true;
                        response.statusCode = res.statusCode;
                    }

                    if (res.statusCode != 200) {
                        if (res.statusCode === 401 ){
                            throw "Invalid api key specified.";
                        }                      
                        response.errorJson = Buffer.concat(outData, len).toString();
                        const errJson = JSON.parse(response.errorJson);
                        response.errorMessage = errJson.message;
                        response.errorId = errJson.id;
                        response.isSuccessful = false;
                        response.statusCode = res.statusCode;

                        reject(response);
                    }
                    else {
                        resolve(response);
                    }
                })

            });
            request.setHeader("Authorization", "Bearer " + this.apiKey);
            form.pipe(request);
        });
        return ret;
    }

    _postHttpRequest(url, data, content, endPoint) {
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

                    response = new endPoint((res.statusCode == 200) ? s : "{}"); // Empty JSON in case of error.
                    response.isSuccessful = true;
                    response.content = s;
                    response.errorJson = Buffer.concat(outData, len).toString();
                    response.statusCode = res.statusCode;

                    if (res.statusCode != 200) {
                        if (res.statusCode === 401 ){
                            throw "Invalid api key specified.";
                        }                      
                        const errJson = JSON.parse(response.errorJson);
                        response.errorMessage = errJson.message;
                        response.errorId = errJson.id;
                        response.isSuccessful = false;
                        response.statusCode = res.statusCode;

                        reject(response);
                    }
                    else {
                        resolve(response);
                    }
                })

            });
            request.setHeader("Authorization", "Bearer " + this.apiKey);
            Readable.from(data).pipe(request);
        });
        return ret;
    }

    _postRasterizerForm(form, EndpointName) {
        let ret = new Promise((resolve, reject) => {
            let response = new PdfImageResponse();
            let endpointUrl = this.baseUrl.endsWith("/") ? this.baseUrl + "v1.0/" + EndpointName : this.baseUrl + "/v1.0/" + EndpointName;
            endpointUrl = (this.queryString == "" || this.queryString == null || this.queryString == 'undefined') ? endpointUrl : endpointUrl + "?" + this.queryString;
            let url = new URL(endpointUrl);
            const query = url.searchParams.toString(); // Get query string portion
            var request = http.request({
                method: 'post',
                host: url.hostname,
                path: url.pathname + (query ? '?' + query : ''),
                port: url.port,
                headers: form.getHeaders()
            }, function (res) {
                response.statusCode = res.statusCode;
                let data = [];
                res.on('data', (chunk) => {
                    data.push(chunk);
                });
                res.resume();
                
                res.on('end', () => {
                    const response = new PdfImageResponse();
                    response.images = [];
                    response.statusCode = res.statusCode;
    
                    if (res.statusCode === 200) {
                        const contentType = res.headers['content-type'];
                            const buffer = Buffer.concat(data);
                            const dataString = buffer.toString();
                           
                            const pdf_image = JSON.parse(dataString);
                            const imageType = pdf_image.contentType;
                            response.imageFormat = imageType.substring(imageType.indexOf('/') + 1);
                            response.contentType = imageType;
                            response.horizontalDpi = pdf_image.horizontalDpi;
                            response.verticalDpi = pdf_image.verticalDpi;

                            pdf_image.images.forEach((img) => {
                                var image = new Image();
                                image.pageNumber = img.pageNumber || 0;
                                image.data = img.data || '';
                                image.billedPages = img.billedPages || 0;
                                image.width = img.width || 0;
                                image.height = img.height || 0;
                                response.images.push(image);
                            });

                        response.isSuccessful = true;
                    }                    
                    if (res.statusCode != 200) {
                        if (res.statusCode === 401 ){
                            throw "Invalid api key specified.";
                        }                      
                        response.errorJson = Buffer.concat(data).toString();
                        const errJson = JSON.parse(response.errorJson);
                        response.errorMessage = errJson.message;
                        response.errorId = errJson.id;
                        response.isSuccessful = false;
                        response.statusCode = res.statusCode;

                        reject(response);
                    }
                    else {
                        resolve(response);
                    }
                });
                            
            });
            request.setHeader("Authorization", "Bearer " + this.apiKey);

            request.on('error', (error) => {
                reject(error);
            });
    
            form.pipe(request);
        });
        return ret;
    }

    toJSON() {
        return {
            defaultBaseUrl: this.DefaultBaseUrl,
            DefaultApiKey: this.DefaultApiKey,
            BaseUrl: this.baseUrl,
            ApiKey: this.apiKey
        };
    }
};
