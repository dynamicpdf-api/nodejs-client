/**Represents different options for merging PDF documents. */
export class MergeOptions {

    /** Gets or sets a boolean indicating whether to import document information when merging. */
    DocumentInfo;

    /** Gets or sets a boolean indicating whether to import document level JavaScript when merging. */
    DocumentJavaScript;

    /** Gets or sets a boolean indicating whether to import document properties when merging. */
    DocumentProperties;

    /** Gets or sets a boolean indicating whether to import embedded files when merging. */
    EmbeddedFiles;

    /** Gets or sets a boolean indicating whether to import form fields when merging. */
    FormFields;

    /** Gets or sets a boolean indicating whether to import XFA form data when merging. */
    FormsXfaData;

    /**  Gets or sets a boolean indicating whether to import logical structure 
    * (tagging information) when merging.
    */
    LogicalStructure;

    /** Gets or sets a boolean indicating whether to import document's opening
     * action (initial page and zoom settings) when merging.
     */
    OpenAction;

    /** Gets or sets a boolean indicating whether to import optional content when merging. */
    OptionalContentInfo;

    /** Gets or sets a boolean indicating whether to import outlines and bookmarks when merging. */
    Outlines;

    /** Gets or sets a boolean indicating whether to import OutputIntent when merging. */
    OutputIntent;

    /** Gets or sets a boolean indicating whether to import PageAnnotations when merging. */
    PageAnnotations;

    /** Gets or sets a boolean indicating whether to import PageLabelsAndSections when merging. */
    PageLabelsAndSections;

    /** Gets or sets the root form field for imported form fields.
     * Useful when merging a PDF repeatedly to have a better 
     * control on the form field names.
     */
    RootFormField;

    /** Gets or sets a boolean indicating whether to import XmpMetadata when merging. */
    XmpMetadata;
}