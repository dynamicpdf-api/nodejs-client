import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    ExcelResource,
    ExcelInput,
    Pdf
} from "./imports.js";

function getEndpoint(testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    var endpoint = new Pdf();
    endpoint.loggingEnabled = testParams.Logging;
    if (testParams.BaseUrl.length > 0) {
        endpoint.baseUrl = testParams.BaseUrl;
    }
    if (testParams.ApiKey.length > 0) {
        endpoint.apiKey = testParams.ApiKey;
    }
    endpoint.author = "sheetal";
    endpoint.title = "pdf merger";
    return endpoint;
}

describe('Excel Input', function () {
    this.timeout(0);
    it('ExcelToPDF', async function () {

        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var resource = new ExcelResource("./Resources/DocumentA.xlsx", "DocumentA.xlsx")
        var excel =new ExcelInput(resource);
        excel.PageWidth = 300;
        excel.PageHeight = 200;
        excel.TopMargin = 10;
        excel.BottomMargin = 10;
        excel.RightMargin = 40;
        excel.LeftMargin = 40;
        pdf.inputs.push(excel);
        var res = await pdf.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/ExcelToPDF.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});