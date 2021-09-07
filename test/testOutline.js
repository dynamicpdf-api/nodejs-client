// import assert from 'assert';
// import fs from 'fs';
// import { TestParams } from './init.js';
// import { PdfResource, PdfInput, Pdf, Outline, GoToAction, UrlAction, ImageResource, MergeOptions, PageZoom, RgbColor, OutlineStyle, ImageInput, TextElement, ElementPlacement } from "../lib/index.js";

// function getEndpoint(testParams) {
//     if (testParams.AuthTLS == false) {
//         process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
//     }
//     var pdfEndpoint = new Pdf();
//     pdfEndpoint.loggingEnabled = testParams.Logging;
//     pdfEndpoint.BaseUrl = testParams.BaseUrl;
//     pdfEndpoint.ApiKey = testParams.ApiKey;
//     pdfEndpoint.Author = "sheetal";
//     pdfEndpoint.Title = "pdf merger";
//     return pdfEndpoint;
// }

// describe('Outline', function () {
//     this.timeout(0);
//     var testParams = new TestParams();
//     it('simple outline PDFs', async function () {
//         var pdfEndpoint = getEndpoint(testParams);
//         var resource = new PdfResource("./Resources/Emptypages.pdf");
//         var input = new PdfInput(resource);
//         input.Id = "2";
//         pdfEndpoint.Inputs.push(input);
//         var outline = new Outline("outlineA");
//         outline.Color = "Red";
//         outline.Style = OutlineStyle.bold;
//         outline.Expanded = true;
//         pdfEndpoint.Outlines.push(outline);
//         var res = await pdfEndpoint.Process();
//         if (testParams.Logging) {
//             console.log("Result: " + res.IsSuccessful);

//             if (res.IsSuccessful) {
//                 var outStream = fs.createWriteStream("./output/oultine.pdf");
//                 outStream.write(res.SetPdfContent);
//                 outStream.close();
//             }
//         }
//         assert.strictEqual(res.IsSuccessful, true);
//     });

//     it.only('simple outline PDFs using addpage()', async function () {
//         var pdfEndpoint = getEndpoint(testParams);
//         var pageInput = pdfEndpoint.AddPage();
//         var element = new TextElement("hello world1", ElementPlacement.TopCenter);
//         pageInput.Elements.push(element);

//         var pageInput1 = pdfEndpoint.AddPage();
//         var element1 = new TextElement("hello world2", ElementPlacement.TopCenter);
//         pageInput1.Elements.push(element1);

//         var pageInput2 = pdfEndpoint.AddPage();
//         var element2 = new TextElement("hello world3", ElementPlacement.TopCenter);
//         pageInput2.Elements.push(element2);

//         var rootOutline= pdfEndpoint.Outlines.push("Root Outline");

//         rootOutline.Children.push("Page 1", pageInput);
//         rootOutline.Children.push("Page 2", pageInput1);
//         rootOutline.Children.push("Page 3", pageInput2);


//         var res = await pdfEndpoint.Process();
//         if (testParams.Logging) {
//             console.log("Result: " + res.IsSuccessful);

//             if (res.IsSuccessful) {
//                 var outStream = fs.createWriteStream("./output/oultine.pdf");
//                 outStream.write(res.SetPdfContent);
//                 outStream.close();
//             }
//         }
//         assert.strictEqual(res.IsSuccessful, true);
//     });

//     it('simple outline PDFs using addpage()', async function () {
//         var pdfEndpoint = getEndpoint(testParams);
//         var pageInput = pdfEndpoint.AddPage();
//         var element = new TextElement("hello world1", ElementPlacement.TopCenter);
//         pageInput.Elements.push(element);

//         var pageInput1 = pdfEndpoint.AddPage();
//         var element1 = new TextElement("hello world2", ElementPlacement.TopCenter);
//         pageInput1.Elements.push(element1);

//         var pageInput2 = pdfEndpoint.AddPage();
//         var element2 = new TextElement("hello world3", ElementPlacement.TopCenter);
//         pageInput2.Elements.push(element2);

//         var rootOutline = pdfEndpoint.Outlines.push("Root Outline");

//         rootOutline.Children.push("Page 1", pageInput);
//         rootOutline.Children.push("Page 2", pageInput1);
//         rootOutline.Children.push("Page 3", pageInput2);


//         var res = await pdfEndpoint.Process();
//         if (testParams.Logging) {
//             console.log("Result: " + res.IsSuccessful);

//             if (res.IsSuccessful) {
//                 var outStream = fs.createWriteStream("./output/oultine1.pdf");
//                 outStream.write(res.SetPdfContent);
//                 outStream.close();
//             }
//         }
//         assert.strictEqual(res.IsSuccessful, true);
//     });

//     it('Oulines for Existing Pdf', async function () {
//         var pdfEndpoint = getEndpoint(testParams);
//         var resource1 = new PdfResource("./Resources/DocumentA100.pdf");
//         var input1 = pdfEndpoint.AddPdf(resource1);
//         input1.Id = "document2";

//         var resource2 = new PdfResource("./Resources/Invoice.pdf");
//         var input2 = pdfEndpoint.AddPdf(resource2);
//         input2.Id = "invoice";

//         var rootOutline = pdfEndpoint.Outlines.push("Root Outline");
//         rootOutline.Expanded = true;

//         rootOutline.Children.push("DocumentA 100", input1, 0, PageZoom.FitPage);
//         rootOutline.Children.push("Invoice", input2);


//         var res = await pdfEndpoint.Process();
//         if (testParams.Logging) {
//             console.log("Result: " + res.IsSuccessful);

