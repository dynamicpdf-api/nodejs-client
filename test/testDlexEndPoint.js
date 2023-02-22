import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    LayoutDataResource,
    DlexLayout
} from "./imports.js";

function getEndpoint(endpoint, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
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

describe('Dlex Endpoint', function () {
    this.timeout(0);

    it('Simple', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json", "SimpleReportData.json")
        var dlexEndPoint = new DlexLayout("TFWResources/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleReportWithCoverPage.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('Invoice', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/InvoiceReportData.json", "InvoiceReportData.json")
        var dlexEndPoint = new DlexLayout("TFWResources/InvoiceOrderId.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexInvoice.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

});
