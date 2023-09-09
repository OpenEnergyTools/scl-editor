/* eslint-disable no-promise-executor-return */
import { getAdjacentClass, iec6185073, iec6185074, iec6185081, validateChildren, } from './foundation.js';
async function getSpecificDataObject(lnClass, doName) {
    var _a;
    if (!lnClass || !doName)
        return null;
    const lnodeclasses = getAdjacentClass(await iec6185074, lnClass);
    return ((_a = lnodeclasses
        .flatMap(lnodeclass => Array.from(lnodeclass.querySelectorAll(`DataObject`)))
        .find(dataObject => dataObject.getAttribute('name') === doName)) !== null && _a !== void 0 ? _a : null);
}
async function getNsdReference(element) {
    var _a;
    const id = element.getAttribute('id');
    if (!id)
        return null;
    const doorsdo = (_a = element
        .closest('DataTypeTemplates')) === null || _a === void 0 ? void 0 : _a.querySelector(`LNodeType > DO[type="${id}"], LNodeType > SDO[type="${id}"]`);
    const doName = doorsdo === null || doorsdo === void 0 ? void 0 : doorsdo.getAttribute('name');
    const lNodeType = doorsdo === null || doorsdo === void 0 ? void 0 : doorsdo.parentElement;
    const lnClass = lNodeType === null || lNodeType === void 0 ? void 0 : lNodeType.getAttribute('lnClass');
    return getSpecificDataObject(lnClass, doName);
}
function getControlServicePresConditions(ctlModel) {
    if (!ctlModel || ctlModel === 'status-only')
        return [];
    if (ctlModel.includes('direct'))
        return ['MOctrl'];
    if (ctlModel.includes('normal'))
        return ['MOctrl', 'MOsbo', 'MOsboNormal'];
    if (ctlModel.includes('enhanced'))
        return ['MOctrl', 'MOsbo', 'MOsboEnhanced'];
    return [];
}
async function getMandatoryDataAttribute(dotype, cdc) {
    var _a, _b;
    const nsd73 = await iec6185073;
    const nsd81 = await iec6185081;
    const dataAttributes = Array.from(nsd73.querySelectorAll(`CDC[name="${cdc}"] > DataAttribute[presCond="M"]`));
    const servicePresConds = getControlServicePresConditions((_b = (_a = dotype.querySelector('DA[name="ctlModel"] > Val')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim());
    const serviceDataAttribute = Array.from(nsd81.querySelectorAll(`ServiceCDC[cdc="${cdc}"] > ServiceDataAttribute`)).filter(da => servicePresConds.includes(da.getAttribute('presCond')));
    return dataAttributes.concat(serviceDataAttribute);
}
async function validateAttributes(dotype, cdc) {
    const reference = await getNsdReference(dotype);
    if (reference && cdc !== reference.getAttribute('type'))
        return [
            {
                title: `validator.templates.incorrectAttribute , cdc, DOType`,
                message: `${dotype.getAttribute('id')}`,
            },
        ];
    return [];
}
async function missingMandatoryChildren(dotype, cdc) {
    const errors = [];
    const mandatorydas = (await getMandatoryDataAttribute(dotype, cdc)).map(DA => DA.getAttribute('name'));
    mandatorydas.forEach(mandatoryda => {
        if (!dotype.querySelector(`DA[name="${mandatoryda}"]`))
            errors.push({
                title: `validator.templates.mandatoryChild', Common Data Class, ${cdc}, DA, ${mandatoryda}`,
                message: `${dotype.getAttribute('id')}`,
            });
    });
    return errors;
}
export async function dOTypeValidator(dotype) {
    const errors = [];
    if (dotype.tagName !== 'DOType')
        return [];
    const cdc = dotype.getAttribute('cdc');
    if (!cdc)
        return [
            {
                title: `validator.templates.missingAttribute, cdc, ${dotype.tagName}`,
                message: `${dotype.getAttribute('id')}`,
            },
        ];
    const incorrectAttributes = await validateAttributes(dotype, cdc);
    const missingChildren = await missingMandatoryChildren(dotype, cdc);
    const issuesChildren = await validateChildren(dotype);
    return errors.concat(missingChildren, issuesChildren, incorrectAttributes);
}
//# sourceMappingURL=dotype.js.map