import fs from 'fs';
import assert from 'assert';
import { TestParams } from './init.js';
import {
    PdfResource,
    PdfInput,
    Pdf,
    Aes128Security,
    Aes256Security,
    RC4128Security,
    encryptDocumentComponents
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
describe('PDF Security', function () {
    this.timeout(0);
    var testParams = new TestParams();
    it('Aes128Security', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes128Security("user", "owner");
        pdfEndpoint.security = security;
        pdfEndpoint.inputs.push(input1);

        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes128Security.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });

    it('Aes256Security', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes256Security("user", "owner");
        pdfEndpoint.security = security;

        pdfEndpoint.inputs.push(input1);

        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes256Security.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });

    it('RC4128Security_CloudRoot', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        //var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput("XmpAndOtherSample.pdf");

        var security = new RC4128Security("user", "owner");
        pdfEndpoint.security = security;

        pdfEndpoint.inputs.push(input1);

        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/RC4128Security.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });
});