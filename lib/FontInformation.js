export class FontInformation {
    #fontName;
    #filePath;
    constructor(fontName, filePath) {
        this.fontName = fontName;
        this.filePath = filePath;
    }
    get FontName() {
        return this.#fontName;
    }
    get FilePath() {
        return this.#filePath;
    }
}