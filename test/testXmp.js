import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import { PdfXmp } from '../lib/PdfXmp.js';
import { PdfResource } from '../lib/PdfResource.js';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
function getEndpoint(pdfXmp, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    pdfXmp.loggingEnabled = testParams.Logging;
    pdfXmp.BaseUrl = testParams.BaseUrl;
    pdfXmp.ApiKey = testParams.ApiKey;
    pdfXmp.Author = "sheetal";
    pdfXmp.Title = "pdf merger";
    return pdfXmp;
}

describe('Xmp Endpoint', function () {
    this.timeout(0);
    it('XmpSingelResource', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/bab6c782-2e85-4c6a-b248-9518a06549e900000.pdf", "bab6c782-2e85-4c6a-b248-9518a06549e900000.pdf")
        var text = new PdfXmp(resource);
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/XmpSingelResource.xml");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('XmpSingelResource1', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/aaa_crash.pdf", "aaa_crash.pdf")
        var text = new PdfXmp(resource);
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/XmpSingelResource1.xml");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
});