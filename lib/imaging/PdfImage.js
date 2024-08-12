import FormData from 'form-data';
import { Endpoint } from "../Endpoint.js";
import { DpiImageSize } from './DpiImageSize.js';
import { FixedImageSize } from './FixedImageSize.js';
import { MaxImageSize } from './MaxImageSize.js';
import { PercentageImageSize } from './PercentageImageSize.js';
import { GifImageFormat } from './GifImageFormat.js';
import { JpegImageFormat } from './JpegImageFormat.js';
import { PngImageFormat } from './PngImageFormat.js';
import { PngIndexedColorFormat } from './PngIndexedColorFormat.js';
import { PngMonochromeColorFormat } from './PngMonochromeColorFormat.js';
import { TiffImageFormat } from './TiffImageFormat.js';
import { TiffIndexedColorFormat } from './TiffIndexedColorFormat.js';
import { TiffMonochromeColorFormat } from './TiffMonochromeColorFormat.js';
import { BmpImageFormat } from './BmpImageFormat.js';
import { BmpMonochromeColorFormat } from './BmpMonochromeColorFormat.js';

export class PdfImage extends Endpoint {
    resource;
    #form;

    constructor(resource) {
        super();
        this.resource = resource;
        this.startPageNumber = null;
        this.pageCount = null;
        this.imageFormat = null;
        this.imageSize = null;
        this.endPointName = "pdf-image";
        super.queryString = "";
    }

