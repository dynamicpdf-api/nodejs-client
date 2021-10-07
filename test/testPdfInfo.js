import assert from 'assert';
import fs from 'fs';
import { TestParams } from './init.js';
import {
    PdfInfo,
    PdfResource
} from "./imports.js";

function getEndpoint(pdfInfo, testParams) {
    if (testParams.AuthTLS == false) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    }
    pdfInfo.loggingEnabled = testParams.Logging;
    pdfInfo.BaseUrl = testParams.BaseUrl;
    pdfInfo.ApiKey = testParams.ApiKey;
    pdfInfo.Author = "sheetal";
    pdfInfo.Title = "pdf merger";
    return pdfInfo;
}

describe('PdfInfo Endpoint', function () {
    this.timeout(0);
    it('AllFormFields', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/AllFormFields.pdf", "AllFormFields.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoAllFormFields.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Button', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Button.pdf", "Button.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoButton.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Checkbox', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Checkbox.pdf", "Checkbox.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoCheckbox.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Combo', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Checkbox.pdf", "Checkbox.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoCombo.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('ComboExport', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ComboExport.pdf", "ComboExport.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoComboExport.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('ComboExport1', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ComboExport1.pdf", "ComboExport1.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoComboExport1.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('ComboExport2', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ComboExport2.pdf", "ComboExport2.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoComboExport2.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('ListBoxMultiSelect', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListBoxMultiSelect.pdf", "ListBoxMultiSelect.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListBoxMultiSelect.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('ListBoxSingleSelect', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListBoxSingleSelect.pdf", "ListBoxSingleSelect.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListBoxSingleSelect.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('ListMultiSelectExport1', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListMultiSelectExport1.pdf", "ListMultiSelectExport1.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListMultiSelectExport1.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('ListMultiSelectExport2', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/ListMultiSelectExport2.pdf", "ListMultiSelectExport2.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoListMultiSelectExport2.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('PushButton', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/PushButton.pdf", "PushButton.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoPushButton.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Radio', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Radio.pdf", "Radio.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoRadio.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('Signature', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/Signature.pdf", "Signature.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoSignature.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('SignatureNoSign', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/SignatureNoSign.pdf", "SignatureNoSign.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoSignatureNoSign.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('TextField', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/TextField.pdf", "TextField.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoTextField.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
    it('TextField2', async function () {

        var testParams = new TestParams();
        var resource = new PdfResource("./Resources/TextField2.pdf", "TextField2.pdf")
        var pdfInfo = new PdfInfo(resource);
        pdfInfo = getEndpoint(pdfInfo, testParams);
        var res = await pdfInfo.Process();

        if (testParams.Logging) {
            console.log("Result: " + res.IsSuccessful);
            if (res.IsSuccessful) {
                var outStream = fs.createWriteStream("./output/pdfInfoTextField2.json");
                outStream.write(res.Content);
                outStream.close();
            }
        }
        assert.strictEqual(res.IsSuccessful, true);
    });
});