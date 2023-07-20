import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    LayoutDataResource,
    DlexResource,
    DlexInput,
    Template,
    PageNumberingElement,
    elementPlacement,
    Pdf,
    TextElement
} from "./imports.js";

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

describe('Dlex Input', function () {
    this.timeout(0);
    it('SimpleDlex_CloudData', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlexInput = new DlexInput("TFWResources/SimpleReportWithCoverPage.dlex", "SimpleReportData.json");
        pdf.inputs.push(dlexInput);
        var res = await pdf.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleDlex_Cloud.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('Template_Pdfoutput', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlex = new DlexResource("./Resources/SimpleReportWithCoverPage.dlex");
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json");
        var dlexInput = new DlexInput(dlex, layoutData);
        var template = new Template("temp1");
        var textElement = new TextElement("Hello World", elementPlacement.topLeft);
        template.elements.push(textElement);
        dlexInput.template = template;
        pdf.inputs.push(dlexInput);
        var res = await pdf.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexTemplate_Pdfoutput.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('SimpleDlex_Pdfoutput', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlex = new DlexResource("./Resources/SimpleReportWithCoverPage.dlex");
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json");
        var dlexInput = new DlexInput(dlex, layoutData);

        pdf.inputs.push(dlexInput);
        var res = await pdf.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/SimpleDlex_Pdfoutput.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('SimpleDlex_ImageURI', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlex = new DlexResource("./Resources/dynamic-image.dlex");
        var layoutData = new LayoutDataResource("./Resources/ImageData.json");
        var dlexInput = new DlexInput(dlex, layoutData);

        pdf.inputs.push(dlexInput);
        var res = await pdf.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/SimpleDlex_ImageURIoutput.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});
