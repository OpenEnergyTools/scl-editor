import { dAValidator } from './dabda.js';
import { dATypeValidator } from './datype.js';
import { dOValidator } from './dosdo.js';
import { dOTypeValidator } from './dotype.js';
import { lNodeTypeValidator } from './lnodetype.js';

const iec6185074 = fetch(new URL('./IEC_61850-7-4_2007B3.nsd', import.meta.url))
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
const iec6185073 = fetch(new URL('./IEC_61850-7-3_2007B3.nsd', import.meta.url))
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
fetch(new URL('./IEC_61850-7-2_2007B3.nsd', import.meta.url))
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
const iec6185081 = fetch(new URL('./IEC_61850-8-1_2003A2.nsd', import.meta.url))
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
function isTypeMissing(element) {
    const { tagName } = element;
    const isTypeMandatory = tagName === 'DO' ||
        tagName === 'SDO' ||
        ((tagName === 'DA' || tagName === 'BDA') &&
            (element.getAttribute('bType') === 'Enum' ||
                element.getAttribute('bType') === 'Struct'));
    const isTypeMissing = !element.getAttribute('type');
    return isTypeMandatory && isTypeMissing;
}
function getTypeChild(element) {
    var _a, _b;
    const isStruct = element.getAttribute('bType') === 'Struct';
    const isEnum = element.getAttribute('bType') === 'Enum';
    const isDo = element.tagName === 'DO' || element.tagName === 'SDO';
    const referenceTag = isDo
        ? 'DOType'
        : isStruct || isEnum
            ? isStruct
                ? 'DAType'
                : 'EnumType'
            : null;
    if (!referenceTag)
        return undefined;
    return ((_b = (_a = element
        .closest('DataTypeTemplates')) === null || _a === void 0 ? void 0 : _a.querySelector(`${referenceTag}[id="${element.getAttribute('type')}"]`)) !== null && _b !== void 0 ? _b : null);
}
function getAdjacentClass(nsd, base) {
    var _a, _b;
    if (base === '')
        return [];
    const adjacents = getAdjacentClass(nsd, (_b = (_a = nsd
        .querySelector(`LNClass[name="${base}"], AbstractLNClass[name="${base}"]`)) === null || _a === void 0 ? void 0 : _a.getAttribute('base')) !== null && _b !== void 0 ? _b : '');
    return Array.from(nsd.querySelectorAll(`LNClass[name="${base}"], AbstractLNClass[name="${base}"]`)).concat(adjacents);
}
async function validateChildren(element) {
    const issues = [];
    const children = Array.from(element.children);
    for (const child of children) {
        const validator = tagValidator[child.tagName];
        if (!validator)
            continue;
        const childIssues = await validator(child);
        if (childIssues.length)
            for (const childIssue of childIssues)
                issues.push(childIssue);
    }
    return issues;
}
const tagValidator = {
    LNodeType: lNodeTypeValidator,
    DOType: dOTypeValidator,
    DAType: dATypeValidator,
    DO: dOValidator,
    SDO: dOValidator,
    DA: dAValidator,
    BDA: dAValidator,
};

export { getAdjacentClass, getTypeChild, iec6185073, iec6185074, iec6185081, isTypeMissing, tagValidator, validateChildren };
//# sourceMappingURL=foundation.js.map
