import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfInfo,
    PdfResource
} from "./imports.js";

function getEndpoint(endpoint, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
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

describe('PdfInfo Endpoint', function () {
    this.timeout(0);
    it('AllFormFields', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/AllFormFields.pdf", "AllFormFields.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoAllFormFields.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Button', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Button.pdf", "Button.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoButton.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Checkbox', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Checkbox.pdf", "Checkbox.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoCheckbox.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Combo', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Checkbox.pdf", "Checkbox.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoCombo.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ComboExport', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ComboExport.pdf", "ComboExport.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoComboExport.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ComboExport1', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ComboExport1.pdf", "ComboExport1.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoComboExport1.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ComboExport2', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ComboExport2.pdf", "ComboExport2.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoComboExport2.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ListBoxMultiSelect', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListBoxMultiSelect.pdf", "ListBoxMultiSelect.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListBoxMultiSelect.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ListBoxSingleSelect', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListBoxSingleSelect.pdf", "ListBoxSingleSelect.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListBoxSingleSelect.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ListMultiSelectExport1', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListMultiSelectExport1.pdf", "ListMultiSelectExport1.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListMultiSelectExport1.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('ListMultiSelectExport2', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListMultiSelectExport2.pdf", "ListMultiSelectExport2.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListMultiSelectExport2.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('PushButton', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/PushButton.pdf", "PushButton.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoPushButton.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Radio', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Radio.pdf", "Radio.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoRadio.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('Signature', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Signature.pdf", "Signature.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoSignature.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('SignatureNoSign', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/SignatureNoSign.pdf", "SignatureNoSign.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoSignatureNoSign.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('TextField', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/TextField.pdf", "TextField.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoTextField.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
    it('TextField2', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/TextField2.pdf", "TextField2.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.process();

        if (testParams.Logging) {
            console.log("Result: " + res.isSuccessful);
            if (res.isSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoTextField2.json");
                outStream.write(res.content);
                outStream.close();
            }
        }
        assert.strictEqual(res.isSuccessful, true);
    });
});