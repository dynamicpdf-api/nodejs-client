import fs from "fs";

export class FullNameTable {
  constructor() {
    this.fontName = "";
  }

  static fromFile(filePath, tableDirectory, position) {
    const buffer = fs.readFileSync(filePath);
    return FullNameTable.fromBuffer(buffer, tableDirectory, position);
  }

  static fromBuffer(buffer, tableDirectory, position) {
    const table = new FullNameTable();

    const intOffset = readULong(tableDirectory, position + 8);
    const intLength = readULong(tableDirectory, position + 12);

    const data = buffer.slice(intOffset, intOffset + intLength);

    const dataStart = readUShort(data, 4);
    const headerStart = 6;
    const headerEnd = readUShort(data, 2) * 12;

    let fontName = "";

    for (let i = headerStart; i < headerEnd; i += 12) {
      if (readUShort(data, i + 6) === 4) {
        if (
          readUShort(data, i) === 3 &&
          readUShort(data, i + 2) === 1 &&
          readUShort(data, i + 4) === 0x0409
        ) {
          const offset = dataStart + readUShort(data, i + 10);
          const length = readUShort(data, i + 8);
          fontName = decodeUTF16BE(data.slice(offset, offset + length));
          break;
        }
      }
    }

    // fallback
    if (!fontName) {
      for (let i = headerStart; i < headerEnd; i += 12) {
        if (readUShort(data, i + 6) === 4) {
          if (
            readUShort(data, i) === 3 &&
            readUShort(data, i + 2) === 0 &&
            readUShort(data, i + 4) === 0x0409
          ) {
            const offset = dataStart + readUShort(data, i + 10);
            const length = readUShort(data, i + 8);
            fontName = decodeUTF16BE(data.slice(offset, offset + length));
            break;
          }
        }
      }
    }

    fontName = fontName.replace(/ /g, "").replace(/-/g, "");
    table.fontName = fontName;

    return table;
  }
}

function readULong(data, index) {
  return (
    (data[index] << 24) |
    (data[index + 1] << 16) |
    (data[index + 2] << 8) |
    data[index + 3]
  );
}

function readUShort(data, index) {
  return (data[index] << 8) | data[index + 1];
}

function decodeUTF16BE(buffer) {
  const u16s = [];
  for (let i = 0; i < buffer.length; i += 2) {
    u16s.push(buffer.readUInt16BE(i));
  }
  return String.fromCharCode(...u16s);
}

