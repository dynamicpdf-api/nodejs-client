import fs from 'fs';
import assert from 'assert';
import { TestParams } from './init.js';
import { HtmlInput } from '../lib/HtmlInput.js';
import { PageSize } from '../lib/PageSize.js';
import { Orientation } from '../lib/orientation.js';
import { HtmlResource } from '../lib/HtmlResource.js';
import { Pdf } from './imports.js';

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

describe('HTML to PDF', function () {
    this.timeout(0);
    var testParams = new TestParams();
    it('Using string', async function () {
        var resource = new HtmlResource("<html><body>hello</body></html>");
        var pdfEndpoint = getEndpoint(testParams);
        var input = new HtmlInput(resource, PageSize.DoublePostcard);
        pdfEndpoint.inputs.push(input);
        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/HtmlString.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });
    it('Using string and parameters', async function () {
        var resource = new HtmlResource("<html><body><h1> HELLO</h1> <img src='googlelogo_color_272x92dp.png' /></body></html>");
        var pdfEndpoint = getEndpoint(testParams);
        var input = new HtmlInput(resource, PageSize.DoublePostcard, Orientation.landscape);
        input.BasePath = "https://www.google.com/images/branding/googlelogo/1x/";
        input.PageWidth = 300;
        input.PageHeight = 200;
        input.TopMargin = 10;
        input.BottomMargin = 10;
        input.RightMargin = 40;
        input.LeftMargin = 40;
        pdfEndpoint.inputs.push(input);
        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/HtmlStringAndBasepath.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });
    it('Using Resource', async function () {
        var resource = new HtmlResource("./Resources/html.html");
        var pdfEndpoint = getEndpoint(testParams);
        var input = new HtmlInput(resource, PageSize.DoublePostcard);
        pdfEndpoint.inputs.push(input);
        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/HtmlStringWithMargin.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });
    it('Using Resource and PageHeightPageWidth', async function () {
        var resource = new HtmlResource("./Resources/html.html");
        var pdfEndpoint = getEndpoint(testParams);
        var input = new HtmlInput(resource, "", PageSize.DoublePostcard);
        input.PageHeight = 400;
        input.PageWidth = 300;
        pdfEndpoint.inputs.push(input);
        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/HtmlResourceWithMargin.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });
    it('Using Resource and PageSize', async function () {
        var resource = new HtmlResource("./Resources/html.html");
        var pdfEndpoint = getEndpoint(testParams);
        var input = new HtmlInput(resource, "", PageSize.DoublePostcard);
        //input.PageSize=PageSize.A3;
        pdfEndpoint.inputs.push(input);
        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/HtmlResourceWithPageSize.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });
    it('Using Resource and parameters', async function () {
        var resource = new HtmlResource("./Resources/html.html");
        var pdfEndpoint = getEndpoint(testParams);
        var input = new HtmlInput(resource, "", PageSize.DoublePostcard);
        //input.PageSize=PageSize.A3;
        input.PageOrientation = Orientation.landscape;
        input.LeftMargin = 30;
        input.RightMargin = 30;
        input.TopMargin = 30;
        input.BottomMargin = 30;
        pdfEndpoint.inputs.push(input);
        var res = await pdfEndpoint.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/HtmlResourceWithPageSize.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);

    });
});