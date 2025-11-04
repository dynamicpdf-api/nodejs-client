import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfSecurityInfoEndpoint,
    PdfResource,
    encryptionType
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
    endpoint.author = "Tamilselvan";
    endpoint.title = "pdf security information";
    return endpoint;
}

describe('PdfSecurityInfo Endpoint', function () {
    this.timeout(0);
    it('Aes128PdfSecurityInfo', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Aes128Security.pdf", "Aes128Security.pdf")
        var pdfSecurityInfo = new PdfSecurityInfoEndpoint(resource);
        pdfSecurityInfo = getEndpoint(pdfSecurityInfo, testParams);
        var res = await pdfSecurityInfo.process();
        var ent = res.content.encryptionType;
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes128PdfSecurityInfo_JsonOutput.json");
                outStream.write(res.jsonContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('Aes256PdfSecurityInfo', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Aes256Security.pdf", "Aes256Security.pdf")
        var pdfSecurityInfo = new PdfSecurityInfoEndpoint(resource);
        pdfSecurityInfo = getEndpoint(pdfSecurityInfo, testParams);
        var res = await pdfSecurityInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/Aes256PdfSecurityInfo_JsonOutput.json");
                outStream.write(res.jsonContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('Rc440PdfSecurityInfo', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Rc440Security.pdf", "Rc440Security.pdf")
        var pdfSecurityInfo = new PdfSecurityInfoEndpoint(resource);
        pdfSecurityInfo = getEndpoint(pdfSecurityInfo, testParams);
        var res = await pdfSecurityInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/Rc440PdfSecurityInfo_JsonOutput.json");
                outStream.write(res.jsonContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('Rc4128PdfSecurityInfo', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Rc4128Security.pdf", "Rc4128Security.pdf")
        var pdfSecurityInfo = new PdfSecurityInfoEndpoint(resource);
        pdfSecurityInfo = getEndpoint(pdfSecurityInfo, testParams);
        var res = await pdfSecurityInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/Rc4128PdfSecurityInfo_JsonOutput.json");
                outStream.write(res.jsonContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});