    async process() {
        this.#form = new FormData();
        if (this.resource != null)
            this.#form.append('pdf', this.resource.data, this.resource.resourceName, this.resource.mimeType);

        super.queryString = this.getQueryParameters();

        return await this._postRasterizerForm(this.#form, super.endPointName);
    }

    getQueryParameters() {
        let params="";
        if (this.startPageNumber !== null) params += "&sp="+this.startPageNumber;
        if (this.pageCount !== null) params += "&pc="+this.pageCount;

        if (this.imageSize != null) {
            if (this.imageSize instanceof DpiImageSize) {
                params += "&is="+this.imageSize.type.toString();
                if (this.imageSize.horizontalDpi !== null)
                    params += "&hd="+this.imageSize.horizontalDpi.toString();
                if (this.imageSize.verticalDpi !== null)
                    params += "&vd="+this.imageSize.verticalDpi.toString();
            } else if (this.imageSize instanceof FixedImageSize) {
                params += "&is="+this.imageSize.type.toString();
                if (this.imageSize.height !== null)
                    params += "&ht="+this.imageSize.height.toString();
                if (this.imageSize.width !== null)
                    params += "&wd="+this.imageSize.width.toString();
                if (this.imageSize.unit !== null)
                    params += "&ut="+this.imageSize.unit.toString();
            } else if (this.imageSize instanceof MaxImageSize) {
                params += "&is="+this.imageSize.type.toString();
                if (this.imageSize.maxHeight !== null)
                    params += "&mh="+this.imageSize.maxHeight.toString();
                if (this.imageSize.maxWidth !== null)
                    params += "&mw="+this.imageSize.maxWidth.toString();
                if (this.imageSize.unit !== null)
                    params += "&ut="+this.imageSize.unit.toString();
            } else if (this.imageSize instanceof PercentageImageSize) {
                params += "&is="+this.imageSize.type.toString();
                if (this.imageSize.horizontalPercentage !== null)
                    params += "&hp="+this.imageSize.horizontalPercentage.toString();
                if (this.imageSize.verticalPercentage !== null)
                    params += "&vp="+this.imageSize.verticalPercentage.toString();
            }
        }        
        
        if (this.imageFormat != null) {
            if (this.imageFormat instanceof GifImageFormat) {
                params += "&if="+this.imageFormat.type.toString();
                if (this.imageFormat.ditheringPercent !== null)
                    params += "&dp="+this.imageFormat.ditheringPercent.toString();
                if (this.imageFormat.ditheringAlgorithm)
                    params += "&da="+this.imageFormat.ditheringAlgorithm.toString();
            } else if (this.imageFormat instanceof JpegImageFormat) {
                params += "&if="+this.imageFormat.type.toString();
                if (this.imageFormat.quality !== null)
                    params += "&qt="+this.imageFormat.quality.toString();
            } else if (this.imageFormat instanceof PngImageFormat) {
                params += "&if="+this.imageFormat.type.toString();
                if (this.imageFormat.colorFormat) {
                    params += "&cf="+this.imageFormat.colorFormat.type.toString();
                    if (this.imageFormat.colorFormat instanceof PngIndexedColorFormat) {
                        if (this.imageFormat.colorFormat.ditheringAlgorithm !== null)
                            params += "&da="+this.imageFormat.colorFormat.ditheringAlgorithm.toString();
                        if (this.imageFormat.colorFormat.ditheringPercent !== null)
                            params += "&dp="+this.imageFormat.colorFormat.ditheringPercent.toString();
                        if (this.imageFormat.colorFormat.quantizationAlgorithm !== null)
                            params += "&qa="+this.imageFormat.colorFormat.quantizationAlgorithm.toString();
                    } else if (this.imageFormat.colorFormat instanceof PngMonochromeColorFormat) {
                        if (this.imageFormat.colorFormat.blackThreshold !== null)
                            params += "&bt="+this.imageFormat.colorFormat.blackThreshold.toString();
                        if (this.imageFormat.colorFormat.ditheringAlgorithm !== null)
                            params += "&da="+this.imageFormat.colorFormat.ditheringAlgorithm.toString();
                        if (this.imageFormat.colorFormat.ditheringPercent !== null)
                            params += "&dp="+this.imageFormat.colorFormat.ditheringPercent.toString();
                    }
                }
            } else if (this.imageFormat instanceof TiffImageFormat) {
                params += "&if="+this.imageFormat.type.toString();
                if (this.imageFormat.multiPage)
                    params += "&mp=true"
                if (this.imageFormat.colorFormat) {
                    params += "&cf="+this.imageFormat.colorFormat.type.toString();
                    if (this.imageFormat.colorFormat instanceof TiffIndexedColorFormat) {
                        if (this.imageFormat.colorFormat.ditheringAlgorithm !== null)
                            params += "&da="+this.imageFormat.colorFormat.ditheringAlgorithm.toString();
                        if (this.imageFormat.colorFormat.ditheringPercent !== null)
                            params += "&dp="+this.imageFormat.colorFormat.ditheringPercent.toString();
                        if (this.imageFormat.colorFormat.quantizationAlgorithm !== null)
                            params += "&qa="+this.imageFormat.colorFormat.quantizationAlgorithm.toString();
                    } else if (this.imageFormat.colorFormat instanceof TiffMonochromeColorFormat) {
                        if (this.imageFormat.colorFormat.compressionType !== null)
                            params += "&ct="+this.imageFormat.colorFormat.compressionType.toString();
                        if (this.imageFormat.colorFormat.blackThreshold !== null)
                            params += "&bt="+this.imageFormat.colorFormat.blackThreshold.toString();
                        if (this.imageFormat.colorFormat.ditheringAlgorithm !== null)
                            params += "&da="+this.imageFormat.colorFormat.ditheringAlgorithm.toString();
                        if (this.imageFormat.colorFormat.ditheringPercent !== null)
                            params += "&dp="+this.imageFormat.colorFormat.ditheringPercent.toString();
                    }
                }
            } else if (this.imageFormat instanceof BmpImageFormat) {
                params += "&if="+this.imageFormat.type.toString();
                if (this.imageFormat.colorFormat) {
                    params += "&cf="+this.imageFormat.colorFormat.type.toString();
                    if (this.imageFormat.colorFormat instanceof BmpMonochromeColorFormat) {
                        if (this.imageFormat.colorFormat.blackThreshold !== null)
                            params += "&bt="+this.imageFormat.colorFormat.blackThreshold.toString();
                        if (this.imageFormat.colorFormat.ditheringPercent !== null)
                            params += "&dp="+this.imageFormat.colorFormat.ditheringPercent.toString();
                        if (this.imageFormat.colorFormat.ditheringAlgorithm !== null)
                            params += "&da="+this.imageFormat.colorFormat.ditheringAlgorithm.toString();
                    }
                }
            }
        }        

        if( params == "") return null;

        if (params.startsWith('&')) {
            params = params.substring(1); // Remove the first character (which is '&')
        }
        
        return params;
    }   
}