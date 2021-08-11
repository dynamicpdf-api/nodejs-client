import assert from 'assert';
import { PdfResponse } from "../lib/PdfResponse.js";
import { PdfResource } from "../lib/PdfResource.js";
import { PdfInput } from "../lib/PdfInput.js";
import { Pdf } from "../lib/Pdf.js";
import { Outline } from "../lib/Outline.js";
import { OutlineStyle } from "../lib/OutlineStyle.js";
import fs from 'fs';
import { GoToAction } from "../lib/GoToAction.js";
import { UrlAction } from "../lib/UrlAction.js";
import { ImageResource } from "../lib/ImageResource.js";
import { ImageInput } from "../lib/ImageInput.js";
import { MergeOptions } from "../lib/MergeOptions.js";
import { PageZoom } from "../lib/PageZoom.js"
import { TestParams } from './init.js';
import { RgbColor } from '../lib/RgbColor.js';
function getEndpoint(testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    var pdfEndpoint = new Pdf();
    pdfEndpoint.loggingEnabled = testParams.Logging;
    pdfEndpoint.BaseUrl = "https://localhost:44397/v1.0/pdf";
    pdfEndpoint.ApiKey = testParams.ApiKey;
    pdfEndpoint.Author = "sheetal";
    pdfEndpoint.Title = "pdf merger";
    return pdfEndpoint;
}

describe('Outline', function () {
    this.timeout(0);
    var testParams = new TestParams();
    it('simple outline PDFs', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource = new PdfResource("./Resources/Emptypages.pdf");
        var input = new PdfInput(resource);
        input.Id = "2";
        pdfEndpoint.Inputs.push(input);
        var outline = new Outline("outlineA");
        outline.Color = "Red";
        outline.Style = OutlineStyle.bold;
        outline.Expanded = true;
        pdfEndpoint.Outlines.push(outline);
        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);

            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/oultine.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
        }
        assert.strictEqual(res.IsSuccessfull, true);
    });
    it('With Goto Action', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource = new PdfResource("./Resources/Invoice.pdf");
        var input = new PdfInput(resource);
        input.Id = "invoice";
        pdfEndpoint.Inputs.push(input);

        var resource1 = new ImageResource("./Resources/CCITT_1.tif");
        var input1 = new ImageInput(resource1);
        input1.Id = "picture";
        pdfEndpoint.Inputs.push(input1);

        var resource2 = new PdfResource("./Resources/MergeOutlineInput.pdf");
        var input2 = new PdfInput(resource2);
        input2.Id = "docA100";
        pdfEndpoint.Inputs.push(input2);

        var mergeOptions = new MergeOptions();
        mergeOptions.outlines = false;
        input2.MergeOptions = mergeOptions;

        var outline = new Outline("Invoice");
        var goToAction = new GoToAction("invoice");
        goToAction.InputID = "invoice";
        outline.Action = goToAction;
        pdfEndpoint.Outlines.push(outline);

        var outline1 = new Outline("Picture");
        var goToAction1 = new GoToAction("picture");
        goToAction1.InputID = "picture";
        outline1.Action = goToAction1;
        pdfEndpoint.Outlines.push(outline1);

        var outline2 = new Outline("Outlines in Doc A 100");
        outline1 = new Outline("docA100");
        outline1.FromInputID = "docA100";
        outline2.Children.push(outline1);
        pdfEndpoint.Outlines.push(outline2);
        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);

            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/oultine1.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
        }
        assert.strictEqual(res.IsSuccessfull, true);
    });
    it('URL Action', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/Org.pdf");
        var input1 = new PdfInput(resource1);
        input1.Id = "document1";
        pdfEndpoint.Inputs.push(input1);

        resource1 = new PdfResource("./Resources/DocumentA100.pdf");
        input1 = new PdfInput(resource1);
        input1.Id = "document2";
        pdfEndpoint.Inputs.push(input1);

        var outline = new Outline("OutlineA");
        outline.Color = RgbColor.Red;
        outline.Style = OutlineStyle.bold;
        outline.Expanded = true;


        var goToAction = new GoToAction("document2");
        goToAction.InputID = "document2";
        goToAction.Style = OutlineStyle.italic;
        goToAction.PageOffset = -2;
        goToAction.PageZoom = PageZoom.FitPage;

        outline.Action = goToAction;
        pdfEndpoint.Outlines.push(outline);

        outline = new Outline("Outline2A");
        outline.Color = "blue";
        outline.Style = OutlineStyle.regular;
        outline.Expanded = false;

        goToAction = new GoToAction("document1");
        goToAction.InputID = "document1";
        goToAction.Style = OutlineStyle.italic;
        goToAction.PageZoom = PageZoom.FitHeight;

        outline.Action = goToAction;
        pdfEndpoint.Outlines.push(outline);

        outline = new Outline("DynamicPDF is Cool!");
        var urlAction = new UrlAction("https://www.dynamicpdf.com");
        outline.Action = urlAction;
        pdfEndpoint.Outlines.push(outline);
        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessfull);

            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/oultine2.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
        }
        assert.strictEqual(res.IsSuccessfull, true);
    });
});
