import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import { LayoutDataResource } from '../lib/LayoutDataResource.js';
import { DlexLayout } from '../lib/DlexLayout.js';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
function getEndpoint(dlexEndPoint, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    dlexEndPoint.loggingEnabled = testParams.Logging;
    dlexEndPoint.BaseUrl = testParams.BaseUrl + dlexEndPoint.EndpointName;
    dlexEndPoint.ApiKey = testParams.ApiKey;
    dlexEndPoint.Author = "sheetal";
    dlexEndPoint.Title = "pdf merger";
    return dlexEndPoint;
}

describe('Dlex Endpoint', function () {
    this.timeout(0);
    it('AllReportElements', async function () {

        var testParams = new TestParams();

        var layoutData = new LayoutDataResource("./Resources/AllReportElementsData.json", "AllReportElementsData.json")
        var dlexEndPoint = new DlexLayout("resource/AllReportElements.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);

        var res = await dlexEndPoint.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexAllReportElements.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('ContactListDlex', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/ContactList.json", "ContactList.json")
        var dlexEndPoint = new DlexLayout("resource/ContactList.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexContactListDlex.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('ContentGroup', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/ContentGroupData.json", "ContentGroupData")
        var dlexEndPoint = new DlexLayout("resource/ContentGroup.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexContentGroup.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('ContentGroupSubReport', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/ContentGroupSubReportData.json", "ContentGroupSubReport.json")
        var dlexEndPoint = new DlexLayout("resource/ContentGroupSubReport.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexContentGroupSubReport.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('Simple', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json", "SimpleReportData.json")
        var dlexEndPoint = new DlexLayout("resource/SimpleReportWithCoverPage.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleReportWithCoverPage.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    
    it('Invoice', async function () {

        var testParams = new TestParams();
        var layoutData = new LayoutDataResource("./Resources/InvoiceReportData.json", "InvoiceReportData.json")
        var dlexEndPoint = new DlexLayout("resource/Invoice.dlex", layoutData);
        dlexEndPoint = getEndpoint(dlexEndPoint, testParams);
        var res = await dlexEndPoint.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexInvoice.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

});
