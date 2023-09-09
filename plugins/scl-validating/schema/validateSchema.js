/* eslint-disable import/no-extraneous-dependencies */
import { validate } from '@openenergytools/xml-schema-validator';
import { getSchema } from './schemas.js';
export async function validateSchema(doc, docName) {
    var _a, _b, _c;
    let version = '2007';
    let revision = 'B';
    let release = '1';
    if (doc.documentElement)
        [version, revision, release] = [
            (_a = doc.documentElement.getAttribute('version')) !== null && _a !== void 0 ? _a : '',
            (_b = doc.documentElement.getAttribute('revision')) !== null && _b !== void 0 ? _b : '',
            (_c = doc.documentElement.getAttribute('release')) !== null && _c !== void 0 ? _c : '',
        ];
    return validate({
        content: new XMLSerializer().serializeToString(doc),
        name: docName,
    }, {
        content: getSchema(version, revision, release),
        name: `SCL${version}${revision}${release}.xsd`,
    });
}
//# sourceMappingURL=validateSchema.js.map