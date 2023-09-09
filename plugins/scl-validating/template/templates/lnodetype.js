import { getAdjacentClass, iec6185074, validateChildren, } from './foundation.js';
async function getMandatoryDataObject(base) {
    const lnodeclasses = getAdjacentClass(await iec6185074, base);
    return lnodeclasses.flatMap(lnodeclass => Array.from(lnodeclass.querySelectorAll('DataObject[presCond="M"]')));
}
async function missingMandatoryChildren(lnodetype, lnClass) {
    const errors = [];
    const mandatorydos = await (await getMandatoryDataObject(lnClass)).map(DO => DO.getAttribute('name'));
    mandatorydos.forEach(mandatorydo => {
        if (!lnodetype.querySelector(`DO[name="${mandatorydo}"]`))
            errors.push({
                title: `validator.templates.mandatoryChild ${lnClass}, ${lnClass}, DO, ${mandatorydo}`,
                message: `${lnClass} > ${mandatorydo}`,
            });
    });
    return errors;
}
export async function lNodeTypeValidator(element) {
    const errors = [];
    const lnClass = element.getAttribute('lnClass');
    if (!lnClass)
        return [
            {
                title: `validator.templates.missingAttribute, ${lnClass}, ${element.tagName}`,
                message: `${lnClass}`,
            },
        ];
    const missingChildren = await missingMandatoryChildren(element, lnClass);
    const issuesChildren = await validateChildren(element);
    return errors.concat(missingChildren, issuesChildren);
}
//# sourceMappingURL=lnodetype.js.map