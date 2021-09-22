/**
 * The type of Compaction to encode.
 */
export const Compaction = Object.freeze({

    /**Byte Compaction. */
    "Byte": 0,

    /**Text Compaction. */
    "Text": 1,

    /**Numeric Compaction. */
    "Numeric": 2,

    /**All Compactions. */
    "Auto": 3
});
