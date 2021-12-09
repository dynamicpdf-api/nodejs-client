import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    ImageInfo,
    ImageResource
} from "./imports.js";

function getEndpoint(text, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    text.loggingEnabled = testParams.Logging;
    text.baseUrl = testParams.BaseUrl;
    text.apiKey = testParams.ApiKey;
    text.author = "sheetal";
    text.title = "pdf merger";
    return text;
}

describe('ImageInfo Endpoint', function () {
    this.timeout(0);
    it('Bmp', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/Earth2.bmp");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/ImageInfo.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('2bpp_png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/121_2bpp.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/ImageInfo121_2bpp.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('4bpp_png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/4bpp.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/ImageInfo4bpp.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Gif', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/Northwind Logo.gif");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/ImageInfoNorthwind_Logo.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('GrayScale_Png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/error.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoError.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('GrayScaleAlpha_Png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/gray8a.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoGrayScaleAlpha_Png.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('GrayScaleAlpha16Bit_Png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/gray16a.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoGrayScaleAlpha16Bit_Png.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Group3Fax', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/FaxTest.tif");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoFaxTest.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Group4Fax', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/CCITT_1.tif");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoGroup4Fax.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Indexed_Bmp', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/3_rescale_indexed.bmp");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoIndexed_Bmp.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('Indexed_Png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/png2.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoIndexed_Png.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Interlaced_Png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/cat.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoInterlaced_Png.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('JpegTiff', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/2 page Color.tif");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoJpegTiff.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Jpg', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/Image1.jpg");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoJpg.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('LzwTiff', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/2.tif");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoLzwTiff.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/170x220_T.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoPng.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Rgba_Png', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/Animated_PNG_example_bouncing_beach_ball.png");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoRgba_Png.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Tiff', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/Output.tiff");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoTiff.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('UnCompressedTiff', async function () {

        var testParams = new TestParams();
        var resource = new ImageResource("./Resources/16UnCompressedCMYKMM.tif");
        var image = new ImageInfo(resource);
        image = getEndpoint(image, testParams);
        var res = await image.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/imageInfoUnCompressedTiff.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});
