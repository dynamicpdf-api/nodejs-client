import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfXmp,
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

describe('Xmp Endpoint', function () {
    this.timeout(0);
    it('XmpResource', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/XmpAndOtherSample.pdf", "XmpAndOtherSample.pdf")
        var text = new PdfXmp(resource);
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/XmpSingelResource.xml");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});