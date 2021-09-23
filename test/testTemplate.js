import fs from 'fs';
import assert from 'assert';
import { TestParams } from './init.js';
import {
    PdfResource,
    PdfInput,
    Pdf,
    PageInput,
    Template,
    AztecBarcodeElement,
    ElementPlacement,
    AztecSymbolSize,
    Code11BarcodeElement,
    Code25BarcodeElement,
    Code128BarcodeElement,
    Code39BarcodeElement,
    Code93BarcodeElement,
    Pdf417BarcodeElement,
    MsiBarcodeElement,
    QrCodeElement,
    QrCodeFnc1,
    Compaction,
    StackedGs1DataBarBarcodeElement,
    LineElement,
    RectangleElement,
    PageNumberingElement,
    ImageElement,
    ImageResource,
    DataMatrixBarcodeElement,
    TextElement,
    Font,
    RgbColor,
    LineStyle
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

describe('PdfEndpoint', function () {
    this.timeout(0);
    var testParams = new TestParams();
    describe('LineElement', function () {

        it('Line Element without properties', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var lineElement = new LineElement(ElementPlacement.TopCenter, 200, 200);
            input1.Elements.push(lineElement);
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/LineElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/LineElementWithProperties.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessful, true);
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithCorner.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessful, true);
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithBorderStyle.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessful, true);
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithBorderStyleArray.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessful, true);
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/pageNumberingElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessful, true);
        });

        it('Page number with properties', async function () {
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
            bottomRightElement.Font = Font.TimesItalic;
            bottomRightElement.FontSize = 14.0;
            templateA.Elements.push(bottomRightElement);

            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/pageNumberingElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessful, true);
        });
    });


    describe('ImageElement', function () {

        it('Should return res.IsSuccessful==true', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/ImageElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }


            assert.strictEqual(res.IsSuccessful, true);


        });
    });


    describe('Barcode', function () {
        it('AztecBarcodeElement', async function () {
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
            barcodeElement.XOffset = 200;
            barcodeElement.YOffset = 100;
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/AztecBarcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }

            assert.strictEqual(res.IsSuccessful, true);
        });

        it('Code11BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code11BarcodeElement("12345678", ElementPlacement.TopCenter, 50);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code11Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }

            assert.strictEqual(res.IsSuccessful, true);
        });

        it('Code25BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code25BarcodeElement("12345678", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code25Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }

            assert.strictEqual(res.IsSuccessful, true);
        });

        it('Code39BarcodeElement', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code39Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }

            assert.strictEqual(res.IsSuccessful, true);
        });

        it('Code93BarcodeElement', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code93Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }

            assert.strictEqual(res.IsSuccessful, true);
        });

        it('Code128BarcodeElement', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code128Barcode.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
        });

        it('Pdf417BarcodeElement', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/Pdf417BarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
        });

        it('MsiBarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new MsiBarcodeElement("1234567890", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/MsiBarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
        });

        it('QrCodeElement', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/QrCodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
        });

        it('StackedGs1DataBarBarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new StackedGs1DataBarBarcodeElement("1234567890", ElementPlacement.TopCenter, 150);
            templateA.Elements.push(barcodeElement);
            input1.Template = templateA;
            pdfEndpoint.Inputs.push(input1);
            var res = await pdfEndpoint.Process();
            if (testParams.Logging) {
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/StackedGs1DataBarBarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
        });

        it('DataMatrixBarcodeElement', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/DataMatrixBarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }
            assert.strictEqual(res.IsSuccessful, true);
        });

        it('TextElement', async function () {
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
                console.log("Result: " + res.IsSuccessful);

                if (res.IsSuccessful) {
                    var outStream = fs.createWriteStream("./output/Dim2BarcodeElement.pdf");
                    outStream.write(res.SetPdfContent);
                    outStream.close();
                }
            }

            assert.strictEqual(res.IsSuccessful, true);
        });
    });
});