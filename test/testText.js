import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import { PdfText } from '../lib/PdfText.js';
import { PdfResource } from '../lib/PdfResource.js';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
function getEndpoint(text, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    text.loggingEnabled = testParams.Logging;
    text.BaseUrl = testParams.BaseUrl + text.EndpointName;
    text.ApiKey = testParams.ApiKey;
    text.Author = "sheetal";
    text.Title = "pdf merger";
    return text;
}

describe.only('Text Endpoint', function () {
    this.timeout(0);
    it.only('TextExtraction', async function () {

        var testParams = new TestParams();

        var resource = new PdfResource("./Resources/Test_Textmarker_Serienbrief(2).pdf", "Test_Textmarker_Serienbrief(2).pdf")
        var text = new PdfText(resource);
        text = getEndpoint(text, testParams);
        var res = await text.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);


            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/dlexAllReportElements.pdf");
                outStream.write(res.SetPdfContent);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
});