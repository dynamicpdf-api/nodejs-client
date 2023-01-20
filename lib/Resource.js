import fs from 'fs';
import { NIL, v4 as uuidv4 } from 'uuid';

/** Represents the base class resource. */
export class Resource {

    #type;

    #fileExtension;

    #mimeType;

    #Data = [];

    /**Gets or sets the resource name. */
    resourceName;

    filePath;


    constructor(input, resourceName) {
        if (typeof (input) === "string") {
            if (fs.existsSync(input)) {
                this.filePath = input;
                this.resourceName = resourceName;
                this.#Data = this.#GetFileData();
            }
            else {
                this.#Data = input
            }
        }
        else if (Buffer.isBuffer(input)) {
            this.#Data = input;
            this.resourceName = resourceName;
        }
        else if (typeof (input) === "stream") {
            this.#Data = this.#GetSteamData(input);
            this.resourceName = resourceName;
        }
        if (resourceName == null) {
            this.resourceName = uuidv4();
        }
    }

    get data() {
        return this.#Data;
    }

    set data(value) {
        this.#Data = value;
    }

    get fileExtension() {
        return this.#fileExtension;
    }

    set fileExtension(value) {
        this.#fileExtension = value;
    }

    get mimeType() {
        return this.#mimeType;
    }

    set mimeType(value) {
        this.#mimeType = value;
    }

    get type() {
        return this.#type;
    }

    set type(value) {
        this.#type = value;
    }

    #GetFileData() {
        return fs.readFileSync(this.filePath);
    }

    #GetSteamData(stream) {
        const chunks = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
            stream.on('error', (err) => reject(err));
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
    }

    getUTFFileData(filePath) {
        var fileData = fs.readFileSync(filePath);
        return Buffer.from(fileData, 'utf-8').toString();
    }

    toJSON() {
        return {
            resourceName: this.resourceName
        }
    }
}
