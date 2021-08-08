import fs from 'fs';
import assert from 'assert';
import { PdfResponse } from "../lib/PdfResponse.js";
import { PdfResource } from "../lib/PdfResource.js";
import { PdfInput } from "../lib/PdfInput.js";
import { Pdf } from "../lib/Pdf.js";
import { PageInput } from "../lib/PageInput.js";
import { Template } from '../lib/Template.js';
import { AztecBarcodeElement } from "../lib/elements/AztecBarcodeElement.js";
import { ElementPlacement } from "../lib/elements/ElementPlacement.js";
import { AztecSymbolSize } from "../lib/elements/AztecSymbolSize.js";
import { Code11BarcodeElement } from "../lib/elements/Code11BarcodeElement.js";
import { Code25BarcodeElement } from "../lib/elements/Code25BarcodeElement.js";
import { Code39BarcodeElement } from "../lib/elements/Code39BarcodeElement.js";
import { Code93BarcodeElement } from "../lib/elements/Code93BarcodeElement.js";
import { Code128BarcodeElement } from "../lib/elements/Code128BarcodeElement.js";
import { Pdf417BarcodeElement } from "../lib/elements/Pdf417BarcodeElement.js";
import { MsiBarcodeElement } from "../lib/elements/MsiBarcodeElement.js";
import { QrCodeElement } from "../lib/elements/QrCodeElement.js";
import { Compaction } from "../lib/elements/Compaction.js";
import { QrCodeFnc1 } from "../lib/elements/QrCodeFnc1.js";
import { StackedGs1DataBarBarcodeElement } from "../lib/elements/StackedGs1DataBarBarcodeElement.js";
import { LineElement } from "../lib/elements/LineElement.js";
import { RectangleElement } from "../lib/elements/RectangleElement.js";
import { PageNumberingElement } from "../lib/elements/PageNumberingElement.js";
import { ImageElement } from '../lib/elements/ImageElement.js';
import { ImageResource } from '../lib/ImageResource.js';
import { DataMatrixBarcodeElement } from '../lib/elements/DataMatrixBarcodeElement.js';
import { TextElement } from '../lib/elements/TextElement.js';
import { TestParams } from './init.js';
import { Font } from '../lib/Font.js';
import { RgbColor } from '../lib/RgbColor.js';
import { LineStyle } from '../lib/LineStyle.js';
import { Color } from '../lib/Color.js';
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

