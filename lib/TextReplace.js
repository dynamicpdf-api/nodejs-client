export class TextReplace {

    /** Represents the find and replace values and its options.
    */
    constructor(text, replaceText, matchCase) {
        this.Text = text;
        this.ReplaceText = replaceText;
        this.MatchCase = matchCase;
    }

    /** Gets or sets the Find Text value. This string will be replaced with <see cref="ReplaceText"/> during conversion. */
    Text;

    /** Gets or sets ReplaceText value.This string will replace the <see cref="Text"/> during conversion. */
    ReplaceText;

    /** If True, the search operation will be case sensitive. */
    MatchCase;

    toJSON() {
        return {
            text: this.Text,
            replaceText: this.ReplaceText,
            matchCase: this.MatchCase
        }
    }
}