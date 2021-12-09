/**Represents different options for merging PDF documents. */
export class MergeOptions {

    /** Gets or sets a boolean indicating whether to import document information when merging. */
    documentInfo;

    /** Gets or sets a boolean indicating whether to import document level JavaScript when merging. */
    documentJavaScript;

    /** Gets or sets a boolean indicating whether to import document properties when merging. */
    documentProperties;

    /** Gets or sets a boolean indicating whether to import embedded files when merging. */
    embeddedFiles;

    /** Gets or sets a boolean indicating whether to import form fields when merging. */
    formFields;

    /** Gets or sets a boolean indicating whether to import XFA form data when merging. */
    formsXfaData;

    /**  Gets or sets a boolean indicating whether to import logical structure 
    * (tagging information) when merging.
    */
    logicalStructure;

    /** Gets or sets a boolean indicating whether to import document's opening
     * action (initial page and zoom settings) when merging.
     */
    openAction;

    /** Gets or sets a boolean indicating whether to import optional content when merging. */
    optionalContentInfo;

    /** Gets or sets a boolean indicating whether to import outlines and bookmarks when merging. */
    outlines;

    /** Gets or sets a boolean indicating whether to import OutputIntent when merging. */
    outputIntent;

    /** Gets or sets a boolean indicating whether to import PageAnnotations when merging. */
    pageAnnotations;

    /** Gets or sets a boolean indicating whether to import PageLabelsAndSections when merging. */
    pageLabelsAndSections;

    /** Gets or sets the root form field for imported form fields.
     * Useful when merging a PDF repeatedly to have a better 
     * control on the form field names.
     */
    rootFormField;

    /** Gets or sets a boolean indicating whether to import XmpMetadata when merging. */
    xmpMetadata;

    toJSON() {
        return {
            documentJavaScript: this.documentJavaScript,
            documentInfo: this.documentInfo,
            documentProperties: this.documentProperties,
            embeddedFiles: this.embeddedFiles,
            formFields: this.formFields,
            formsXfaData: this.formsXfaData,
            logicalStructure: this.logicalStructure,
            openAction: this.openAction,
            optionalContentInfo: this.optionalContentInfo,
            outlines: this.outlines,
            outputIntent: this.outputIntent,
            pageAnnotations: this.pageAnnotations,
            pageLabelsAndSections: this.pageLabelsAndSections,
            rootFormField: this.rootFormField,
            xmpMetadata: this.xmpMetadata
        };
    }
}