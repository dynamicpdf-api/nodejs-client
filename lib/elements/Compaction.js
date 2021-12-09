/**
 * The type of Compaction to encode.
 */
export const compaction = Object.freeze({

    /**Byte Compaction. */
    "byte": 0,

    /**Text Compaction. */
    "text": 1,

    /**Numeric Compaction. */
    "numeric": 2,

    /**All Compactions. */
    "auto": 3
});
