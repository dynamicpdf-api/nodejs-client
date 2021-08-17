import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import { ImageInfo } from '../lib/ImageInfo.js';
import { ImageResource } from '../lib/ImageResource.js';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
function getEndpoint(text, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    text.loggingEnabled = testParams.Logging;
    text.BaseUrl = testParams.BaseUrl + text.EndpointName;
    text.ApiKey = testParams.ApiKey;
    text.Author = "sheetal";
    text.Title = "pdf merger";
    return text;
}

describe('ImageInfo Endpoint', function () {
    this.timeout(0);
    it('ImageInfo', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/Earth2.bmp");
        var image = new ImageInfo(resource);
        image =getEndpoint(image, testParams);
        var res= image.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/ImageInfo.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
});