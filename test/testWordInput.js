import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfText,
    PdfResource,
    WordResource,
    WordInput,
    Pdf,
    PageSize
} from "./imports.js";
import { TextReplace } from '../lib/TextReplace.js';

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

describe('Word Input', function () {
    this.timeout(0);
    it('WordToPDF', async function () {

        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var resource = new WordResource("./Resources/wordDoc.docx", "wordDoc.docx")
        var word =new WordInput(resource);
        word.LeftMargin=100;
        word.TopMargin =100;
        word.PageWidth = 1008;
        word.PageHeight = 612;
        pdf.inputs.push(word);
        var res = await pdf.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/WordToPDF.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ReplaceText', async function () {

        var testParams = new TestParams();
        var pdf = getEndpoint(testParams);
        var resource = new WordResource("./Resources/wordDoc.docx", "wordDoc.docx")
        var word =new WordInput(resource);
        word.LeftMargin=10;
        word.PageSize=PageSize.A4;
        word.TextReplace.push(new TextReplace("ve","Data",true));
        pdf.inputs.push(word);
        var res = await pdf.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);


            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/WordReplaceText.pdf");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
   
});