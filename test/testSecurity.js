import fs from 'fs';
import assert from 'assert';
import { PdfResource } from "../lib/PdfResource.js";
import { PdfInput } from "../lib/PdfInput.js";
import { Pdf } from "../lib/Pdf.js";
import { Aes256Security } from '../lib/Aes256Security.js';
import { Aes128Security } from '../lib/Aes128Security.js';
import { RC4128Security } from '../lib/RC4128Security.js';
import { TestParams } from '../test/init.js';
import { EncryptDocumentComponents } from "../lib/EncryptDocumentComponents.js";
function getEndPoint() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    var pdfEndpoint = new Pdf();
    pdfEndpoint.loggingEnabled = TestParams.Logging;
    pdfEndpoint.BaseUrl = TestParams.BaseUrl;
    pdfEndpoint.ApiKey = TestParams.ApiKey;
    pdfEndpoint.Author = "sheetal";
    pdfEndpoint.Title = "pdf merger";
    return pdfEndpoint;
}
describe('PDF Security', function () {
    this.timeout(0);
    it('Aes128Security', async function () {
        var pdfEndpoint = getEndPoint();
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes128Security("user", "owner");
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndPoint();
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (TestParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);
        }
        if (res.IsSuccessfull) {
            var outStream = fs.createWriteStream("./output/Aes128Security.pdf");
            outStream.write(res.SetPdfContent);
            outStream.close();
        }
        console.log("Asserting: " + res.IsSuccessfull);
        assert.strictEqual(res.IsSuccessfull, true);

    });
    it('Aes128Security EncryptDocumentComponents', async function () {
        var pdfEndpoint = getEndPoint();
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes128Security("user", "owner");
        security.DocumentComponents = EncryptDocumentComponents.All;
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndPoint();
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (TestParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);
        }
        if (res.IsSuccessfull) {
            var outStream = fs.createWriteStream("./output/Aes128Security_EncryptDocumentComponents.pdf");
            outStream.write(res.SetPdfContent);
            outStream.close();
        }
        console.log("Asserting: " + res.IsSuccessfull);
        assert.strictEqual(res.IsSuccessfull, true);

    });
    it('Aes256Security', async function () {
        var pdfEndpoint = getEndPoint();
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes256Security("", "owner");
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndPoint();
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (TestParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);
        }
        if (res.IsSuccessfull) {
            var outStream = fs.createWriteStream("./output/Aes256Security.pdf");
            outStream.write(res.SetPdfContent);
            outStream.close();
        }
        console.log("Asserting: " + res.IsSuccessfull);
        assert.strictEqual(res.IsSuccessfull, true);

    });
    it('Aes256Security EncryptDocumentComponents', async function () {
        var pdfEndpoint = getEndPoint();
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new Aes256Security("user", "owner");
        security.DocumentComponents = EncryptDocumentComponents.AllExceptMetadata;
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndPoint();
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (TestParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);
        }
        if (res.IsSuccessfull) {
            var outStream = fs.createWriteStream("./output/Aes256Security_EncryptDocumentComponents.pdf");
            outStream.write(res.SetPdfContent);
            outStream.close();
        }
        console.log("Asserting: " + res.IsSuccessfull);
        assert.strictEqual(res.IsSuccessfull, true);

    });
    it('RC4128Security', async function () {
        var pdfEndpoint = getEndPoint();
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new RC4128Security("user", "owner");
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndPoint();
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (TestParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);
        }
        if (res.IsSuccessfull) {
            var outStream = fs.createWriteStream("./output/RC4128Security.pdf");
            outStream.write(res.SetPdfContent);
            outStream.close();
        }
        console.log("Asserting: " + res.IsSuccessfull);
        assert.strictEqual(res.IsSuccessfull, true);

    });
    it('RC4128Security', async function () {
        var pdfEndpoint = getEndPoint();
        var resource1 = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf");
        var input1 = new PdfInput(resource1);

        var security = new RC4128Security("user", "owner");
        security.EncryptMetadata = true;
        pdfEndpoint.Security = security;

        var pdfEndpoint = getEndPoint();
        pdfEndpoint.Inputs.push(input1);

        var res = await pdfEndpoint.Process();
        if (TestParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);
        }
        if (res.IsSuccessfull) {
            var outStream = fs.createWriteStream("./output/RC4128Security_EncryptMetadata.pdf");
            outStream.write(res.SetPdfContent);
            outStream.close();
        }
        console.log("Asserting: " + res.IsSuccessfull);
        assert.strictEqual(res.IsSuccessfull, true);

    });
});