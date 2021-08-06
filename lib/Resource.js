import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
export class Resource {
    #FilePath;
    #Data = [];
    resourceName;
    Type;
    #FileExtension;
    #MimeType;
    constructor(input, resourceName) {
        if (typeof (input) === "string") {
            this.#FilePath = input;
            this.resourceName = resourceName;
            this.#Data = this.GetFileData();
        }
        else if (Array.isArray(input)) {
            this.#Data = value;
            this.resourceName = resourceName;
        }
        else {
            this.#Data = this.GetSteamData(input);
            this.resourceName = resourceName;
        }
        if (this.resourceName == null) {
            this.resourceName = uuidv4() + this.#FileExtension;;
        }
    }
    get Data() { return this.#Data; }
    get MimeType() { return this.#MimeType; }
    set MimeType(value) { this.#MimeType = value; }
    set FileExtension(value) {
        this.#FileExtension = value;
    }
    GetFileData() {
        return fs.readFileSync(this.#FilePath);
    }
    GetSteamData(stream) {
        const chunks = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
            stream.on('error', (err) => reject(err));
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
    }
}
