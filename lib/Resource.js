import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

/** Represents the base class resource. */
export class Resource {

    #FilePath;
    
    #type;

    #fileExtension;
    
    #mimeType;

    #Data = [];

    /**Gets or sets the resource name. */
    resourceName;


    constructor(input, resourceName) {
        if (typeof (input) === "string") {
            this.#FilePath = input;
            this.resourceName = resourceName;
            this.#Data = this.#GetFileData();
        }
        else if (Buffer.isBuffer(input)) {
            this.#Data = input;
            this.resourceName = resourceName;
        }
        else {
            this.#Data = this.#GetSteamData(input);
            this.resourceName = resourceName; 
        }
        if (this.resourceName == null) {
            this.resourceName = uuidv4();
        }
    }

    get Data() {
        return this.#Data;
    }

    set Data(value) {
        this.#Data = value;
    }

    get FileExtension() {
        return this.#fileExtension;
    }

    set FileExtension(value) {
        this.#fileExtension = value;
    }

    get MimeType() {
        return this.#mimeType;
    }

    set MimeType(value) {
        this.#mimeType = value;
    }

    get Type() {
        return this.#type;
    }

    set Type(value) {
        this.#type = value;
    }

    #GetFileData() {
        return fs.readFileSync(this.#FilePath);
    }

    #GetSteamData(stream) {
        const chunks = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
            stream.on('error', (err) => reject(err));
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
    }

    GetUTFFileData(filePath) {
        var fileData = fs.readFileSync(filePath);
        return Buffer.from(fileData, 'utf-8').toString();
    }
}
