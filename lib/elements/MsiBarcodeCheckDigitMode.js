/** MSI Barcode check digit mode */
export const msiBarcodeCheckDigitMode = Object.freeze({

    /** No check digit.*/
    "none": 0,

    /** check digit of mod 10. */
    "mod10": 1,

    /** check digit of mod 11.*/
    "mod11": 2,

    /** check digit of mod 1010. */
    "mod1010": 3,

    /** check digit of mod 1110. */
    "mod1110": 4
});