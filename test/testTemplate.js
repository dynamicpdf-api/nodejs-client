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
    elementPlacement,
    aztecSymbolSize,
    Code11BarcodeElement,
    Code25BarcodeElement,
    Code128BarcodeElement,
    Code39BarcodeElement,
    Code93BarcodeElement,
    Pdf417BarcodeElement,
    MsiBarcodeElement,
    QrCodeElement,
    qrCodeFnc1,
    compaction,
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
    LineStyle,
    stackedGs1DataBarType
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

describe('PdfEndpoint', function () {
    this.timeout(0);
    var testParams = new TestParams();
    describe('LineElement', function () {

        it('Line Element without properties', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var lineElement = new LineElement(elementPlacement.topCenter, 200, 200);
            input1.elements.push(lineElement);
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/LineElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Line Element with properties', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var lineElement = new LineElement(elementPlacement.bottomCenter);
            lineElement.x2Offset = 100;
            lineElement.y2Offset = 100;
            lineElement.color = RgbColor.blue;
            lineElement.lineStyle = LineStyle.dashLarge;
            input1.elements.push(lineElement);
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/LineElementWithProperties.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('RectangleElement', function () {

        it('Simple Rectangle', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(elementPlacement.topCenter, 100, 50);
            rectangleElement.fillColor = RgbColor.hotPink;
            input1.elements.push(rectangleElement);
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);
        });

        it('RectangleElement with Corner', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(elementPlacement.topCenter, 100, 50);
            rectangleElement.cornerRadius = 20;
            input1.elements.push(rectangleElement);
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithCorner.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);
        });

        it('RectangleElement with border style', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(elementPlacement.topRight, 100, 50);
            rectangleElement.borderStyle = LineStyle.dots;
            input1.elements.push(rectangleElement);
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithBorderStyle.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);
        });

        it('RectangleElement with border style Array', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var rectangleElement = new RectangleElement(elementPlacement.topCenter, 100, 50);
            var styleArray = [2, 1, 4, 2];
            rectangleElement.borderStyle = new LineStyle(styleArray);
            input1.elements.push(rectangleElement);
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/RectangleElementwithBorderStyleArray.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('pageNumberingElement', function () {

        it('Page number', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/Invoice.pdf", "Invoice.pdf");
            var input1 = new PdfInput(resource);
            pdfEndpoint.inputs.push(input1);

            var templateA = new Template("TemplateA");
            var pageNumberingElement = new PageNumberingElement("%%CP%% of %%TP%%", elementPlacement.topLeft);
            templateA.elements.push(pageNumberingElement);
            input1.template = templateA;

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/pageNumberingElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);
        });

        it('Page number with properties', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var input1 = new PdfInput(resource);
            pdfEndpoint.inputs.push(input1);

            var templateA = new Template("TemplateA");
            var topLeftElement = new PageNumberingElement("%%CP(1)%% of %%TP%%", elementPlacement.topLeft, 50, 50);
            topLeftElement.fontSize = 14.0;
            templateA.elements.push(topLeftElement);

            var topCenterElement = new PageNumberingElement("%%SP(I)%% of %%ST%%", elementPlacement.topCenter, 50, 50);
            topCenterElement.fontSize = 14.0;
            templateA.elements.push(topCenterElement);

            var topRightElement = new PageNumberingElement("%%CP(i)%% of %%TP%%", elementPlacement.topRight, -50, 50);
            topRightElement.fontSize = 14.0;
            templateA.elements.push(topRightElement);

            var bottomLeftElement = new PageNumberingElement("%%CP(I)%% of %%TP%%", elementPlacement.bottomLeft, 50, -50);
            bottomLeftElement.fontSize = 14.0;
            templateA.elements.push(bottomLeftElement);

            var bottomCenterElement = new PageNumberingElement("%%CP(b)%% of %%TP%%", elementPlacement.bottomCenter, 50, -50);
            bottomCenterElement.font = Font.courier;
            bottomCenterElement.fontSize = 14.0;
            templateA.elements.push(bottomCenterElement);

            var bottomRightElement = new PageNumberingElement("%%CP(a)%% of %%TP%%", elementPlacement.bottomRight, -50, -50);
            bottomRightElement.font = Font.timesItalic;
            bottomRightElement.fontSize = 14.0;
            templateA.elements.push(bottomRightElement);
            input1.template = templateA;

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/pageNumberingElementWithProperties.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('ImageElement', function () {

        it('Should return res.isSuccessful==true', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var input1 = new PdfInput(resource);

            var templateA = new Template("TemplateA");
            var resource2 = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var imageResource = new ImageElement(resource2, elementPlacement.topCenter);
            templateA.elements.push(imageResource);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/ImageElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);


        });
    });


    describe('Barcode', function () {
        it('AztecBarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new AztecBarcodeElement("Hello World", elementPlacement.topCenter, 50);
            barcodeElement.symbolSize = aztecSymbolSize.r95xC95;
            barcodeElement.xDimension = 3;
            barcodeElement.color = new RgbColor(0, 1, 0);
            barcodeElement.errorCorrection = 30;
            barcodeElement.processTilde = true;
            barcodeElement.readerInitializationSymbol = true;
            barcodeElement.value = "test123";
            barcodeElement.xOffset = 200;
            barcodeElement.yOffset = 100;
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/AztecBarcode.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Code11BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code11BarcodeElement("12345678", elementPlacement.topCenter, 50);
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code11Barcode.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Code25BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code25BarcodeElement("12345678", elementPlacement.topCenter, 150);
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code25Barcode.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Code39BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code39BarcodeElement("CODE 39", elementPlacement.topCenter, 150);
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code39Barcode.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Code93BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code93BarcodeElement("CODE 93", elementPlacement.topCenter, 150);
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code93Barcode.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Code128BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new Code128BarcodeElement("CODE 128", elementPlacement.topCenter, 150);
            barcodeElement.uccEan128 = true;
            barcodeElement.processTilde = true;
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Code128Barcode.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Pdf417BarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new Pdf417BarcodeElement("Hello World", elementPlacement.topCenter, 20);
            barcodeElement.color = RgbColor.brown;
            barcodeElement.compaction = compaction.numeric;
            barcodeElement.compactPdf417 = true;
            barcodeElement.evenPages = true;
            barcodeElement.placement = elementPlacement.topRight;
            barcodeElement.processTilde = true;
            barcodeElement.xDimension = 4;
            barcodeElement.yDimension = 5;
            barcodeElement.xOffset = -50;
            barcodeElement.yOffset = 50;
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Pdf417BarcodeElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('MsiBarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new MsiBarcodeElement("1234567890", elementPlacement.topCenter, 150);
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/MsiBarcodeElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('QrCodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var templateA = new Template("TemplateA");
            var barcodeElement = new QrCodeElement("Hello World", elementPlacement.topCenter, 150);
            barcodeElement.color = RgbColor.orange;
            barcodeElement.version = 20;
            barcodeElement.fnc1 = qrCodeFnc1.gs1;
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/QrCodeElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('StackedGs1DataBarBarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var barcodeElement = new StackedGs1DataBarBarcodeElement("1234567890", elementPlacement.topCenter, 150);
            barcodeElement.stackedGs1DataBarType = stackedGs1DataBarType.stackedOmnidirectional;
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/StackedGs1DataBarBarcodeElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('DataMatrixBarcodeElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/DocumentA100.pdf")
            var input1 = new PdfInput(resource1);
            var barcodeElement = new DataMatrixBarcodeElement("Hello World", elementPlacement.topCenter, 0);
            barcodeElement.placement = elementPlacement.topLeft;
            barcodeElement.xOffset = 50;
            barcodeElement.yOffset = 50;
            barcodeElement.xDimension = 3;
            barcodeElement.processTilde = true;
            var templateA = new Template("TemplateA");
            templateA.elements.push(barcodeElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/DataMatrixBarcodeElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('TextElement', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var templateA = new Template("TemplateA");
            var textElement = new TextElement("Hello World", elementPlacement.topCenter);
            textElement.color = RgbColor.cadetBlue;
            templateA.elements.push(textElement);
            input1.template = templateA;
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Dim2BarcodeElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });
    });
});