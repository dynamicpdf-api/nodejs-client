import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfText,
    PdfResource
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

describe('Text Endpoint', function () {
    this.timeout(0);
    it('TextExtraction', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/TimeMachine.pdf", "TimeMachine.pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/TextExtraction.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('SinglePage', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/TimeMachine.pdf", "TimeMachine.pdf")
        var text = new PdfText(resource);
        text.startPage = 5;
        text.pageCount = 1;
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/textSinglePage.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('MultiPage', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/TimeMachine.pdf", "TimeMachine.pdf")
        var text = new PdfText(resource);
        text.startPage = 2;
        text.pageCount = 3;
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/textMultiPage.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});