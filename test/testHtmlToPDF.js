import fs from 'fs';
import assert from 'assert';
import { TestParams } from './init.js';
import { Html } from '../lib/Html.js';
import { HtmlInput } from '../lib/HtmlInput.js';
import { PageSize } from '../lib/PageSize.js';
import { pageSizeName } from './imports.js';
import { orientation } from '../lib/orientation.js';

function getEndpoint(testParams) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

    var endpoint = new Html();
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
        var htmlEndpoint = getEndpoint(testParams);
        var input = new HtmlInput("<html><body>hello</body></html>");
        var pageSize = new PageSize();
        pageSize.Name = pageSizeName.A5;
        htmlEndpoint.PageSize = pageSize;
        htmlEndpoint.Input = input;
        var res = await htmlEndpoint.process();

        if (res.isSuccessful) {
            var outStream = fs.createWriteStream("./output/HtmlString.pdf");
            outStream.write(res.content);
            outStream.close();
        }

        assert.strictEqual(res.isSuccessful, true);

    });
    it('Using string and basepath', async function () {
        var htmlEndpoint = getEndpoint(testParams);
        var input = new HtmlInput("<html><body><h1> HELLO</h1> <img src='googlelogo_color_272x92dp.png' /></body></html>");
        htmlEndpoint.BasePath= "https://www.google.com/images/branding/googlelogo/1x/";
        var pageSize = new PageSize(pageSizeName.DoublePostcard);
        htmlEndpoint.PageSize = pageSize;
        htmlEndpoint.Orientation = orientation.landscape;
        htmlEndpoint.Input = input;
        var res = await htmlEndpoint.process();

        if (res.isSuccessful) {
            var outStream = fs.createWriteStream("./output/HtmlStringAndBasepath.pdf");
            outStream.write(res.content);
            outStream.close();
        }

        assert.strictEqual(res.isSuccessful, true);

    });
    it('Using string and Margin', async function () {
        var htmlEndpoint = getEndpoint(testParams);
        var input = new HtmlInput("<html><body>hello</body></html>");
        htmlEndpoint.Orientation = orientation.landscape;
        htmlEndpoint.TopMargin = 300;
        htmlEndpoint.Input = input;
        var res = await htmlEndpoint.process();

        if (res.isSuccessful) {
            var outStream = fs.createWriteStream("./output/HtmlStringWithMargin.pdf");
            outStream.write(res.content);
            outStream.close();
        }

        assert.strictEqual(res.isSuccessful, true);

    });
});