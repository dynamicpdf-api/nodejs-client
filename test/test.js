import fs from 'fs';
import assert from 'assert';
import { PdfResource } from "../lib/PdfResource.js";
import { PdfInput } from "../lib/PdfInput.js";
import { Pdf } from "../lib/Pdf.js";
import { FormField } from '../lib/FormField.js';
import { ImageResource } from '../lib/ImageResource.js';
import { ImageInput } from '../lib/ImageInput.js';
import { PageInput } from '../lib/PageInput.js';
import { TextElement } from '../lib/elements/TextElement.js'
import { ElementPlacement } from '../lib/elements/ElementPlacement.js';
import { Font } from '../lib/Font.js';
import { TestParams } from './init.js';
import { Template } from '../lib/Template.js';
import { ImageElement } from '../lib/elements/ImageElement.js';
import { CmykColor } from '../lib/CmykColor.js';
import { RgbColor } from '../lib/RgbColor.js';
import { Grayscale } from '../lib/Grayscale.js';
import { MergeOptions } from '../lib/MergeOptions.js';
function getEndPoint() {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    var pdfEndpoint = new Pdf();
    pdfEndpoint.loggingEnabled = TestParams.Logging;
    pdfEndpoint.BaseUrl = TestParams.BaseUrl;
    pdfEndpoint.ApiKey = TestParams.ApiKey;
    pdfEndpoint.Author = "sheetal";
    pdfEndpoint.Title = "pdf merger";
    return pdfEndpoint;
}
describe('PdfEndpoint', function () {
    this.timeout(0);
    describe('Merge of two PDFs', function () {

        it('Merge', async function () {

            var resource1 = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var resource2 = new PdfResource("./Resources/DocumentA100.pdf", "DocumentA100.pdf");
            var input1 = new PdfInput(resource1);

            var input2 = new PdfInput(resource2);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input1);
            pdfEndpoint.Inputs.push(input2);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/Merge.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }

            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Merge Options', async function () {
            var pdfEndpoint = getEndPoint();
            var template = new Template("temp1");
            var element = new TextElement("Merger with Template(even pages", ElementPlacement.TopCenter);
            element.EvenPages = true;
            template.Elements.push(element);

            var resource1 = new PdfResource("./Resources/AllPageElements.pdf", "AllPageElements.pdf");
            var input = new PdfInput(resource1);
            input.Template = template;

            var mergeOptions = new MergeOptions();
            mergeOptions.documentInfo = true;
            input.MergeOptions = mergeOptions;
            pdfEndpoint.Inputs.push(input);

            var resource2 = new PdfResource("./Resources/DocumentA100.pdf", "DocumentA100.pdf");
            var input1 = new PdfInput(resource2);
            input1.Template = template;

            input1.StartPage = 1;
            input1.PageCount = 1;

            var mergeOptions1 = new MergeOptions();
            mergeOptions1.FormsXfaData = true;
            input1.MergeOptions = mergeOptions1;
            pdfEndpoint.Inputs.push(input1);

            var resource3 = new PdfResource("./Resources/fw9AcroForm_14.pdf");
            var input2 = new PdfInput(resource3);
            input2.Template = template;

            pdfEndpoint.Inputs.push(input2);

            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/MergeWithOptions.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }

            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Add page and pdf input', function () {

        it('Add page and pdf input', async function () {
            var pdfEndpoint = getEndPoint();
            var resource1 = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var input1 = new PdfInput(resource1);
            pdfEndpoint.Inputs.push(input1);

            var input2 = pdfEndpoint.AddPage();
            var element = new TextElement("test", ElementPlacement.TopCenter);
            input2.Elements.push(element);

            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/pageAndPdf.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }

            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Add page and pdf input with Properties', async function () {
            var pdfEndpoint = getEndPoint();
            var resource1 = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var input1 = new PdfInput(resource1);
            pdfEndpoint.Inputs.push(input1);

            var input2 = pdfEndpoint.AddPage(500, 600);
            var element = new TextElement("test", ElementPlacement.TopCenter);
            input2.Elements.push(element);

            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/pageAndPdfWithProperties.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }

            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Add page and pdf input with Properties', async function () {
            var pdfEndpoint = getEndPoint();
            var input1 = new PageInput();
            var element = new TextElement("test", ElementPlacement.TopCenter);
            input1.Elements.push(element);

            var template = new Template("temp1");
            var element1 = new TextElement("Hello world", ElementPlacement.TopLeft);
            template.Elements.push(element1);
            input1.Template = template;
            pdfEndpoint.Inputs.push(input1);

            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/pageAndPdfWithProperties.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }

            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Test Formfield', function () {

        it('Fill text', async function () {
            var resource = new PdfResource("./Resources/fw9AcroForm_14.pdf", "fw9AcroForm_14.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input);
            var field = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
            pdfEndpoint.FormFields.push(field);
            var field1 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
            pdfEndpoint.FormFields.push(field1);
            var field2 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
            pdfEndpoint.FormFields.push(field2);
            var field3 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
            pdfEndpoint.FormFields.push(field3);
            var field4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
            pdfEndpoint.FormFields.push(field4);
            var field5 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
            pdfEndpoint.FormFields.push(field5);
            var field6 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
            pdfEndpoint.FormFields.push(field6);
            var field7 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
            pdfEndpoint.FormFields.push(field7);
            var field8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
            pdfEndpoint.FormFields.push(field8);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/formField.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Fill text Form Flatten Remove', async function () {
            var resource = new PdfResource("./Resources/fw9AcroForm_14.pdf", "fw9AcroForm_14.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input);
            var field = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
            field.Remove = true;
            pdfEndpoint.FormFields.push(field);
            var field1 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
            pdfEndpoint.FormFields.push(field1);
            var field2 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
            field2.Remove = true;
            pdfEndpoint.FormFields.push(field2);
            var field3 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
            pdfEndpoint.FormFields.push(field3);
            var field4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
            pdfEndpoint.FormFields.push(field4);
            var field5 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
            pdfEndpoint.FormFields.push(field5);
            var field6 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
            pdfEndpoint.FormFields.push(field6);
            var field7 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
            field7.Remove = true;
            pdfEndpoint.FormFields.push(field7);
            var field8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
            pdfEndpoint.FormFields.push(field8);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/formFieldFlattenRemove.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Fill text Form Flatten', async function () {
            var resource = new PdfResource("./Resources/fw9AcroForm_14.pdf", "fw9AcroForm_14.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input);
            var field = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
            field.Flatten = true;
            pdfEndpoint.FormFields.push(field);
            var field1 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
            pdfEndpoint.FormFields.push(field1);
            var field2 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
            field2.Flatten = true;
            pdfEndpoint.FormFields.push(field2);
            var field3 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
            pdfEndpoint.FormFields.push(field3);
            var field4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
            pdfEndpoint.FormFields.push(field4);
            var field5 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
            pdfEndpoint.FormFields.push(field5);
            var field6 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
            pdfEndpoint.FormFields.push(field6);
            var field7 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
            field7.Flatten = true;
            pdfEndpoint.FormFields.push(field7);
            var field8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
            pdfEndpoint.FormFields.push(field8);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/formFieldFlatten.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('FilePathRetainSignature', async function () {
            var resource = new PdfResource("./Resources/Org.pdf", "Org.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input);
            pdfEndpoint.FlattenAllFormFields = true;
            pdfEndpoint.RetainSignatureFormFields = true;
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/FilePathRetainSignature.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Radio Button', async function () {
            var resource = new PdfResource("./Resources/AllPageElements.pdf", "AllPageElements.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input);
            var field = new FormField("rbname", "Radio2");
            pdfEndpoint.FormFields.push(field);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/radioButton.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('List box', async function () {
            var resource = new PdfResource("./Resources/AllPageElements.pdf", "AllPageElements.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input);
            var field = new FormField("lbname", "Item 4");
            pdfEndpoint.FormFields.push(field);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/listBox.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Test Image', function () {

        it('Test Image input Gif', async function () {
            var pdfEndpoint = getEndPoint();
            var resource = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var input = new ImageInput(resource);
            input.ScaleX = 4;
            input.ScaleY = 4;
            input.PageWidth = 400;
            input.PageHeight = 400;
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/imageGif.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Test Image input Jpeg', async function () {
            var pdfEndpoint = getEndPoint();
            var resource = new ImageResource("./Resources/Image1.jpg", "Image1.jpg");
            var input = new ImageInput(resource);
            input.ScaleX = 4;
            input.ScaleY = 4;
            input.PageWidth = 500;
            input.PageHeight = 500;
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/imageJPG.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Test Image input Tiff', async function () {
            var pdfEndpoint = getEndPoint();
            var resource = new ImageResource("./Resources/CCITT_1.tif", "CCITT_1.tif");
            var input = new ImageInput(resource);
            input.ScaleX = 4;
            input.ScaleY = 4;
            input.PageWidth = 400;
            input.PageHeight = 400;
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/imagetif.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Test Image input MultiPageTiff', async function () {
            var pdfEndpoint = getEndPoint();
            var resource = new ImageResource("./Resources/PalaisDuLouvre.tif", "PalaisDuLouvre.tif");
            var input = new ImageInput(resource);
            input.RightMargin = 50;
            input.BottomMargin = 50;
            input.TopMargin = 50;
            input.LeftMargin = 50;
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/imageMultiPageTiff.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Test Image input Png', async function () {
            var pdfEndpoint = getEndPoint();
            var resource = new ImageResource("./Resources/170x220_T.png", "170x220_T.png");
            var input = new ImageInput(resource);
            input.PageWidth = 500;
            input.PageHeight = 500;
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/imagePng.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Test Image Scale', async function () {
            var pdfEndpoint = getEndPoint();
            var resource = new PdfResource("./Resources/DocumentA100.pdf");
            var input = new PdfInput(resource);
            var template = new Template("Temp1");
            var resource1 = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var element = new ImageElement(resource1, ElementPlacement.TopCenter);
            element.ScaleX = 3;
            element.ScaleY = 3;
            template.Elements.push(element);
            input.Template = template;
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/imageScale.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Test Image XYWithTemplate', async function () {
            var pdfEndpoint = getEndPoint();
            var resource = new PdfResource("./Resources/DocumentA100.pdf");
            var input = new PdfInput(resource);
            var template = new Template("Temp1");
            var resource1 = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var element = new ImageElement(resource1, ElementPlacement.TopCenter);
            element.XOffset = 50;
            element.YOffset = 50;
            template.Elements.push(element);
            input.Template = template;
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/imageXYTemple.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Test Font', function () {

        it('Core Fonts', async function () {
            var input = new PageInput();
            var element = new TextElement("Hello World", ElementPlacement.BottomLeft);
            element.Color = RgbColor.PaleGreen;
            element.Font = Font.TimesItalic;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.TopCenter, 0);
            element.Color = RgbColor.PaleVioletRed;
            element.Font = Font.TimesBold;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.TopLeft);
            element.Color = RgbColor.PeachPuff;
            element.Font = Font.TimesBoldItalic;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.TopRight);
            element.Color = RgbColor.Plum;
            element.Font = Font.ZapfDingbats;
            input.Elements.push(element);
            element = new TextElement("xyz", ElementPlacement.BottomRight);
            element.Color = RgbColor.Purple;
            element.FontSize = 100;
            element.Font = Font.Courier;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.BottomCenter, 0, 550);
            element.Color = new RgbColor(1, 0, 1);
            element.Font = Font.CourierBold;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.TopCenter, 0, 100);
            element.Color = new CmykColor(1, 0, 0, 0);
            element.Font = Font.CourierOblique;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.TopCenter, 0, 50);
            element.Color = new CmykColor(0, 1, 1, 0);
            element.FontSize = 100;
            element.Font = Font.HelveticaBold;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.TopLeft, 0, 350);
            element.Color = new Grayscale(0.8);
            element.Font = Font.HelveticaBoldOblique;
            element.FontSize = 50;
            input.Elements.push(element);
            element = new TextElement("Hello World", ElementPlacement.TopLeft, 250, 500);
            element.Color = new RgbColor(1, 0, 0);
            element.Font = Font.HelveticaOblique;
            element.FontSize = 50;
            input.Elements.push(element);
            element = new TextElement("#&%() +0123", ElementPlacement.BottomLeft, 0, 200);
            element.Color = RgbColor.RosyBrown;
            element.Font = Font.Symbol;
            element.FontSize = 50;
            input.Elements.push(element);
            element = new TextElement("Hello", ElementPlacement.TopLeft, 450, 450);
            element.Color = RgbColor.Salmon;
            element.Font = Font.TimesRoman;
            element.FontSize = 50;
            input.Elements.push(element);
            var pdfEndpoint = getEndPoint();
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/Font.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Font otf ', async function () {
            var pdfEndpoint = getEndPoint();
            var input1 = new PageInput();
            var font = Font.FromFile("./Resources/Calibri.otf", "Calibri.otf");
            var element = new TextElement("Hello", ElementPlacement.TopCenter);
            element.Font = font;
            input1.Elements.push(element);
            pdfEndpoint.Instructions.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/fontOtf.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Font otf Embeded ', async function () {
            var pdfEndpoint = getEndPoint();
            var input1 = new PageInput();
            var font = Font.FromFile("./Resources/Calibri.otf", "Calibri.otf");
            font.Embed = true;
            var element = new TextElement("Hello", ElementPlacement.TopCenter);
            element.Font = font;
            input1.Elements.push(element);
            pdfEndpoint.Instructions.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/fontOtfEmbeded.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Font otf Subset ', async function () {
            var pdfEndpoint = getEndPoint();
            var input1 = new PageInput();
            var font = Font.FromFile("./Resources/Calibri.otf", "Calibri.otf");
            font.Subset = true;
            var element = new TextElement("Hello", ElementPlacement.TopCenter);
            element.Font = font;
            input1.Elements.push(element);
            pdfEndpoint.Instructions.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/fontOtfSubset.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Font ttf ', async function () {
            var pdfEndpoint = getEndPoint();
            var input1 = new PageInput();
            var font = Font.FromFile("./Resources/verdanab.ttf", "verdanab.ttf");
            var element = new TextElement("Hello", ElementPlacement.TopCenter);
            element.Font = font;
            input1.Elements.push(element);
            pdfEndpoint.Instructions.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/fontTtf.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Font ttf Embeded ', async function () {
            var pdfEndpoint = getEndPoint();
            var input1 = new PageInput();
            var font = Font.FromFile("./Resources/verdanab.ttf", "verdanab.ttf");
            font.Embed = false;
            var element = new TextElement("Hello", ElementPlacement.TopCenter);
            element.Font = font;
            input1.Elements.push(element);
            pdfEndpoint.Instructions.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/fontTtfEmbeded.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Font ttf Subset ', async function () {
            var pdfEndpoint = getEndPoint();
            var input1 = new PageInput();
            var font = Font.FromFile("./Resources/verdanab.ttf", "verdanab.ttf");
            font.Subset = false;
            var element = new TextElement("Hello", ElementPlacement.TopCenter);
            element.Font = font;
            input1.Elements.push(element);
            pdfEndpoint.Instructions.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/fontttfSubset.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Color Pattern', function () {
        it('CMYKColor', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndPoint();
            var textElement = new TextElement("Hello World", ElementPlacement.TopCenter);
            textElement.Color = new CmykColor(1, 1, 0, 0);
            input.Elements.push(textElement);
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/cmykColorPattern.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('RGB Color', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndPoint();
            var textElement = new TextElement("Hello World", ElementPlacement.TopCenter);
            textElement.Color = new RgbColor(1, 1, 0);
            input.Elements.push(textElement);
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/rgbColor.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('RGB Color Named color sample', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndPoint();
            var textElement = new TextElement("Hello World", ElementPlacement.TopCenter);
            textElement.Color = RgbColor.SeaGreen;
            input.Elements.push(textElement);
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/rgb_NamedColorPattern.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();


            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('GrayScale', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndPoint();
            var textElement = new TextElement("Hello World", ElementPlacement.TopCenter);
            textElement.Color = new Grayscale(0.8);
            input.Elements.push(textElement);
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/grayColorPattern.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }

            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Invalid color', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndPoint();
            var textElement = new TextElement("Hello World", ElementPlacement.TopCenter);
            textElement.Color = "invalid";
            input.Elements.push(textElement);
            pdfEndpoint.Inputs.push(input);
            var res = await pdfEndpoint.Process();
            if (TestParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);
            }
            if (res.IsSuccessfull) {
                var outStream = fs.createWriteStream("./output/invalidColorPatter.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
});
