/**
 * Get enum values for a given selection and node
 * Returns the enum values that should be added to the selection
 */
function getEnumValues(node) {
    const enumValues = {};
    if (node.typeKind === 'ENUMERATED' && node.children) {
        Object.values(node.children).forEach((value) => {
            if (value.name) {
                enumValues[value.name] = {};
            }
        });
    }
    return enumValues;
}
/**
 * Adds missing enum values from the node to the selection and returns the updated selection
 */
function selectEnumValues(sel, node) {
    const enumValues = getEnumValues(node);
    const newSel = { ...sel };
    for (const [key, value] of Object.entries(enumValues)) {
        if (!newSel[key]) {
            newSel[key] = value;
        }
    }
    return newSel;
}
/**
 * Returns selection of mandatory enumerated nodes if they don't exist.
 */
function selectEnumNode(selection, node) {
    if (!node.children)
        return selection;
    const newSel = { ...selection };
    for (const [key, childNode] of Object.entries(node.children)) {
        if (childNode.typeKind === 'ENUMERATED' &&
            childNode.mandatory &&
            !newSel[key]) {
            newSel[key] = {};
        }
    }
    return newSel;
}
/**
 * Get the selection object by navigating through a specific path in the tree selection structure
 */
export function getSelectionByPath(selection, path) {
    let currentSelection = selection;
    for (const segment of path) {
        currentSelection = currentSelection[segment] || {};
    }
    return currentSelection;
}
/**
 * Returns selection of mandatory enums and fills them with values recursively.
 */
export function processEnums(selection, node) {
    let newSel = selectEnumNode(selection, node);
    if (node.typeKind === 'ENUMERATED') {
        newSel = selectEnumValues(newSel, node);
    }
    if (node.children) {
        for (const [key, childSelection] of Object.entries(newSel)) {
            const childNode = node.children[key];
            if (childNode) {
                newSel[key] = processEnums(childSelection, childNode);
            }
        }
    }
    return newSel;
}
function formatXml(xml) {
    let formatted = '';
    let indent = '';
    const tab = '\t';
    xml.split(/>\s*</).forEach(node => {
        if (node.match(/^\/\w/))
            indent = indent.substring(tab.length);
        formatted += `${indent}<${node}>\r\n`;
        if (node.match(/^<?\w[^>]*[^/]$/))
            indent += tab;
    });
    return formatted.substring(1, formatted.length - 3);
}
export function serializeAndFormat(doc) {
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(doc);
    return formatXml(xmlString);
}
export function createBaseSCLDoc() {
    return new DOMParser().parseFromString(`<?xml version="1.0" encoding="UTF-8"?>
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="5">
        <Header id="LNodeTypePreview"/>
      </SCL>`, 'application/xml');
}
//# sourceMappingURL=foundation.js.map