//             if (res.IsSuccessful) {
//                 var outStream = fs.createWriteStream("./output/oultineExistingPdf.pdf");
//                 outStream.write(res.SetPdfContent);
//                 outStream.close();
//             }
//         }
//         assert.strictEqual(res.IsSuccessful, true);
//     });

//     it('MergeExsistingOutlinesWithRootoutline(', async function () {
//         var pdfEndpoint = getEndpoint(testParams);
//         var resource1 = new PdfResource("./Resources/AllPageElements.pdf");
//         var input1 = pdfEndpoint.AddPdf(resource1);
//         input1.Id = "AllPageElements";
//         pdfEndpoint.Inputs.push(input);

//         var resource2 = new PdfResource("./Resources/PdfOutlineInput.pdf");
//         var input2 = pdfEndpoint.AddPdf(resource2);
//         input2.Id = "outlineDoc1";
//         pdfEndpoint.Inputs.push(input1);

//         var rootOutline = pdfEndpoint.Outlines.push("Imported Outline");
//         rootOutline.Expanded = true;

//         rootOutline.Children.AddPdfOutlines(input);
//         rootOutline.Children.AddPdfOutlines(input1);


//         var res = await pdfEndpoint.Process();
//         if (testParams.Logging) {
//             console.log("Result: " + res.IsSuccessful);

//             if (res.IsSuccessful) {
//                 var outStream = fs.createWriteStream("./output/oultine1MergeExsistingOutlinesWithRootoutline.pdf");
//                 outStream.write(res.SetPdfContent);
//                 outStream.close();
//             }
//         }
//         assert.strictEqual(res.IsSuccessful, true);
//     });

//     it('With Goto Action', async function () {
//         var pdfEndpoint = getEndpoint(testParams);
//         var resource = new PdfResource("./Resources/Invoice.pdf");
//         var input = new PdfInput(resource);
//         input.Id = "invoice";
//         pdfEndpoint.Inputs.push(input);

//         var resource1 = new ImageResource("./Resources/CCITT_1.tif");
//         var input1 = new ImageInput(resource1);
//         input1.Id = "picture";
//         pdfEndpoint.Inputs.push(input1);

//         var resource2 = new PdfResource("./Resources/MergeOutlineInput.pdf");
//         var input2 = new PdfInput(resource2);
//         input2.Id = "docA100";
//         pdfEndpoint.Inputs.push(input2);

//         var mergeOptions = new MergeOptions();
//         mergeOptions.outlines = false;
//         input2.MergeOptions = mergeOptions;

//         var outline = new Outline("Invoice");
//         var goToAction = new GoToAction("invoice");
//         goToAction.InputID = "invoice";
//         outline.Action = goToAction;
//         pdfEndpoint.Outlines.push(outline);

//         var outline1 = new Outline("Picture");
//         var goToAction1 = new GoToAction("picture");
//         goToAction1.InputID = "picture";
//         outline1.Action = goToAction1;
//         pdfEndpoint.Outlines.push(outline1);

//         var outline2 = new Outline("Outlines in Doc A 100");
//         outline1 = new Outline("docA100");
//         outline1.FromInputID = "docA100";
//         outline2.Children.push(outline1);
//         pdfEndpoint.Outlines.push(outline2);
//         var res = await pdfEndpoint.Process();
//         if (testParams.Logging) {
//             console.log("Result: " + res.IsSuccessful);

//             if (res.IsSuccessful) {
//                 var outStream = fs.createWriteStream("./output/oultine1.pdf");
//                 outStream.write(res.SetPdfContent);
//                 outStream.close();
//             }
//         }
//         assert.strictEqual(res.IsSuccessful, true);
//     });

//     it('URL Action', async function () {
//         var pdfEndpoint = getEndpoint(testParams);
//         var resource1 = new PdfResource("./Resources/Org.pdf");
//         var input1 = new PdfInput(resource1);
//         input1.Id = "document1";
//         pdfEndpoint.Inputs.push(input1);

//         resource1 = new PdfResource("./Resources/DocumentA100.pdf");
//         input1 = new PdfInput(resource1);
//         input1.Id = "document2";
//         pdfEndpoint.Inputs.push(input1);

//         var outline = new Outline("OutlineA");
//         outline.Color = RgbColor.Red;
//         outline.Style = OutlineStyle.bold;
//         outline.Expanded = true;


//         var goToAction = new GoToAction("document2");
//         goToAction.InputID = "document2";
//         goToAction.Style = OutlineStyle.italic;
//         goToAction.PageOffset = -2;
//         goToAction.PageZoom = PageZoom.FitPage;

//         outline.Action = goToAction;
//         pdfEndpoint.Outlines.push(outline);

//         outline = new Outline("Outline2A");
//         outline.Color = "blue";
//         outline.Style = OutlineStyle.regular;
//         outline.Expanded = false;

//         goToAction = new GoToAction("document1");
//         goToAction.InputID = "document1";
//         goToAction.Style = OutlineStyle.italic;
//         goToAction.PageZoom = PageZoom.FitHeight;

//         outline.Action = goToAction;
//         pdfEndpoint.Outlines.push(outline);

//         outline = new Outline("DynamicPDF is Cool!");
//         var urlAction = new UrlAction("https://www.dynamicpdf.com");
//         outline.Action = urlAction;
//         pdfEndpoint.Outlines.push(outline);
//         var res = await pdfEndpoint.Process();
//         if (testParams.Logging) {
//             console.log("Result: " + res.IsSuccessful);

//             if (res.IsSuccessful) {
//                 var outStream = fs.createWriteStream("./output/oultine2.pdf");
//                 outStream.write(res.SetPdfContent);
//                 outStream.close();
//             }
//         }
//         assert.strictEqual(res.IsSuccessful, true);
//     });
// });
