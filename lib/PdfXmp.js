import http from 'https';
import { Endpoint } from "./Endpoint.js";
import { XmlResponse } from './XmlResponse.js';
export class PdfXmp extends Endpoint {
    EndpointName = "pdf-xmp";
    resource;
    constructor(resource)
    {
        super();
        this.resource=resource;
    }
    async Process() {
        return await this.ProcessAsync();
    }
    ProcessAsync() {

        let ret = new Promise((resolve, reject) => {
            let response;
            let url = new URL(this.BaseUrl);
            var request = http.request({
                method: 'post',
                host: url.hostname,
                path: url.pathname,
                port: url.port,
                headers: {
                    'Content-Type': 'application/pdf'
                }

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
                        var content = Buffer.concat(outData, len)
                        response = new XmlResponse(content);
                        response.SetPdfContent = content;
                        response.IsSuccessful = true;
                    }
                    else if (s.slice(0, 1) === '{') {
                        response = new XmpResponse();
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
            request.write(this.resource.Data);
        });
        return ret;
    }
};