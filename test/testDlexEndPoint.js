import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    LayoutDataResource,
    DlexLayout
} from "./imports.js";

function getEndpoint(dlexEndPoint, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    dlexEndPoint.loggingEnabled = testParams.Logging;
    dlexEndPoint.baseUrl = testParams.BaseUrl;
    dlexEndPoint.apiKey = testParams.ApiKey;
    dlexEndPoint.author = "sheetal";
    dlexEndPoint.title = "pdf merger";
    return dlexEndPoint;
}

describe('Dlex Endpoint', function () {
    this.timeout(0);
    it('AllReportElements', async function () {

        var testParams = new TestParams();

        var layoutData = new LayoutDataResource("./Resources/AllReportElementsData.json", "AllReportElementsData.json")
        var dlexEndPoint = new DlexLayout("AllReportElements.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);

        var res = await dlexEndPoint.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexAllReportElements.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('ContactListDlex', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/ContactList.json", "ContactList.json")
        var dlexEndPoint = new DlexLayout("ContactList.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexContactListDlex.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('ContentGroup', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/ContentGroupData.json", "ContentGroupData")
        var dlexEndPoint = new DlexLayout("ContentGroup.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexContentGroup.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('ContentGroupSubReport', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/ContentGroupSubReportData.json", "ContentGroupSubReport.json")
        var dlexEndPoint = new DlexLayout("ContentGroupSubReport.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexContentGroupSubReport.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('Simple', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json", "SimpleReportData.json")
        var dlexEndPoint = new DlexLayout("SimpleReportWithCoverPage.dlex", layoutData);
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
        var dlexEndPoint = new DlexLayout("Invoice.dlex", layoutData);
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
