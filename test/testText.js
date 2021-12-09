import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfText,
    PdfResource
} from "./imports.js";

function getEndpoint(text, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    text.loggingEnabled = testParams.Logging;
    text.baseUrl = testParams.BaseUrl;
    text.apiKey = testParams.ApiKey;
    text.author = "sheetal";
    text.title = "pdf merger";
    return text;
}

describe('Text Endpoint', function () {
    this.timeout(0);
    it('TextExtraction', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Test_Textmarker_Serienbrief(2).pdf", "Test_Textmarker_Serienbrief(2).pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/TextExtraction.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('SinglePage', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Test_Textmarker_Serienbrief(2).pdf", "Test_Textmarker_Serienbrief(2).pdf")
        var text = new PdfText(resource);
        text.startPage = 5;
        text.pageCount = 1;
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/textSinglePage.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('MultiPage', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Test_Textmarker_Serienbrief(2).pdf", "Test_Textmarker_Serienbrief(2).pdf")
        var text = new PdfText(resource);
        text.startPage = 2;
        text.pageCount = 3;
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/textMultiPage.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('CJKFonts', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/pdf_font-zhcn.pdf", "pdf_font-zhcn.pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/textCJKFonts.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('SpecialChars', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Input.pdf", "Input.pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/textInput.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Arabic', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Arabic.pdf", "Arabic.pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/textArabic.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});