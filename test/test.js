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
    CmykColor,
    RgbColor,
    Grayscale,
    MergeOptions,
    DlexInput,
    DlexResource,
    LayoutDataResource
} from "./imports.js"

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
    describe('Merge of two PDFs', function () {

        it('Merge Options', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            var template = new Template("temp1");
            var element = new TextElement("Merger with Template(even pages)", elementPlacement.topCenter);
            element.evenPages = false;
            template.elements.push(element);

            //var resource1 = new PdfResource("AllPageElements.pdf", "AllPageElements.pdf");
            var input = new PdfInput("AllPageElements.pdf");
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

    describe('Page Input', function () {

        it('Text Element', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            
            var pageInput = new PageInput();
            var element = new TextElement("Hello World", elementPlacement.topCenter);
            pageInput.elements.push(element);

            pdfEndpoint.inputs.push(pageInput);

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/TextElement.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });
        it('TextElementAddedToPageAndTemplate', async function () {
            var pdfEndpoint = getEndpoint(testParams);
            
            var pageInput = pdfEndpoint.addPage(500,500);

            var template = new Template("Temp1");
            var element = new TextElement("Hello World", elementPlacement.topCenter);
            template.elements.push(element);

            pageInput.template = template;

            pdfEndpoint.inputs.push(pageInput);

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/TextElementAddedToPageAndTemplate.pdf");
                    outStream.write(res.content);
                    outStream.close();
                }
            }

            assert.strictEqual(res.isSuccessful, true);
        });
    });

    describe('Multiple Inputs', function () {

        it('DifferentInputs', async function () {
            
            var pdfEndpoint = getEndpoint(testParams);

            var pdfInput = new PdfInput("Resources/DocumentA100.pdf");
            var mergeOptions = new MergeOptions();
            pdfInput.mergeOptions = mergeOptions;
            pdfEndpoint.inputs.push(pdfInput);

            var pageInput = new PageInput();
            var textElement = new TextElement("Hello World", elementPlacement.topCenter);
            textElement.fontSize = 40;
            pageInput.elements.push(textElement);
            pdfEndpoint.inputs.push(pageInput);

            var resource = new ImageResource("./Resources/Northwind Logo.gif", "Northwind Logo.gif");
            pdfEndpoint.resources.push(resource);

            var dlexInput = new DlexInput("SimpleReportWithCoverPage.dlex", "SimpleReportData.json");
            pdfEndpoint.inputs.push(dlexInput);

            var imageInput = new ImageInput("Resources/Northwind Logo.gif");
            imageInput.TopMargin = 10;
            imageInput.LeftMargin = 10;
            imageInput.RightMargin = 10;
            imageInput.BottomMargin = 10;
            pdfEndpoint.inputs.push(imageInput);

            var res = await pdfEndpoint.process();
            if (testParams.Logging) {
                console.log("Result: " + res.isSuccessful);

                if (res.isSuccessful) {
                    var outStream = fs.createWriteStream("./output/DifferentInputs.pdf");
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

        it('StreamAllFields', async function () {

            var resource = new PdfResource("./Resources/fw9AcroForm_14.pdf");
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
                    var outStream = fs.createWriteStream("./output/StreamAllFields.pdf");
                    outStream.write(res.content);
                    outStream.close();

                }
            }
            assert.strictEqual(res.isSuccessful, true);
        });
    });


    describe('Test Image', function () {

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
    });


    describe('Test Font', function () {

        it('Core Fonts', async function () {
            var input = new PageInput();
            var element = new TextElement("Hello World", elementPlacement.bottomLeft);
            element.font = Font.timesBoldItalic;
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
    });
});