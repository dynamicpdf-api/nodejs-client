export const encryptionType = Object.freeze({

    /** Represents a RC4 40 bit security. */
    "rc440":0,

    /** Represents a RC4 128 bit security. */
    "rc4128":1,

    /** Represents a AES 128 bit security with CBC cipher mode. */
    "aes128cbc":2,

    /** Represents a AES 256 bit security with CBC cipher mode. */
    "aes256cbc":3,

    /** Represents No security. */
    "none":4

});