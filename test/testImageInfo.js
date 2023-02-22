import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    ImageInfo,
    ImageResource
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

describe('ImageInfo Endpoint', function () {
    this.timeout(0);
    it('MultipleFormat', async function () {
        var images = ["./Resources/Northwind Logo.gif","./Resources/fw9_13.tif","./Resources/DPDFLogo.png","./Resources/DocumentA.jpeg"]
        for (let i = 0; i < images.length; i++) 
        {
            var testParams = new TestParams();
            var resource = new ImageResource(images[i]);
            var image = new ImageInfo(resource);
            image = getEndpoint(image, testParams);
            var res = await image.process();

            if (testParams.Logging) 
            {
                console.log("Result: " + res.isSuccessful);
                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/ImageInfo"+i+".json");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});
