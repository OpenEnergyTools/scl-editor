import { isTypeMissing, getTypeChild } from './foundation.js';

async function dOValidator(element) {
    if (isTypeMissing(element))
        return [
            {
                title: `validator.templates.missingAttribute, type, ${element.tagName}`,
                message: `${element.tagName}`,
            },
        ];
    const child = getTypeChild(element);
    if (child === null)
        return [
            {
                title: `validator.templates.missingReference, DO, ${element.getAttribute('name')}`,
                message: `${element.tagName}`,
            },
        ];
    return [];
}

export { dOValidator };
//# sourceMappingURL=dosdo.js.map
