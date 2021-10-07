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
    text.BaseUrl = testParams.BaseUrl;
    text.ApiKey = testParams.ApiKey;
    text.Author = "sheetal";
    text.Title = "pdf merger";
    return text;
}

describe('Text Endpoint', function () {
    this.timeout(0);
    it('TextExtraction', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Test_Textmarker_Serienbrief(2).pdf", "Test_Textmarker_Serienbrief(2).pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/TextExtraction.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('SinglePage', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Test_Textmarker_Serienbrief(2).pdf", "Test_Textmarker_Serienbrief(2).pdf")
        var text = new PdfText(resource);
        text.StartPage = 5;
        text.PageCount = 1;
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/textSinglePage.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('MultiPage', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Test_Textmarker_Serienbrief(2).pdf", "Test_Textmarker_Serienbrief(2).pdf")
        var text = new PdfText(resource);
        text.StartPage = 2;
        text.PageCount = 3;
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/textMultiPage.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('CJKFonts', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/pdf_font-zhcn.pdf", "pdf_font-zhcn.pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/textCJKFonts.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('SpecialChars', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Input.pdf", "Input.pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/textInput.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Arabic', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Arabic.pdf", "Arabic.pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/textArabic.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
});