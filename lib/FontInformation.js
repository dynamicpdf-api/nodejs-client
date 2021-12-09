export class FontInformation {

    #fontName;

    #filePath;

    constructor(fontName, filePath) {
        this.#fontName = fontName;
        this.#filePath = filePath;
    }

    get fontName() {
        return this.#fontName;
    }
    
    get filePath() {
        return this.#filePath;
    }
}