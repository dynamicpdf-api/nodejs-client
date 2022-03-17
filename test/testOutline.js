import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfResource,
    PdfInput,
    Pdf,
    Outline,
    GoToAction,
    UrlAction,
    ImageResource,
    MergeOptions,
    pageZoom,
    RgbColor,
    outlineStyle,
    ImageInput,
    TextElement,
    elementPlacement
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

describe('Outline', function () {
    this.timeout(0);
    var testParams = new TestParams();
    
    it('Merge Pdfs', async function () {
        var pdf = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/DocumentA100.pdf");
        var input1 = pdf.addPdf(resource1);

        var resource2 = new PdfResource("./Resources/Invoice.pdf");
        var input2 = pdf.addPdf(resource2);

        var rootOutline = pdf.outlines.add("Root Outline");
        rootOutline.expanded = true;

        rootOutline.children.add("DocumentA 100", input1, 0, pageZoom.FitPage);
        rootOutline.children.add("Invoice", input2);

        var res = await pdf.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineMergePdfs.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Text Element', async function () {
        var pdf = getEndpoint(testParams);
        var pageInput = pdf.addPage();
        var element = new TextElement("Hello World 1", elementPlacement.topCenter);
        pageInput.elements.push(element);

        var pageInput1 = pdf.addPage();
        var element1 = new TextElement("Hello World 2", elementPlacement.topCenter);
        pageInput1.elements.push(element1);

        var pageInput2 = pdf.addPage();
        var element2 = new TextElement("Hello World 3", elementPlacement.topCenter);
        pageInput2.elements.push(element2);

        var rootOutline = pdf.outlines.add("Root Outline");

        rootOutline.children.add("Page 1", pageInput);
        rootOutline.children.add("Page 2", pageInput1);
        rootOutline.children.add("Page 3", pageInput2);

        var res = await pdf.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineTextElement.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Import Outlines', async function () {
        var pdf = getEndpoint(testParams);
        var resource = new PdfResource("./Resources/AllPageElements.pdf");
        var input = pdf.addPdf(resource);
        var resource1 = new PdfResource("./Resources/PdfOutlineInput.pdf");
        var input1 = pdf.addPdf(resource1);
        var rootOutline = pdf.outlines.add("Imported Outline");
        rootOutline.expanded = true;

        rootOutline.children.addPdfOutlines(input);
        rootOutline.children.addPdfOutlines(input1);

        var res = await pdf.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineImport.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('With Goto Action', async function () {
        var pdf = getEndpoint(testParams);
        var resource = new PdfResource("./Resources/Org.pdf");
        var input = new PdfInput(resource);
        pdf.inputs.push(input);

        var resource1 = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
        var input1 = new PdfInput(resource1);
        pdf.inputs.push(input1);

        var outline = pdf.outlines.add("OutlineA", input1, 0, pageZoom.FitPage);
        outline.color = RgbColor.red;
        outline.style = outlineStyle.bold;
        outline.expanded = true;
        var res = await pdf.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineWithGotoAction.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });

    it('URL Action', async function () {
        var pdf = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/Org.pdf");
        var input1 = new PdfInput(resource1);
        input1.id = "document1";
        pdf.inputs.push(input1);

        var resource = new PdfResource("./Resources/EmptyPages.pdf");
        var input = new PdfInput(resource);

        pdf.inputs.push(input);

        var outline3 = pdf.outlines.add("OutlineA", "https://www.dynamicpdf.com/");
        outline3.expanded = true;
        outline3.style = outlineStyle.bold;
        outline3.color = RgbColor.red;
        var res = await pdf.process();
        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);

            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineURLAction.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});