describe('PdfEndpoint', function () {
    this.timeout(0);
    var testParams = new TestParams();
    describe('LineElement', function () {

        it('Line Element wihout properties', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var lineElement = new LineElement(ElementPlacement.TopCenter, 200, 200);
            input1.Elements.push(lineElement);
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/LineElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Line Element wih properties', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var lineElement = new LineElement(ElementPlacement.TopCenter, 200, 200);
            lineElement.X1Offset = 100;
            lineElement.Y1Offset = 100;
            lineElement.Color = RgbColor.SeaShell;
            lineElement.LineStyle = LineStyle.DashLarge;
            input1.Elements.push(lineElement);
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/LineElementWithPropeties.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('RectangleElement', function () {

        it('Simple Rectangle', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(ElementPlacement.TopCenter, 100, 50);
            rectangleElement.FillColor = RgbColor.HotPink;
            input1.Elements.push(rectangleElement);
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/RectangleElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('RectangleElement with Corner', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(ElementPlacement.TopCenter, 100, 50);
            rectangleElement.CornerRadius = 20;
            input1.Elements.push(rectangleElement);
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithCorner.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('RectangleElement with border style', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(ElementPlacement.TopCenter, 100, 50);
            rectangleElement.BorderStyle = LineStyle.Dots;
            input1.Elements.push(rectangleElement);
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithBorderStyle.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('RectangleElement with border style Array', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(ElementPlacement.TopCenter, 100, 50);
            var styleArray = [2, 1, 4, 2];
            rectangleElement.BorderStyle = new LineStyle(styleArray);
            input1.Elements.push(rectangleElement);
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithBorderStyleArray.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('pageNumberingElement', function () {

        it('Page number', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/Invoice.pdf", "Invoice.pdf");
            var input1 = new PdfInput(resource);
            pdfEndpoint.Inputs.push(input1);

            var templateA = new Template("TemplateA");
            var pageNumberingElement = new PageNumberingElement("%%CP%% of %%TP%%", ElementPlacement.TopLeft);
            templateA.Elements.push(pageNumberingElement);
            input1.Template = templateA;

            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/pageNumberingElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
        it('Page number', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/Invoice.pdf", "Invoice.pdf");
            var input1 = new PdfInput(resource);
            pdfEndpoint.Inputs.push(input1);

            var templateA = new Template("TemplateA");
            var topLeftElement = new PageNumberingElement("%%CP(1)%% of %%TP%%", ElementPlacement.TopLeft, 50, 50);
            topLeftElement.FontSize = 14.0;
            templateA.Elements.push(topLeftElement);

            var topCenterElement = new PageNumberingElement("%%SP(I)%% of %%ST%%", ElementPlacement.TopCenter, 50, 50);
            topCenterElement.FontSize = 14.0;
            templateA.Elements.push(topCenterElement);

            var topRightElement = new PageNumberingElement("%%CP(i)%% of %%TP%%", ElementPlacement.TopRight, -50, 50);
            topRightElement.FontSize = 14.0;
            templateA.Elements.push(topRightElement);

            var bottomLeftElement = new PageNumberingElement("%%CP(I)%% of %%TP%%", ElementPlacement.BottomLeft, 50, -50);
            bottomLeftElement.FontSize = 14.0;
            templateA.Elements.push(bottomLeftElement);

            var bottomCenterElement = new PageNumberingElement("%%CP(b)%% of %%TP%%", ElementPlacement.BottomCenter, 50, -50);
            bottomCenterElement.Font = Font.Courier;
            bottomCenterElement.FontSize = 14.0;
            templateA.Elements.push(bottomCenterElement);

            var bottomRightElement = new PageNumberingElement("%%CP(a)%% of %%TP%%", ElementPlacement.BottomRight, -50, -50);
            bottomRightElement.Font = Font.Gs1;
            bottomRightElement.FontSize = 14.0;
            templateA.Elements.push(bottomRightElement);

            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/pageNumberingElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('ImageElement', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var input1 = new PdfInput(resource);

            var templateA = new Template("TemplateA");
            var resource2 = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var imageResource = new ImageElement(resource2, ElementPlacement.TopCenter);
            templateA.Elements.push(imageResource);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/ImageElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);


        });
    });
    describe('AztecBarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new AztecBarcodeElement("Hello World", ElementPlacement.TopCenter, 50);
            barcodeElement.AztecSymbolSize = AztecSymbolSize.R125xC125;
            barcodeElement.XDimension = 3;
            barcodeElement.Color = new RgbColor(0, 1, 0);
            barcodeElement.ErrorCorrection = 30;
            barcodeElement.ProcessTilde = true;
            barcodeElement.ReaderInitializationSymbol = true;
            barcodeElement.Value = "test123";
            barcodeElement.XOffset = 100;
            barcodeElement.YOffset = 100;
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/AztecBarcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Code11BarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code11BarcodeElement("12345678", ElementPlacement.TopCenter, 50);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/Code11Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Code25BarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code25BarcodeElement("12345678", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/Code25Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Code39BarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code39BarcodeElement("CODE 39", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/Code39Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Code93BarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code93BarcodeElement("CODE 93", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/Code93Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Code128BarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code128BarcodeElement("CODE 128", ElementPlacement.TopCenter, 150);
            barcodeElement.UccEan128 = true;
            barcodeElement.ProcessTilde = true;
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/Code128Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('Pdf417BarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new Pdf417BarcodeElement("Hello World", ElementPlacement.TopCenter, 20);
            barcodeElement.Color = "Red";
            barcodeElement.Compaction = Compaction.Numeric;
            barcodeElement.CompactPdf417 = true;
            barcodeElement.EvenPages = true;
            barcodeElement.Placement = ElementPlacement.TopRight;
            barcodeElement.ProcessTilde = true;
            barcodeElement.XDimension = 4;
            barcodeElement.YDimension = 5;
            barcodeElement.XOffset = -50;
            barcodeElement.YOffset = 50;
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/Pdf417BarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('MsiBarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new MsiBarcodeElement("1234567890", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/MsiBarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('QrCodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new QrCodeElement("Hello World", ElementPlacement.TopCenter, 150);
            barcodeElement.Color = "Orange";
            barcodeElement.Version = 20;
            barcodeElement.Fnc1 = QrCodeFnc1.Gs1;
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/QrCodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('StackedGs1DataBarBarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new StackedGs1DataBarBarcodeElement("1234567890", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/StackedGs1DataBarBarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('DataMatrixBarcodeElement barcode', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var barcodeElement = new DataMatrixBarcodeElement("Hello World", ElementPlacement.TopCenter, 0);
            barcodeElement.Placement = ElementPlacement.TopLeft;
            barcodeElement.XOffset = 50;
            barcodeElement.YOffset = 50;
            barcodeElement.XDimension = 3;
            barcodeElement.ProcessTilde = true;
            var templateA = new Template("TemplateA");
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/DataMatrixBarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
    describe('TextElement', function () {

        it('Should return res.IsSuccessfull==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var textElement = new TextElement("Hello World", ElementPlacement.TopCenter);
            textElement.Color = "RED";
            templateA.Elements.push(textElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessfull);

                if (res.IsSuccessfull) {
                    var outStream = fs.createWriteStream("./output/Dim2BarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessfull, true);
        });
    });
});
