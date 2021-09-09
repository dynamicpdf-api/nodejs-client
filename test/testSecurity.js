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
    EncryptDocumentComponents
} from "./imports.js";

function getEndpoint(testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    var pdfEndpoint = new Pdf();
    pdfEndpoint.loggingEnabled = testParams.Logging;
    pdfEndpoint.BaseUrl = testParams.BaseUrl;
    pdfEndpoint.ApiKey = testParams.ApiKey;
    pdfEndpoint.Author = "sheetal";
    pdfEndpoint.Title = "pdf merger";
    return pdfEndpoint;
}
describe('PDF Security', function () {
    this.timeout(0);
    var testParams = new TestParams();
    it('Aes128Security', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes128Security("user", "owner");
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndpoint(testParams);
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes128Security.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);

    });

    it('Aes128Security EncryptDocumentComponents', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes128Security("user", "owner");
        security.DocumentComponents = EncryptDocumentComponents.All;
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndpoint(testParams);
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes128Security_EncryptDocumentComponents.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);

    });

    it('Aes256Security', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes256Security("", "owner");
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndpoint(testParams);
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes256Security.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);

    });

    it('Aes256Security EncryptDocumentComponents', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes256Security("user", "owner");
        security.DocumentComponents = EncryptDocumentComponents.AllExceptMetadata;
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndpoint(testParams);
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes256Security_EncryptDocumentComponents.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);

    });

    it('RC4128Security', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new RC4128Security("user", "owner");
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndpoint(testParams);
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/RC4128Security.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);

    });

    it('RC4128Security with encrypted metadata', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new RC4128Security("user", "owner");
        security.EncryptMetadata = true;
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndpoint(testParams);
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/RC4128Security_EncryptMetadata.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);

    });
});