import http from 'https';
import FormData from 'form-data';
import { PdfInfoResponse } from '';
export class PdfInfo extends Endpoint {
    #resource;
    constructor(resource) {
        this.resource = resource;
    }
    #EndpointName = "pdf-info";
    StartPage;
    PageCount;
    async Process() {
        var task = ProcessAsync();
        task.Wait();
        return task.Result;
    }
    ProcessAsync() {
        this.#form = new FormData();

        let ret = new Promise((resolve, reject) => {
            this.#form.append("", resource.Data);
            let response = new PdfInfoResponse();
            var request = http.request({
                method: 'post',
                headers: this.#form.getHeader()
            }, function (res) {
                if (res.statusCode == 200) {
                    response = new PdfInfoResponse(restResponse.Content);
                    response.IsSuccessful = true;
                    if (this.loggingEnabled) {
                        console.log(res.statusCode);
                        console.log(res.statusMessage);
                    }
                    resolve(response);
                }
                else {
                    response = new PdfInfoResponse();
                    var output = restResponse.Content;
                    response.ErrorJson = restResponse.Content;
                    response.ErrorId = response.ErrorId;
                    response.ErrorMessage = restResponse.ErrorMessage;
                    response.IsSuccessful = false;
                    response.StatusCode = restResponse.StatusCode;
                }
                reject(response);
            });
            request.setHeader("Content-Type", "application/pdf");
            this.#form.pipe(request);
        });
        return ret;
    }
}