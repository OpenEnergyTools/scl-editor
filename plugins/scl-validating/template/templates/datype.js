import { validateChildren, iec6185073, iec6185081 } from './foundation.js';

async function getChildren(cdc, daName) {
    var _a;
    const nsd73 = await iec6185073;
    const dataAttribute = (_a = nsd73
        .querySelector(`CDC[name="${cdc}"] > DataAttribute[name="${daName}"]`)) === null || _a === void 0 ? void 0 : _a.getAttribute('type');
    return Array.from(nsd73.querySelectorAll(`ConstructedAttributes > ConstructedAttribute[name="${dataAttribute}"] > SubDataAttribute[presCond="M"]`));
}
async function getServiceChildren(daName) {
    const nsd81 = await iec6185081;
    return Array.from(nsd81.querySelectorAll(`ServiceConstructedAttributes > ServiceConstructedAttribute[name="${daName}"] > ` +
        ` SubDataAttribute[presCond="M"]`));
}
async function getMandatoryChildren(datype) {
    var _a, _b;
    const id = datype.getAttribute('id');
    if (!id)
        return [];
    const dataAttribute = (_a = datype
        .closest('DataTypeTemplates')) === null || _a === void 0 ? void 0 : _a.querySelector(`DOType > DA[type="${id}"]`);
    const daName = dataAttribute === null || dataAttribute === void 0 ? void 0 : dataAttribute.getAttribute('name');
    if (daName && ['Oper', 'SBOw', 'SBO', 'Cancel'].includes(daName))
        return getServiceChildren(daName);
    const cdc = (_b = dataAttribute === null || dataAttribute === void 0 ? void 0 : dataAttribute.parentElement) === null || _b === void 0 ? void 0 : _b.getAttribute('cdc');
    return getChildren(cdc, daName);
}
async function missingMandatoryChildren(datype) {
    const mandatoryChildren = await getMandatoryChildren(datype);
    const mandatoryChildNames = mandatoryChildren.map(DA => DA.getAttribute('name'));
    const missingDaNames = mandatoryChildNames.filter(da => !datype.querySelector(`BDA[name="${da}"]`));
    return missingDaNames.map(missingDa => ({
        validatorId: 'Template Validator',
        title: `validator.templates.mandatoryChild, DAType, ${datype.getAttribute('id')}, BDA, ${missingDa}`,
        message: `${datype.getAttribute('id')}`,
    }));
}
async function dATypeValidator(datype) {
    const errors = [];
    if (datype.tagName !== 'DAType')
        return [];
    const missingChildren = await missingMandatoryChildren(datype);
    const issuesChildren = await validateChildren(datype);
    return errors.concat(missingChildren, issuesChildren);
}

export { dATypeValidator };
//# sourceMappingURL=datype.js.map
