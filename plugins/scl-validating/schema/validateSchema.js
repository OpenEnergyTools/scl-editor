import { isLoadSchemaResult, isValidationResult, isValidationError } from '../foundation/utils.js';
import { getSchema } from './schemas.js';

const validators = {};
async function validateSchema(doc, docName) {
    var _a, _b, _c;
    const issues = [];
    const fileName = docName;
    let version = '2007';
    let revision = 'B';
    let release = '1';
    if (doc.documentElement)
        [version, revision, release] = [
            (_a = doc.documentElement.getAttribute('version')) !== null && _a !== void 0 ? _a : '',
            (_b = doc.documentElement.getAttribute('revision')) !== null && _b !== void 0 ? _b : '',
            (_c = doc.documentElement.getAttribute('release')) !== null && _c !== void 0 ? _c : '',
        ];
    async function getValidator(xsd, xsdName) {
        if (!window.Worker)
            throw new Error('Invalid schema');
        if (validators[xsdName])
            return validators[xsdName];
        const worker = new Worker(new URL('./worker.js', import.meta.url));
        async function validate(xml, xmlName, results) {
            return new Promise(resolve => {
                worker.addEventListener('message', (e) => {
                    if (isValidationResult(e.data) && e.data.file === xmlName) {
                        resolve(e.data);
                    }
                    else if (isValidationError(e.data)) {
                        const parts = e.data.message.split(': ', 2);
                        const description = parts[1] ? parts[1] : parts[0];
                        const qualifiedTag = parts[1] ? ` (${parts[0]})` : '';
                        results.push({
                            title: description,
                            message: `${e.data.file}:${e.data.line} ${e.data.node} ${e.data.part}${qualifiedTag}`,
                        });
                    }
                });
                worker.postMessage({ content: xml, name: xmlName });
            });
        }
        validators[xsdName] = validate;
        return new Promise((resolve, reject) => {
            worker.addEventListener('message', (e) => {
                if (isLoadSchemaResult(e.data)) {
                    if (e.data.loaded)
                        resolve(validate);
                    // eslint-disable-next-line prefer-promise-reject-errors
                    else
                        reject('validator.schema.loadEror');
                }
            });
            worker.postMessage({ content: xsd, name: xsdName });
        });
    }
    const validate = await getValidator(getSchema(version, revision, release), `SCL${version}${revision}${release}.xsd`);
    const result = await validate(new XMLSerializer().serializeToString(doc), fileName, issues);
    if (result.valid)
        issues.push({ title: 'Project is schema valid' });
    return issues;
}

export { validateSchema };
//# sourceMappingURL=validateSchema.js.map
