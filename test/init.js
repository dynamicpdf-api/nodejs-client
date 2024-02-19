import fs from 'fs';

const testConfigFile = './test-config.json';

export class TestParams {
    #params = null;
    #defaults = {
        ApiKey: "Api Key", // For internal testing use ./test-config.json instead of this.
        BaseUrl: "https://api.dynamicpdf.com/",
         AuthTLS: true,
        Logging: false
    };

    constructor() {
        if (this.#params == null) {
            try {
                this.#params = JSON.parse(fs.readFileSync(testConfigFile, 'utf8'));
            } catch(error) {
                this.#params = this.#defaults;
            }
        }
    }

    get ApiKey() { return this.#params.ApiKey.trim(); }
    get BaseUrl() { return this.#params.BaseUrl.trim(); }
    get AuthTLS() { return this.#params.AuthTLS; }
    get Logging() { return this.#params.Logging; }
};
