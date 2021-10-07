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
    PageZoom,
    RgbColor,
    OutlineStyle,
    ImageInput,
    TextElement,
    ElementPlacement
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

describe('Outline', function () {
    this.timeout(0);
    var testParams = new TestParams();
    it('Add Outline', async function () {
        var pdf = getEndpoint(testParams);
        var pageInput = pdf.AddPage();
        var element = new TextElement("Hello World 1", ElementPlacement.TopCenter);
        pageInput.Elements.push(element);

        var rootOutline = pdf.Outlines.Add("Root Outline");
        rootOutline.Expanded = true;

        var res = await pdf.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineAddOutline.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Merge Pdfs', async function () {
        var pdf = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/DocumentA100.pdf");
        var input1 = pdf.AddPdf(resource1);

        var resource2 = new PdfResource("./Resources/Invoice.pdf");
        var input2 = pdf.AddPdf(resource2);

        var rootOutline = pdf.Outlines.Add("Root Outline");
        rootOutline.Expanded = true;

        rootOutline.Children.Add("DocumentA 100", input1, 0, PageZoom.FitPage);
        rootOutline.Children.Add("Invoice", input2);

        var res = await pdf.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineMergePdfs.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Text Element', async function () {
        var pdf = getEndpoint(testParams);
        var pageInput = pdf.AddPage();
        var element = new TextElement("Hello World 1", ElementPlacement.TopCenter);
        pageInput.Elements.push(element);

        var pageInput1 = pdf.AddPage();
        var element1 = new TextElement("Hello World 2", ElementPlacement.TopCenter);
        pageInput1.Elements.push(element1);

        var pageInput2 = pdf.AddPage();
        var element2 = new TextElement("Hello World 3", ElementPlacement.TopCenter);
        pageInput2.Elements.push(element2);

        var rootOutline = pdf.Outlines.Add("Root Outline");

        rootOutline.Children.Add("Page 1", pageInput);
        rootOutline.Children.Add("Page 2", pageInput1);
        rootOutline.Children.Add("Page 3", pageInput2);

        var res = await pdf.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineTextElement.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Import Outlines', async function () {
        var pdf = getEndpoint(testParams);
        var resource = new PdfResource("./Resources/AllPageElements.pdf");
        var input = pdf.AddPdf(resource);
        var resource1 = new PdfResource("./Resources/PdfOutlineInput.pdf");
        var input1 = pdf.AddPdf(resource1);
        var rootOutline = pdf.Outlines.Add("Imported Outline");
        rootOutline.Expanded = true;

        rootOutline.Children.AddPdfOutlines(input);
        rootOutline.Children.AddPdfOutlines(input1);

        var res = await pdf.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineImport.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Pdf Input FilePath Outline', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource = new PdfResource("./Resources/Emptypages.pdf");
        var input = new PdfInput(resource);
        pdfEndpoint.Inputs.push(input);

        var outline = pdfEndpoint.Outlines.Add("OutlineA");
        outline.Color = RgbColor.Blue;
        outline.Style = OutlineStyle.bold;
        outline.Expanded = true;

        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineWithFilePath.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('Pdf Input File Path Outline All', async function () {
        var pdf = getEndpoint(testParams);

        var invoiceResource = new PdfResource("./Resources/Invoice.pdf");
        var invoiceInput = new PdfInput(invoiceResource);

        pdf.Inputs.push(invoiceInput);

        var imageResource = new ImageResource("./Resources/CCITT_1.tif");
        var imageInput = new ImageInput(imageResource);
        pdf.Inputs.push(imageInput);

        var mergeOutlineResource = new PdfResource("./Resources/MergeOutlineInput.pdf");
        var mergeOutlineInput = new PdfInput(mergeOutlineResource);
        pdf.Inputs.push(mergeOutlineInput);

        var outline = pdf.Outlines.Add("Invoice", invoiceInput);

        var outline1 = pdf.Outlines.Add("Picture", imageInput);

        var outline2 = pdf.Outlines.Add("Outlines in Doc A 100");
        outline2.Children.AddPdfOutlines(mergeOutlineInput);

        var outline3 = pdf.Outlines.Add("DynamicPDF is Cool!", "https://www.dynamicpdf.com");

        var res = await pdf.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outline.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });


    it('Outlines for Existing Pdf', async function () {
        var pdfEndpoint = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/DocumentA100.pdf");
        var input1 = pdfEndpoint.AddPdf(resource1);
        input1.Id = "document2";

        var resource2 = new PdfResource("./Resources/Invoice.pdf");
        var input2 = pdfEndpoint.AddPdf(resource2);
        input2.Id = "invoice";

        var rootOutline = pdfEndpoint.Outlines.Add("Root Outline");
        rootOutline.Expanded = true;

        rootOutline.Children.Add("DocumentA 100", input1, 0, PageZoom.FitPage);
        rootOutline.Children.Add("Invoice", input2);


        var res = await pdfEndpoint.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineExistingPdf.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });


    it('With Goto Action', async function () {
        var pdf = getEndpoint(testParams);
        var resource = new PdfResource("./Resources/Org.pdf");
        var input = new PdfInput(resource);
        pdf.Inputs.push(input);

        var resource1 = new PdfResource("./Resources/SinglePage.pdf","SinglePage.pdf");
        var input1 = new PdfInput(resource1);
        pdf.Inputs.push(input1);

        var outline = pdf.Outlines.Add("OutlineA", input1, 0, PageZoom.FitPage);
        outline.Color = RgbColor.Red;
        outline.Style = OutlineStyle.Bold;
        outline.Expanded = true;
        var res = await pdf.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineWithGotoAction.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });

    it('URL Action', async function () {
        var pdf = getEndpoint(testParams);
        var resource1 = new PdfResource("./Resources/Org.pdf");
        var input1 = new PdfInput(resource1);
        input1.Id = "document1";
        pdf.Inputs.push(input1);

        var resource = new PdfResource("./Resources/EmptyPages.pdf");
        var input = new PdfInput(resource);

        pdf.Inputs.push(input);

        var outline3 = pdf.Outlines.Add("OutlineA", "https://www.dynamicpdf.com/");
        outline3.Expanded = true;
        outline3.Style = OutlineStyle.Bold;
        outline3.Color = RgbColor.Red;
        var res = await pdf.Process();
        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);

            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/outlineURLAction.pdf");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
});
