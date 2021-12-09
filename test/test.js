import fs from 'fs';
import assert from 'assert';
import { TestParams } from './init.js';
import {
    PdfResource,
    PdfInput,
    Pdf,
    FormField,
    ImageResource,
    ImageInput,
    PageInput,
    TextElement,
    elementPlacement,
    Font,
    Template,
    ImageElement,
    CmykColor,
    RgbColor,
    Grayscale,
    MergeOptions
} from "./imports.js"

function getEndpoint(testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    var pdfEndpoint = new Pdf();
    pdfEndpoint.loggingEnabled = testParams.Logging;
    pdfEndpoint.baseUrl = testParams.BaseUrl;
    pdfEndpoint.apiKey = testParams.ApiKey;
    pdfEndpoint.author = "sheetal";
    pdfEndpoint.title = "pdf merger";
    return pdfEndpoint;
}
describe('PdfEndpoint', function () {
    this.timeout(0);
    var testParams = new TestParams();
    describe('Merge of two PDFs', function () {

        it('Merge', async function () {
            var resource1 = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var resource2 = new PdfResource("./Resources/DocumentA100.pdf", "DocumentA100.pdf");
            var input1 = new PdfInput(resource1);

            var input2 = new PdfInput(resource2);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input1);
            pdfEndpoint.inputs.push(input2);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Merge.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }

            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Merge using byteArray as input', async function () {
            var fileData = fs.readFileSync("./Resources/SinglePage.pdf");
            var resource1 = new PdfResource(fileData, "SinglePage.pdf");
            var resource2 = new PdfResource("./Resources/DocumentA100.pdf", "DocumentA100.pdf");
            var input1 = new PdfInput(resource1);

            var input2 = new PdfInput(resource2);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input1);
            pdfEndpoint.inputs.push(input2);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/MergeusingbyteArrayasinput.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Merge Options', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var template = new Template("temp1");
            var element = new TextElement("Merger with Template(even pages)", elementPlacement.topCenter);
            element.evenPages = false;
            template.elements.push(element);

            var resource1 = new PdfResource("./Resources/AllPageElements.pdf", "AllPageElements.pdf");
            var input = new PdfInput(resource1);
            input.template = template;

            var mergeOptions = new MergeOptions();
            mergeOptions.documentInfo = true;
            input.mergeOptions = mergeOptions;
            pdfEndpoint.inputs.push(input);

            var resource2 = new PdfResource("./Resources/DocumentA100.pdf", "DocumentA100.pdf");
            var input1 = new PdfInput(resource2);
            input1.template = template;

            input1.startPage = 1;
            input1.pageCount = 1;

            var mergeOptions1 = new MergeOptions();
            mergeOptions1.formsXfaData = true;
            input1.mergeOptions = mergeOptions1;
            pdfEndpoint.inputs.push(input1);

            var resource3 = new PdfResource("./Resources/fw9AcroForm_14.pdf");
            var input2 = new PdfInput(resource3);
            input2.template = template;

            pdfEndpoint.inputs.push(input2);

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/MergeWithOptions.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });
    });



    describe('Add page and pdf input', function () {

        it('Add page and pdf input', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var input1 = new PdfInput(resource1);
            pdfEndpoint.inputs.push(input1);

            var input2 = pdfEndpoint.addPage();
            var element = new TextElement("test", elementPlacement.topCenter);
            input2.elements.push(element);

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/pageAndPdf.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Add page and pdf input with Properties', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource1 = new PdfResource("./Resources/SinglePage.pdf", "SinglePage.pdf");
            var input1 = new PdfInput(resource1);
            pdfEndpoint.inputs.push(input1);

            var input2 = pdfEndpoint.addPage(500, 600);
            var element = new TextElement("test", elementPlacement.topCenter);
            input2.elements.push(element);

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/pageAndPdfWithProperties.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Add page and templates', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var element = new TextElement("test", elementPlacement.topCenter);
            input1.elements.push(element);

            var template = new Template("temp1");
            var element1 = new TextElement("Hello world", elementPlacement.topLeft);
            template.elements.push(element1);
            input1.template = template;
            pdfEndpoint.inputs.push(input1);

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/pageAddpageandtemplates.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('Test Form field', function () {

        it('Fill text', async function () {
            var resource = new PdfResource("./Resources/fw9AcroForm_14.pdf", "fw9AcroForm_14.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input);
            var field = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
            pdfEndpoint.formFields.push(field);
            var field1 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
            pdfEndpoint.formFields.push(field1);
            var field2 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
            pdfEndpoint.formFields.push(field2);
            var field3 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
            pdfEndpoint.formFields.push(field3);
            var field4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
            pdfEndpoint.formFields.push(field4);
            var field5 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
            pdfEndpoint.formFields.push(field5);
            var field6 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
            pdfEndpoint.formFields.push(field6);
            var field7 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
            pdfEndpoint.formFields.push(field7);
            var field8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
            pdfEndpoint.formFields.push(field8);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/formField.pdf");
                    outStream.write(res.content);
                    outStream.close();


                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Fill text Form Flatten Remove', async function () {
            var resource = new PdfResource("./Resources/fw9AcroForm_14.pdf", "fw9AcroForm_14.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input);
            var field = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
            field.remove = true;
            pdfEndpoint.formFields.push(field);
            var field1 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
            pdfEndpoint.formFields.push(field1);
            var field2 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
            field2.remove = true;
            pdfEndpoint.formFields.push(field2);
            var field3 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
            pdfEndpoint.formFields.push(field3);
            var field4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
            pdfEndpoint.formFields.push(field4);
            var field5 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
            pdfEndpoint.formFields.push(field5);
            var field6 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
            pdfEndpoint.formFields.push(field6);
            var field7 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
            field7.remove = true;
            pdfEndpoint.formFields.push(field7);
            var field8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
            pdfEndpoint.formFields.push(field8);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/formFieldFlattenRemove.pdf");
                    outStream.write(res.content);
                    outStream.close();


                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Fill text Form Flatten', async function () {
            var resource = new PdfResource("./Resources/fw9AcroForm_14.pdf", "fw9AcroForm_14.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input);
            var field = new FormField("topmostSubform[0].Page1[0].f1_1[0]", "Any Company, Inc.");
            field.flatten = true;
            pdfEndpoint.formFields.push(field);
            var field1 = new FormField("topmostSubform[0].Page1[0].f1_2[0]", "Any Company");
            pdfEndpoint.formFields.push(field1);
            var field2 = new FormField("topmostSubform[0].Page1[0].FederalClassification[0].c1_1[0]", "1");
            field2.flatten = true;
            pdfEndpoint.formFields.push(field2);
            var field3 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_7[0]", "123 Main Street");
            pdfEndpoint.formFields.push(field3);
            var field4 = new FormField("topmostSubform[0].Page1[0].Address[0].f1_8[0]", "Washington, DC  22222");
            pdfEndpoint.formFields.push(field4);
            var field5 = new FormField("topmostSubform[0].Page1[0].f1_9[0]", "Any Requester");
            pdfEndpoint.formFields.push(field5);
            var field6 = new FormField("topmostSubform[0].Page1[0].f1_10[0]", "17288825617");
            pdfEndpoint.formFields.push(field6);
            var field7 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_14[0]", "52");
            field7.flatten = true;
            pdfEndpoint.formFields.push(field7);
            var field8 = new FormField("topmostSubform[0].Page1[0].EmployerID[0].f1_15[0]", "1234567");
            pdfEndpoint.formFields.push(field8);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/formFieldFlatten.pdf");
                    outStream.write(res.content);
                    outStream.close();


                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('FilePathRetainSignature', async function () {
            var resource = new PdfResource("./Resources/Org.pdf", "Org.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input);
            pdfEndpoint.flattenAllFormFields = true;
            pdfEndpoint.retainSignatureFormFields = true;
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/FilePathRetainSignature.pdf");
                    outStream.write(res.content);
                    outStream.close();


                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Radio Button', async function () {
            var resource = new PdfResource("./Resources/AllPageElements.pdf", "AllPageElements.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input);
            var field = new FormField("rbname", "Radio2");
            pdfEndpoint.formFields.push(field);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/radioButton.pdf");
                    outStream.write(res.content);
                    outStream.close();


                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('List box', async function () {
            var resource = new PdfResource("./Resources/AllPageElements.pdf", "AllPageElements.pdf");
            var input = new PdfInput(resource);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input);
            var field = new FormField("lbname", "Item 4");
            pdfEndpoint.formFields.push(field);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/listBox.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('Test Image', function () {

        it('Test Image input Gif', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var input = new ImageInput(resource);
            input.scaleX = 4;
            input.scaleY = 4;
            input.pageWidth = 400;
            input.pageHeight = 400;
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/imageGif.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Test Image input Jpeg', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new ImageResource("./Resources/Image1.jpg", "Image1.jpg");
            var input = new ImageInput(resource);
            input.scaleX = 4;
            input.scaleY = 4;
            input.pageWidth = 500;
            input.pageHeight = 500;
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/imageJPG.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Test Image input Tiff', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new ImageResource("./Resources/CCITT_1.tif", "CCITT_1.tif");
            var input = new ImageInput(resource);
            input.scaleX = 4;
            input.scaleY = 4;
            input.pageWidth = 400;
            input.pageHeight = 400;
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/imagetif.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Test Image input MultiPageTiff', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new ImageResource("./Resources/PalaisDuLouvre.tif", "PalaisDuLouvre.tif");
            var input = new ImageInput(resource);
            input.rightMargin = 50;
            input.bottomMargin = 50;
            input.topMargin = 50;
            input.leftMargin = 50;
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/imageMultiPageTiff.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Test Image input Png', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new ImageResource("./Resources/170x220_T.png", "170x220_T.png");
            var input = new ImageInput(resource);
            input.pageWidth = 500;
            input.pageHeight = 500;
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/imagePng.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Test Image Scale', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/DocumentA100.pdf", "DocumentA100.pdf");
            var input = new PdfInput(resource);
            var template = new Template("Temp1");
            var resource1 = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var element = new ImageElement(resource1, elementPlacement.topCenter);
            element.scaleX = 3;
            element.scaleY = 3;
            template.elements.push(element);
            input.template = template;
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/imageScale.pdf");
                    outStream.write(res.content);
                    outStream.close();


                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Test Image XYWithTemplate', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var resource = new PdfResource("./Resources/DocumentA100.pdf");
            var input = new PdfInput(resource);
            var template = new Template("Temp1");
            var resource1 = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            var element = new ImageElement(resource1, elementPlacement.topCenter);
            element.xOffset = 250;
            element.yOffset = 250;
            template.elements.push(element);
            input.template = template;
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/imageXYTemple.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('Test Font', function () {

        it('Core Fonts', async function () {
            var input = new PageInput();
            var element = new TextElement("PaleGreen", elementPlacement.bottomLeft);
            element.color = RgbColor.paleGreen;
            element.font = Font.timesItalic;
            input.elements.push(element);
            element = new TextElement("PaleVioletRed", elementPlacement.topCenter, 0);
            element.color = RgbColor.paleVioletRed;
            element.font = Font.timesBold;
            input.elements.push(element);
            element = new TextElement("PeachPuff", elementPlacement.topLeft);
            element.color = RgbColor.peachPuff;
            element.font = Font.timesBoldItalic;
            input.elements.push(element);
            element = new TextElement("Plum", elementPlacement.topRight);
            element.color = RgbColor.plum;
            element.font = Font.zapfDingbats;
            input.elements.push(element);
            element = new TextElement("Purple", elementPlacement.bottomRight);
            element.color = RgbColor.purple;
            element.fontSize = 100;
            element.font = Font.courier;
            input.elements.push(element);
            element = new TextElement("CourierBold", elementPlacement.bottomCenter, 0, -50);
            element.color = new RgbColor(1, 0, 1);
            element.font = Font.courierBold;
            input.elements.push(element);
            element = new TextElement("CourierOblique", elementPlacement.topCenter, 0, 100);
            element.color = new CmykColor(1, 0, 0, 0);
            element.font = Font.courierOblique;
            input.elements.push(element);
            element = new TextElement("HelveticaBold", elementPlacement.topCenter, 0, 50);
            element.color = new CmykColor(0, 1, 1, 0);
            element.fontSize = 100;
            element.font = Font.helveticaBold;
            input.elements.push(element);
            element = new TextElement("HelveticaBoldOblique", elementPlacement.topLeft, 0, 350);
            element.color = new Grayscale(0.8);
            element.font = Font.helveticaBoldOblique;
            element.fontSize = 50;
            input.elements.push(element);
            element = new TextElement("HelveticaOblique", elementPlacement.topLeft, 250, 500);
            element.color = new RgbColor(1, 0, 0);
            element.font = Font.helveticaOblique;
            element.fontSize = 50;
            input.elements.push(element);
            element = new TextElement("#&%() +0123", elementPlacement.bottomLeft, 0, -200);
            element.color = RgbColor.rosyBrown;
            element.font = Font.symbol;
            element.fontSize = 50;
            input.elements.push(element);
            element = new TextElement("Salmon", elementPlacement.topLeft, 450, 450);
            element.color = RgbColor.salmon;
            element.font = Font.timesRoman;
            element.fontSize = 50;
            input.elements.push(element);
            var pdfEndpoint = getEndpoint(testParams);
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/Font.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });
        it('Font otf ', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var font = Font.fromFile("./Resources/Calibri.otf", "Calibri.otf");
            var element = new TextElement("Hello", elementPlacement.topCenter);
            element.font = font;
            input1.elements.push(element);
            pdfEndpoint.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/fontOtf.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Font otf Embeded ', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var font = Font.fromFile("./Resources/Calibri.otf", "Calibri.otf");
            font.Embed = true;
            var element = new TextElement("Hello", elementPlacement.topCenter);
            element.font = font;
            input1.elements.push(element);
            pdfEndpoint.instructions.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/fontOtfEmbeded.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Font otf Subset ', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var font = Font.fromFile("./Resources/Calibri.otf", "Calibri.otf");
            font.subset = true;
            var element = new TextElement("Hello", elementPlacement.topCenter);
            element.font = font;
            input1.elements.push(element);
            pdfEndpoint.instructions.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/fontOtfSubset.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Font ttf ', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var font = Font.fromFile("./Resources/verdanab.ttf", "verdanab.ttf");
            var element = new TextElement("Hello", elementPlacement.topCenter);
            element.font = font;
            input1.elements.push(element);
            pdfEndpoint.instructions.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/fontTtf.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Font ttf Embeded ', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var font = Font.fromFile("./Resources/verdanab.ttf", "verdanab.ttf");
            font.embed = false;
            var element = new TextElement("Hello", elementPlacement.topCenter);
            element.font = font;
            input1.elements.push(element);
            pdfEndpoint.instructions.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/fontTtfEmbeded.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('Font ttf Subset ', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var input1 = new PageInput();
            var font = Font.fromFile("./Resources/verdanab.ttf", "verdanab.ttf");
            font.subset = false;
            var element = new TextElement("Hello", elementPlacement.topCenter);
            element.font = font;
            input1.elements.push(element);
            pdfEndpoint.instructions.inputs.push(input1);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/fontttfSubset.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('Color Pattern', function () {
        it('CMYKColor', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndpoint(testParams);
            var textElement = new TextElement("Hello World", elementPlacement.topCenter);
            textElement.color = new CmykColor(1, 0, 0, 0);
            input.elements.push(textElement);
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/cmykColorPattern.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('RGB Color', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndpoint(testParams);
            var textElement = new TextElement("Hello World", elementPlacement.topCenter);
            textElement.color = new RgbColor(1, 1, 0);
            input.elements.push(textElement);
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/rgbColor.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('RGB Color Named color sample', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndpoint(testParams);
            var textElement = new TextElement("Hello World", elementPlacement.topCenter);
            textElement.color = RgbColor.seaGreen;
            input.elements.push(textElement);
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/rgb_NamedColorPattern.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });

        it('GrayScale', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndpoint(testParams);
            var textElement = new TextElement("Hello World", elementPlacement.topCenter);
            textElement.color = new Grayscale(0.8);
            input.elements.push(textElement);
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/grayColorPattern.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });

        it('Invalid color', async function () {
            var input = new PageInput();
            var pdfEndpoint = getEndpoint(testParams);
            var textElement = new TextElement("Hello World", elementPlacement.topCenter);
            textElement.color = "invalid";
            input.elements.push(textElement);
            pdfEndpoint.inputs.push(input);
            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/invalidColorPatter.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }


            assert.strictEqual(res.isSuccessful, true);
        });
    });
    describe('Get Instructions Json Samples', function () {

        it('File Path GetInstructions BeforeProcess', async function () {
            var pdf = getEndpoint(testParams);
            var template1 = new Template("./Resources/Temp1");
            var element1 = new TextElement("Merger with Template(First Document)", elementPlacement.topCenter);
            template1.elements.push(element1);

            var resource = new PdfResource("./Resources/AllPageElements.pdf");
            var input = new PdfInput(resource);
            input.template = template1;

            var mergeOptions = new MergeOptions();
            input.mergeOptions = mergeOptions;
            pdf.inputs.push(input);

            var template2 = new Template("Temp2");
            var element2 = new TextElement("Merger with Template(Second Document)", elementPlacement.topCenter);
            template2.elements.push(element2);

            var resource1 = new PdfResource("./Resources/All Fields Sample.pdf");
            var input1 = new PdfInput(resource1);
            input1.template = template2;

            input1.startPage = 1;
            input1.pageCount = 1;
            var mergeOptions1 = new MergeOptions();
            mergeOptions1.formsXfaData = true;
            input1.mergeOptions = mergeOptions1;
            pdf.inputs.push(input1);

            var template3 = new Template("Temp3");
            var element3 = new TextElement("Merger with Template(Third Document)", elementPlacement.topCenter);
            template3.elements.push(element3);

            var resource2 = new PdfResource("./Resources/fw9AcroForm_14.pdf");
            var input2 = new PdfInput(resource2);
            input2.template = template3;

            pdf.inputs.push(input2);
            var str = pdf.getInstructionsJson();

            var res = await pdf.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/GetInstructionsBeforeProcess.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });
        it('File Path GetInstructions AfterProcess', async function () {
            var pdf = getEndpoint(testParams);
            var template1 = new Template("Temp1");
            var element1 = new TextElement("Merger with Template(First Document)", elementPlacement.topCenter);
            template1.elements.push(element1);

            var resource = new PdfResource("./Resources/AllPageElements.pdf");
            var input = new PdfInput(resource);
            input.template = template1;

            var mergeOptions = new MergeOptions();
            input.mergeOptions = mergeOptions;
            pdf.inputs.push(input);

            var template2 = new Template("Temp2");
            var element2 = new TextElement("Merger with Template(Second Document)", elementPlacement.topCenter);
            template2.elements.push(element2);

            var resource1 = new PdfResource("./Resources/All Fields Sample.pdf");
            var input1 = new PdfInput(resource1);
            input1.template = template2;

            input1.startPage = 1;
            input1.pageCount = 1;
            var mergeOptions1 = new MergeOptions();
            mergeOptions1.formsXfaData = true;
            input1.mergeOptions = mergeOptions1;
            pdf.inputs.push(input1);

            var template3 = new Template("Temp3");
            var element3 = new TextElement("Merger with Template(Third Document)", elementPlacement.topCenter);
            template3.elements.push(element3);

            var resource2 = new PdfResource("./Resources/fw9AcroForm_14.pdf");
            var input2 = new PdfInput(resource2);
            input2.template = template3;

            pdf.inputs.push(input2);

            var res = await pdf.process();
            var str = pdf.getInstructionsJson();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/GetInstructionsAfterProcess.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });
    });
});