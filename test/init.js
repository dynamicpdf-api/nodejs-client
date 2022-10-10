import fs from 'fs';

const testConfigFile = './test-config.json';

export class TestParams {
    #params = null;
    #defaults = {
        ApiKey: "DP.99CFJ3uF9Gr1lKDUImxceCiPvwCmsoevvvcqizChDATTSJsYSH/zvAVF",
        BaseUrl: "https://localhost:44397/",
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
