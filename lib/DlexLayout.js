import FormData from 'form-data';
import http from 'https';
import { Endpoint } from "./Endpoint.js";
import { PdfResponse } from './PdfResponse.js';
export class DlexLayout extends Endpoint {
    #EndpointName = "dlex-layout";
    DlexPath;
    resource;
    DlexPath;
    #form;
    response;
    constructor(cloudDlexPath, layoutData) {
        super();
        this.DlexPath = cloudDlexPath;
        this.resource = layoutData;
    }
    async Process() {
        return await this.ProcessAsync();
    }
    ProcessAsync() {
        this.#form = new FormData();

        if (this.resource != null)
            this.#form.append('LayoutData', this.resource.Data, this.resource.resourceName, this.resource.MimeType);
        if (this.DlexPath != null)
            this.#form.append('DlexPath', this.DlexPath);

        let ret = new Promise((resolve, reject) => {
            let response = new PdfResponse();

            let url = new URL(this.BaseUrl);
            var request = http.request({
                method: 'post',
                host: url.hostname,
                path: url.pathname,
                port: url.port,
                headers: this.#form.getHeaders()
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
                        response.IsSuccessfull = true;
                    }
                    else if (s.slice(0, 1) === '{') {
                        response.SetPdfContent = Buffer.concat(outData, len);
                        response.IsSuccessfull = false;
                        //response.errorJson= 
                    }

                    if (res.statusCode != 200) {
                        response.IsSuccessfull = false;
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
            this.#form.pipe(request);
        });
        return ret;
    }
}