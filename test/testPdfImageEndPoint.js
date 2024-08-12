import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    colorFormatType,
    ditheringAlgorithm,
    DpiImageSize,
    FixedImageSize,
    imageSizeUnit,
    MaxImageSize,
    PdfImage,
    PdfResource,
    PercentageImageSize,
    quantizationAlgorithm,
    TiffColorFormat,
    TiffImageFormat,
    TiffIndexedColorFormat,
    TiffMonochromeColorFormat,
    PngColorFormat,
    PngImageFormat,
    PngIndexedColorFormat,
    PngMonochromeColorFormat,
    JpegImageFormat,
    GifImageFormat,
    BmpImageFormat,
    BmpColorFormat,
    BmpMonochromeColorFormat
} from "./imports.js";

function getEndpoint(testParams, pdfResource) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    var endpoint = new PdfImage(pdfResource);
    endpoint.loggingEnabled = testParams.Logging;
    if (testParams.BaseUrl.length > 0) {
        endpoint.baseUrl = testParams.BaseUrl;
    }
    if (testParams.ApiKey.length > 0) {
        endpoint.apiKey = testParams.ApiKey;
    }
    endpoint.author = "DynamicPDF";
    endpoint.title = "DPDF API.Imaging";
    return endpoint;
}
function getOutput(response, outputName){
    for (var i = 0; i < response.images.length; i++)
        {
            const image = response.images[i];
            var outStream = fs.createWriteStream(outputName+i+ "."+response.imageFormat);
            outStream.write(Buffer.from(image.data, 'base64'));
            outStream.close();
        }
}
describe('Bmp Imaging', function () {
    this.timeout(0);
    it('BmpImageFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_PageCount', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        rast.pageCount=2;
        rast.startPageNumber=1;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_PageCount_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_FixedSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Point;
        fixedImageSize.height=500;
        fixedImageSize.width=500;
        rast.imageSize=fixedImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_FixedSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_FixedSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Inch;
        fixedImageSize.height=5;
        fixedImageSize.width=5;
        rast.imageSize=fixedImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_FixedSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_FixedSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Millimeter;
        fixedImageSize.height=200;
        fixedImageSize.width=200;
        rast.imageSize=fixedImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_FixedSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_MaxSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Point;
        maxImageSize.maxHeight=500;
        maxImageSize.maxWidth=500;
        rast.imageSize = maxImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_MaxSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_MaxSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Inch;
        maxImageSize.maxHeight=7;
        maxImageSize.maxWidth=7;
        rast.imageSize = maxImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_MaxSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_MaxSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Millimeter;
        maxImageSize.maxHeight=400;
        maxImageSize.maxWidth=400;
        rast.imageSize = maxImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_MaxSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_Dpi_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var dpiImageSize = new DpiImageSize();
        dpiImageSize.horizontalDpi=155;
        dpiImageSize.verticalDpi=155;
        rast.imageSize=dpiImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_Dpi_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_Percentage_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var percentageImageSize = new PercentageImageSize();
        percentageImageSize.horizontalPercentage=50;
        percentageImageSize.verticalPercentage=50;
        rast.imageSize = percentageImageSize;
        var bmpImageFormat = new BmpImageFormat();
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_Percentage_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_Floyd_MonoChrome', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var bmpMonochromeColorFormat = new BmpMonochromeColorFormat();
        bmpMonochromeColorFormat.ditheringAlgorithm = ditheringAlgorithm.FloydSteinberg;
        bmpMonochromeColorFormat.ditheringPercent = 50;
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = bmpMonochromeColorFormat;
        rast.imageFormat = bmpImageFormat;


        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_Floyd_MonoChrome_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_Bayer_MonoChrome', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var bmpMonochromeColorFormat = new BmpMonochromeColorFormat();
        bmpMonochromeColorFormat.ditheringAlgorithm = ditheringAlgorithm.Bayer;
        bmpMonochromeColorFormat.ditheringPercent = 50;
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = bmpMonochromeColorFormat;
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_Bayer_MonoChrome_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_RgbColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = new BmpColorFormat(colorFormatType.Rgb)
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_RgbColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_RgbAColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = new BmpColorFormat(colorFormatType.Rgba)
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_RgbColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_GrayscaleColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = new BmpColorFormat(colorFormatType.Grayscale)
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_GrayscaleColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_IndexedColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = new BmpColorFormat(colorFormatType.Indexed)
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_IndexedColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_MonochromeColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = new BmpColorFormat(colorFormatType.Monochrome)
        rast.imageFormat = bmpImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_MonochromeColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('BmpImageFormat_BlackThreshold', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/Gray.pdf", "Gray.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var bmpMonochromeColorFormat = new BmpMonochromeColorFormat();
        bmpMonochromeColorFormat.blackThreshold = 200;
        var bmpImageFormat = new BmpImageFormat();
        bmpImageFormat.colorFormat = bmpMonochromeColorFormat;
        rast.imageFormat = bmpImageFormat;
        
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/BmpImageFormat_BlackThreshold_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
});
describe('Gif Imaging', function () {
    this.timeout(0);
    it('GifImageFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_PageCount', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        rast.pageCount=2;
        rast.startPageNumber=1;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_PageCount_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_FixedSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Point;
        fixedImageSize.height=500;
        fixedImageSize.width=500;
        rast.imageSize=fixedImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_FixedSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_FixedSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Inch;
        fixedImageSize.height=5;
        fixedImageSize.width=5;
        rast.imageSize=fixedImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_FixedSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_FixedSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Millimeter;
        fixedImageSize.height=200;
        fixedImageSize.width=200;
        rast.imageSize=fixedImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_FixedSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_MaxSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Point;
        maxImageSize.maxHeight=500;
        maxImageSize.maxWidth=500;
        rast.imageSize = maxImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_MaxSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_MaxSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Inch;
        maxImageSize.maxHeight=7;
        maxImageSize.maxWidth=7;
        rast.imageSize = maxImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_MaxSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_MaxSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Millimeter;
        maxImageSize.maxHeight=400;
        maxImageSize.maxWidth=400;
        rast.imageSize = maxImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_MaxSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_Dpi_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var dpiImageSize = new DpiImageSize();
        dpiImageSize.horizontalDpi=155;
        dpiImageSize.verticalDpi=155;
        rast.imageSize=dpiImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_Dpi_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_Percentage_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var percentageImageSize = new PercentageImageSize();
        percentageImageSize.horizontalPercentage=50;
        percentageImageSize.verticalPercentage=50;
        rast.imageSize = percentageImageSize;
        var gifImageFormat = new GifImageFormat();
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_Percentage_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_FloydSteinberg', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var gifImageFormat = new GifImageFormat();
        gifImageFormat.ditheringAlgorithm = ditheringAlgorithm.FloydSteinberg;
        gifImageFormat.ditheringPercent = 50;
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_FloydSteinberg_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('GifImageFormat_Bayer', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var gifImageFormat = new GifImageFormat();
        gifImageFormat.ditheringAlgorithm = ditheringAlgorithm.Bayer;
        gifImageFormat.ditheringPercent = 50;
        rast.imageFormat = gifImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/GifImageFormat_Bayer_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
});
describe('Jpeg Imaging', function () {
    this.timeout(0);
    it('JpegImageFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_PageCount', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        rast.pageCount=2;
        rast.startPageNumber=1;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_PageCount_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_FixedSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Point;
        fixedImageSize.height=500;
        fixedImageSize.width=500;
        rast.imageSize=fixedImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_FixedSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_FixedSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Inch;
        fixedImageSize.height=5;
        fixedImageSize.width=5;
        rast.imageSize=fixedImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_FixedSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_FixedSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Millimeter;
        fixedImageSize.height=200;
        fixedImageSize.width=200;
        rast.imageSize=fixedImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_FixedSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_MaxSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Point
        maxImageSize.maxHeight=500;
        maxImageSize.maxWidth=500;
        rast.imageSize = maxImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_MaxSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_MaxSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Inch;
        maxImageSize.maxHeight=7;
        maxImageSize.maxWidth=7;
        rast.imageSize = maxImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_MaxSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_MaxSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Millimeter;
        maxImageSize.maxHeight=400;
        maxImageSize.maxWidth=400;
        rast.imageSize = maxImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_MaxSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_Dpi_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var dpiImageSize = new DpiImageSize();
        dpiImageSize.horizontalDpi=155;
        dpiImageSize.verticalDpi=155;
        rast.imageSize=dpiImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_Dpi_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_Percentage_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var percentageImageSize = new PercentageImageSize();
        percentageImageSize.horizontalPercentage=50;
        percentageImageSize.verticalPercentage=50;
        rast.imageSize = percentageImageSize;
        var jpegImageFormat = new JpegImageFormat();
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_Percentage_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('JpegImageFormat_Quality', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var jpegImageFormat = new JpegImageFormat();
        jpegImageFormat.quality = 10;
        rast.imageFormat = jpegImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/JpegImageFormat_Quality_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
});
describe('Png Imaging', function () {
    this.timeout(0);
    it('PngImageFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_PageCount', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        rast.pageCount=2;
        rast.startPageNumber=1;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_PageCount_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_FixedSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Point;
        fixedImageSize.height=500;
        fixedImageSize.width=500;
        rast.imageSize=fixedImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_FixedSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_FixedSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Inch;
        fixedImageSize.height=5;
        fixedImageSize.width=5;
        rast.imageSize=fixedImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_FixedSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_FixedSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Point;
        fixedImageSize.height=200;
        fixedImageSize.width=200;
        rast.imageSize=fixedImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_FixedSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_MaxSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Point
        maxImageSize.maxHeight=500;
        maxImageSize.maxWidth=500;
        rast.imageSize = maxImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_MaxSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_MaxSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Inch;
        maxImageSize.maxHeight=7;
        maxImageSize.maxWidth=7;
        rast.imageSize = maxImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_MaxSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_MaxSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Millimeter;
        maxImageSize.maxHeight=400;
        maxImageSize.maxWidth=400;
        rast.imageSize = maxImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_MaxSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Dpi_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var dpiImageSize = new DpiImageSize();
        dpiImageSize.horizontalDpi=155;
        dpiImageSize.verticalDpi=155;
        rast.imageSize=dpiImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Dpi_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Percentage_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var percentageImageSize = new PercentageImageSize();
        percentageImageSize.horizontalPercentage=50;
        percentageImageSize.verticalPercentage=50;
        rast.imageSize = percentageImageSize;
        var pngImageFormat = new PngImageFormat();
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Percentage_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Floyd_MonoChrome', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngMonochromeColorFormat = new PngMonochromeColorFormat();
        pngMonochromeColorFormat.ditheringAlgorithm = ditheringAlgorithm.FloydSteinberg;
        pngMonochromeColorFormat.ditheringPercent = 50;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngMonochromeColorFormat;
        rast.imageFormat = pngImageFormat;


        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Floyd_MonoChrome_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Bayer_MonoChrome', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngMonochromeColorFormat = new PngMonochromeColorFormat();
        pngMonochromeColorFormat.ditheringAlgorithm = ditheringAlgorithm.Bayer;
        pngMonochromeColorFormat.ditheringPercent = 50;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngMonochromeColorFormat;
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Bayer_MonoChrome_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Floyd_Indexed', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngIndexedColorFormat = new PngIndexedColorFormat()
        pngIndexedColorFormat.ditheringAlgorithm = ditheringAlgorithm.FloydSteinberg
        pngIndexedColorFormat.ditheringPercent = 50;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngIndexedColorFormat;
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Floyd_Indexed_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Bayer_Indexed', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngIndexedColorFormat = new PngIndexedColorFormat()
        pngIndexedColorFormat.ditheringAlgorithm = ditheringAlgorithm.Bayer
        pngIndexedColorFormat.ditheringPercent = 50;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngIndexedColorFormat;
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Bayer_Indexed_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Qa_Octree', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngIndexedColorFormat = new PngIndexedColorFormat();
        pngIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.Octree;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngIndexedColorFormat;
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Qa_Octree_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Qa_WebSafe', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngIndexedColorFormat = new PngIndexedColorFormat();
        pngIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.WebSafe;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngIndexedColorFormat;
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Qa_WebSafe_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Qa_Werner', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngIndexedColorFormat = new PngIndexedColorFormat();
        pngIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.Werner;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngIndexedColorFormat;
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Qa_Werner_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_Qa_Wu', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngIndexedColorFormat = new PngIndexedColorFormat();
        pngIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.Wu;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngIndexedColorFormat;
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_Qa_Wu_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_RgbColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = new PngColorFormat(colorFormatType.Rgb)
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_RgbColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_RgbAColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = new PngColorFormat(colorFormatType.Rgba)
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_RgbColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_GrayscaleColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = new PngColorFormat(colorFormatType.Grayscale)
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_GrayscaleColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_IndexedColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = new PngColorFormat(colorFormatType.Indexed)
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_IndexedColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_MonochromeColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = new PngColorFormat(colorFormatType.Monochrome)
        rast.imageFormat = pngImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_MonochromeColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('PngImageFormat_BlackThreshold', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/Gray.pdf", "Gray.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var pngMonochromeColorFormat = new PngMonochromeColorFormat();
        pngMonochromeColorFormat.blackThreshold = 200;
        var pngImageFormat = new PngImageFormat();
        pngImageFormat.colorFormat = pngMonochromeColorFormat;
        rast.imageFormat = pngImageFormat;
        
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/PngImageFormat_BlackThreshold_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
});
describe('Tiff Imaging', function () {
    this.timeout(0);
    it('TiffImageFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_PageCount', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        rast.pageCount=2;
        rast.startPageNumber=1;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_PageCount_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_FixedSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Point;
        fixedImageSize.height=500;
        fixedImageSize.width=500;
        rast.imageSize=fixedImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_FixedSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_FixedSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Inch;
        fixedImageSize.height=5;
        fixedImageSize.width=5;
        rast.imageSize=fixedImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_FixedSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_FixedSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var fixedImageSize = new FixedImageSize();
        fixedImageSize.unit = imageSizeUnit.Millimeter;
        fixedImageSize.height=200;
        fixedImageSize.width=200;
        rast.imageSize=fixedImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_FixedSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_MaxSize_InPoint', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Point
        maxImageSize.maxHeight=500;
        maxImageSize.maxWidth=500;
        rast.imageSize = maxImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_MaxSize_InPoint_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_MaxSize_InInch', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Inch
        maxImageSize.maxHeight=7;
        maxImageSize.maxWidth=7;
        rast.imageSize = maxImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_MaxSize_InInch_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_MaxSize_InMilliMeter', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var maxImageSize = new MaxImageSize();
        maxImageSize.unit = imageSizeUnit.Millimeter
        maxImageSize.maxHeight=400;
        maxImageSize.maxWidth=400;
        rast.imageSize = maxImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_MaxSize_InMilliMeter_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Dpi_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var dpiImageSize = new DpiImageSize();
        dpiImageSize.horizontalDpi=155;
        dpiImageSize.verticalDpi=155;
        rast.imageSize=dpiImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Dpi_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Percentage_ImageSize', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var percentageImageSize = new PercentageImageSize();
        percentageImageSize.horizontalPercentage=50;
        percentageImageSize.verticalPercentage=50;
        rast.imageSize = percentageImageSize;
        var tiffImageFormat = new TiffImageFormat();
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Percentage_ImageSize_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Floyd_MonoChrome', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffMonochromeColorFormat = new TiffMonochromeColorFormat();
        tiffMonochromeColorFormat.ditheringAlgorithm = ditheringAlgorithm.FloydSteinberg;
        tiffMonochromeColorFormat.ditheringPercent = 50;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffMonochromeColorFormat;
        rast.imageFormat = tiffImageFormat;


        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Floyd_MonoChrome_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Bayer_MonoChrome', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffMonochromeColorFormat = new TiffMonochromeColorFormat();
        tiffMonochromeColorFormat.ditheringAlgorithm = ditheringAlgorithm.Bayer;
        tiffMonochromeColorFormat.ditheringPercent = 50;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffMonochromeColorFormat;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Bayer_MonoChrome_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Floyd_Indexed', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffIndexedColorFormat = new TiffIndexedColorFormat()
        tiffIndexedColorFormat.ditheringAlgorithm = ditheringAlgorithm.FloydSteinberg
        tiffIndexedColorFormat.ditheringPercent = 50;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffIndexedColorFormat;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Floyd_Indexed_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Bayer_Indexed', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffIndexedColorFormat = new TiffIndexedColorFormat()
        tiffIndexedColorFormat.ditheringAlgorithm = ditheringAlgorithm.Bayer
        tiffIndexedColorFormat.ditheringPercent = 50;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffIndexedColorFormat;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Bayer_Indexed_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Qa_Octree', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffIndexedColorFormat = new TiffIndexedColorFormat();
        tiffIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.Octree;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffIndexedColorFormat;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Qa_Octree_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Qa_WebSafe', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffIndexedColorFormat = new TiffIndexedColorFormat();
        tiffIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.WebSafe;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffIndexedColorFormat;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Qa_WebSafe_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Qa_Werner', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffIndexedColorFormat = new TiffIndexedColorFormat();
        tiffIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.Werner;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffIndexedColorFormat;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Qa_Werner_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_Qa_Wu', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffIndexedColorFormat = new TiffIndexedColorFormat();
        tiffIndexedColorFormat.quantizationAlgorithm = quantizationAlgorithm.Wu;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffIndexedColorFormat;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_Qa_Wu_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_RgbColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = new TiffColorFormat(colorFormatType.Rgb)
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_RgbColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_RgbAColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = new TiffColorFormat(colorFormatType.Rgba)
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_RgbColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_GrayscaleColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = new TiffColorFormat(colorFormatType.Grayscale)
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_GrayscaleColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_IndexedColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = new TiffColorFormat(colorFormatType.Indexed)
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_IndexedColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_MonochromeColorFormat', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = new TiffColorFormat(colorFormatType.Monochrome)
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_MonochromeColorFormat_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_BlackThreshold', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/Gray.pdf", "Gray.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        var tiffMonochromeColorFormat = new TiffMonochromeColorFormat();
        tiffMonochromeColorFormat.blackThreshold = 200;
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.colorFormat = tiffMonochromeColorFormat;
        rast.imageFormat = tiffImageFormat;
        
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_BlackThreshold_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
    it('TiffImageFormat_MultiPage', async function () {

        var testParams = new TestParams();
        var pdfResource = new PdfResource("./Resources/DocumentA.pdf", "DocumentA.pdf");
        var rast = getEndpoint(testParams, pdfResource);
        
        var tiffImageFormat = new TiffImageFormat();
        tiffImageFormat.multiPage = true;
        rast.imageFormat = tiffImageFormat;
        var response = await rast.process();

        if (testParams.Logging) {
            console.log("Result: " + response.isSuccessful);
        }
        if (response.isSuccessful) {
            getOutput(response,"./output/TiffImageFormat_MultiPage_");
        }
        assert.strictEqual(response.isSuccessful, true);
    });
});
