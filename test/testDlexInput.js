import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    LayoutDataResource,
    DlexResource,
    DlexInput,
    Template,
    PageNumberingElement,
    ElementPlacement,
    Pdf,
    TextElement
} from "./imports.js";

function getEndpoint(testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    var pdfEndpoint = new Pdf();
    pdfEndpoint.loggingEnabled = testParams.Logging;
    pdfEndpoint.BaseUrl = testParams.BaseUrl;
    pdfEndpoint.ApiKey = testParams.ApiKey;
    pdfEndpoint.Author = "sheetal";
    pdfEndpoint.Title = "pdf merger";
    return pdfEndpoint;
}

describe('Dlex Input', function () {
    this.timeout(0);
    it('PagenumberingLabelWithTemplate', async function () {

        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlex = new DlexResource("./Resources/InvoiceOrderId.dlex");
        var layoutData = new LayoutDataResource("./Resources/InvoiceReportData.json", "InvoiceReportData.json")
        var dlexInput = new DlexInput(dlex, layoutData);
        var template = new Template('temp');
        var textElement = new PageNumberingElement("%%CP%%", ElementPlacement.TopLeft);
        template.Elements.push(textElement);
        dlexInput.Template = template;
        pdf.Inputs.push(dlexInput);
        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexPagenumberingLabelWithTemplate.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('SimpleDlex_AddDlex', async function () {

        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlex = new DlexResource("./Resources/SimpleReportWithCoverPage.dlex");
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json", "SimpleReportData.json")
        var dlexInput = new DlexInput(dlex, layoutData);

        pdf.Inputs.push(dlexInput);
        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleDlex_AddDlex.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('SimpleDlex_AddDlexCloud', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json", "SimpleReportData.json")
        var dlexInput = pdf.AddDlex("SimpleReportWithCoverPage.dlex", layoutData);

        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleDlex_AddDlexCloud.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('SimpleDlex_AddDlexCloudResourceData', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlexInput = pdf.AddDlex("SimpleReportWithCoverPage.dlex", "SimpleReportData.json");

        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleDlex_AddDlexCloudResourceData.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('SimpleDlex_Cloud', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json");
        var dlexInput = new DlexInput("SimpleReportWithCoverPage.dlex", layoutData);
        pdf.Inputs.push(dlexInput);
        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleDlex_Clouda.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('SimpleDlex_CloudData', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlexInput = new DlexInput("SimpleReportWithCoverPage.dlex", "SimpleReportData.json");
        pdf.Inputs.push(dlexInput);
        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexSimpleDlex_Clouda.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('Template_Pdfoutput', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlex = new DlexResource("./Resources/SimpleReportWithCoverPage.dlex");
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json");
        var dlexInput = new DlexInput(dlex, layoutData);
        var template = new Template("temp1");
        var textElement = new TextElement("Hello World", ElementPlacement.TopLeft);
        template.Elements.push(textElement);
        dlexInput.Template = template;
        pdf.Inputs.push(dlexInput);
        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexTemplate_Pdfoutput.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('SimpleDlex_Pdfoutput', async function () {
        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var dlex = new DlexResource("./Resources/SimpleReportWithCoverPage.dlex");
        var layoutData = new LayoutDataResource("./Resources/SimpleReportData.json");
        var dlexInput = new DlexInput(dlex, layoutData);

        pdf.Inputs.push(dlexInput);
        var res = await pdf.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/SimpleDlex_Pdfoutput.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
});
