import { fixture, expect, html, waitUntil } from '@open-wc/testing';
import { restore, spy } from 'sinon';
import TemplateGenerator from './oscd-template-generator.js';
import { lNodeSelection } from './oscd-template-generator.testfiles.js';
customElements.define('template-generator', TemplateGenerator);
export const sclDocString = `<?xml version="1.0" encoding="UTF-8"?>
<SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL">
  <DataTypeTemplates></DataTypeTemplates>
</SCL>`;
describe('TemplateGenerator', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html `<template-generator></template-generator>`);
    });
    it('displays no action button', () => { var _a; return expect((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).to.not.exist; });
    it('starts with LPHD selected', () => {
        expect(element).to.have.property('lNodeType', 'LPHD');
        expect(element).shadowDom.to.equalSnapshot();
    });
    it('displays a button to create a new DO', () => {
        var _a, _b;
        expect((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-outlined-button')).to.exist;
        expect((_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('md-outlined-button')).to.include.text('Add Data Object');
    });
    describe('dialog behavior', () => {
        it('opens a dialog on "Add Data Object" button click', async () => {
            var _a;
            expect(element.createDOdialog.open).to.be.false;
            const button = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-outlined-button');
            button.click();
            await waitUntil(() => element.createDOdialog.open);
            expect(element.createDOdialog.open).to.be.true;
        });
        it('validates the form fields', async () => {
            var _a, _b;
            const dialog = element.createDOdialog;
            dialog.show();
            await waitUntil(() => dialog.open);
            expect(dialog.cdcType.error).to.be.false;
            expect(dialog.doName.error).to.be.false;
            const confirmButton = (_a = dialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#confirm-btn');
            confirmButton.click();
            expect(dialog.cdcType.error).to.be.true;
            expect(dialog.cdcType.errorText).to.equal('Please select a common data class.');
            expect(dialog.doName.error).to.be.true;
            expect(dialog.doName.errorText).to.equal('Not a valid DO name.');
            const doNameInput = (_b = dialog.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#do-name');
            doNameInput.value = 'ValidDOName';
            doNameInput.dispatchEvent(new Event('input'));
            expect(dialog.doName.errorText).to.equal('');
        });
        it('creates a new DO on form submit', async () => {
            var _a, _b, _c;
            const dialog = element.createDOdialog;
            dialog.show();
            await waitUntil(() => dialog.open);
            const treeBefore = JSON.parse(JSON.stringify(element.treeUI.tree));
            const doNameInput = (_a = dialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#do-name');
            doNameInput.value = 'TestDO';
            doNameInput.dispatchEvent(new Event('input'));
            const cdcTypeSelect = (_b = dialog.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#cdc-type');
            cdcTypeSelect.value = 'ACD';
            cdcTypeSelect.dispatchEvent(new Event('input'));
            dialog.namespace.value = 'custom-namespace';
            const confirmButton = (_c = dialog.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#confirm-btn');
            confirmButton.click();
            await element.updateComplete;
            const treeAfter = JSON.parse(JSON.stringify(element.treeUI.tree));
            expect(treeAfter).to.not.deep.equal(treeBefore);
            expect(treeAfter.TestDO).to.have.property('type', 'ACD');
            expect(treeAfter.TestDO).to.have.property('tagName', 'DataObject');
            expect(treeAfter.TestDO).to.have.property('descID', '');
            expect(treeAfter.TestDO).to.have.property('presCond', 'O');
            expect(treeAfter.TestDO.children.dataNs.val).to.equal('custom-namespace');
            expect(treeAfter.TestDO.children.dataNs.mandatory).to.be.true;
        });
        it('displays a success notification when a Data Object is created', async () => {
            var _a, _b, _c;
            const dialog = element.createDOdialog;
            dialog.show();
            await element.updateComplete;
            const doNameInput = dialog.doName;
            doNameInput.value = 'TestDO';
            doNameInput.dispatchEvent(new Event('input'));
            const cdcTypeSelect = dialog.cdcType;
            cdcTypeSelect.value = 'ACD';
            cdcTypeSelect.dispatchEvent(new Event('input'));
            dialog.namespace.value = 'custom-namespace';
            const confirmButton = (_a = dialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#confirm-btn');
            confirmButton.click();
            await waitUntil(() => {
                var _a, _b, _c;
                const snackbar = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('oscd-snackbar');
                return (snackbar &&
                    ((_c = (_b = snackbar.shadowRoot) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.includes("Data Object 'TestDO' created successfully.")));
            });
            const snackbar = (_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('oscd-snackbar');
            expect(snackbar).to.exist;
            expect((_c = snackbar.shadowRoot) === null || _c === void 0 ? void 0 : _c.textContent).to.include("Data Object 'TestDO' created successfully.");
        });
        it('shows an error notification if Data Object creation fails', async () => {
            var _a, _b, _c;
            const dialog = element.createDOdialog;
            dialog.show();
            await waitUntil(() => dialog.open);
            dialog.doName.value = 'TestDO';
            dialog.cdcType.value = 'ACD';
            dialog.namespace.value = 'custom-namespace';
            const originalCreateDataObject = element['createDataObject'];
            element['createDataObject'] = () => {
                throw new Error('fail');
            };
            const confirmButton = (_a = dialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#confirm-btn');
            confirmButton.click();
            // Wait up to 5 seconds for the snackbar to appear
            await waitUntil(() => {
                var _a, _b, _c;
                const snackbar = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('oscd-snackbar');
                return (snackbar &&
                    ((_c = (_b = snackbar.shadowRoot) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.includes('Failed to create Data Object. Please try again.')));
            }, undefined, { timeout: 5000 });
            const snackbar = (_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('oscd-snackbar');
            expect(snackbar).to.exist;
            expect((_c = snackbar.shadowRoot) === null || _c === void 0 ? void 0 : _c.textContent).to.include('Failed to create Data Object. Please try again.');
            element['createDataObject'] = originalCreateDataObject;
        });
    });
    describe('given a loaded document', () => {
        let listener;
        afterEach(restore);
        beforeEach(async () => {
            listener = spy();
            element.addEventListener('oscd-edit-v2', listener);
            element.doc = new DOMParser().parseFromString(sclDocString, 'application/xml');
            await element.updateComplete;
        });
        it('displays an action button', () => {
            var _a;
            expect((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).to.exist;
        });
        it('adds Templates on action button click', async () => {
            var _a, _b;
            ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).click();
            const descriptionDialog = element.descriptionDialog;
            descriptionDialog.show();
            await descriptionDialog.updateComplete;
            descriptionDialog.description.value = 'Test Description';
            const confirmButton = (_b = descriptionDialog.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#confirm-button');
            confirmButton.click();
            /* expect five calls for
               - LPHD and its mandatory DOTypes
                 - PhyHealth and its mandatory EnumType
                   - stVal
                 - PhyNam
                 - Proxy
             */
            const edits = listener.args[0][0].detail.edit;
            expect(edits).to.have.lengthOf(5);
            edits.forEach((edit) => {
                var _a;
                expect(edit).to.have.property('parent', (_a = element.doc) === null || _a === void 0 ? void 0 : _a.querySelector('DataTypeTemplates'));
                expect(edit).to.have.property('node');
            });
        });
        it('adds missing DataTypeTemplates section on action button click', async () => {
            var _a, _b, _c, _d, _e;
            (_b = (_a = element.doc) === null || _a === void 0 ? void 0 : _a.querySelector('DataTypeTemplates')) === null || _b === void 0 ? void 0 : _b.remove();
            ((_c = element.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('md-fab')).click();
            const descriptionDialog = element.descriptionDialog;
            descriptionDialog.show();
            await descriptionDialog.updateComplete;
            descriptionDialog.description.value = 'Test Description';
            const confirmButton = (_d = descriptionDialog.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#confirm-button');
            confirmButton.click();
            // expect one more call for the DTT section
            const edits = listener.args[0][0].detail.edit;
            expect(edits).to.have.lengthOf(6);
            expect(edits[0]).to.have.property('parent', (_e = element.doc) === null || _e === void 0 ? void 0 : _e.documentElement);
            expect(edits[0])
                .property('node')
                .to.have.property('tagName', 'DataTypeTemplates');
        });
        it('adds LNodeTypes, DOTypes, DATypes, and EnumTypes as requested', async () => {
            var _a, _b, _c;
            element.lNodeType = 'LLN0';
            element.reset();
            await ((_a = element.lNodeTypeUI) === null || _a === void 0 ? void 0 : _a.updateComplete);
            await element.updateComplete;
            async function selectAll(column) {
                var _a;
                const item = (_a = element.treeUI.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`md-list:nth-of-type(${column + 1}) > md-list-item:first-of-type`);
                item === null || item === void 0 ? void 0 : item.click();
                await element.treeUI.updateComplete;
                await element.updateComplete;
            }
            await selectAll(1);
            await selectAll(2);
            await selectAll(3);
            await selectAll(4);
            await selectAll(5);
            ((_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('md-fab')).click();
            const descriptionDialog = element.descriptionDialog;
            descriptionDialog.show();
            await descriptionDialog.updateComplete;
            descriptionDialog.description.value = 'Test Description';
            const confirmButton = (_c = descriptionDialog.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#confirm-button');
            confirmButton.click();
            /* expect 30 calls for
              LNodeType LLN0
              DOType    Beh
                        Diag
                        GrRef
                        Health
                        InRef
                        LEDRs
                        Loc
                        LocKey
                        LocSta
                        MltLev
                        Mod
                        NamPlt
                        SwModKey
              DAType    origin
                        pulseConfig
                        SBOw
                        Oper
                        Cancel
                        SBOw
                        Oper
                        Cancel
              EnumType  stVal
                        subVal
                        orCat
                        cmdQual
                        ctlModel
                        sboClass
                        stVal
                        subVal
             */
            const edits = listener.args[0][0].detail.edit;
            expect(edits).to.have.lengthOf(30);
            const elms = edits.map((edit) => edit.node);
            expect(elms.filter((e) => e.tagName === 'LNodeType')).to.have.lengthOf(1);
            expect(elms.filter((e) => e.tagName === 'DOType')).to.have.lengthOf(13);
            expect(elms.filter((e) => e.tagName === 'DAType')).to.have.lengthOf(8);
            expect(elms.filter((e) => e.tagName === 'EnumType')).to.have.lengthOf(8);
        }).timeout(10000); // selecting 550 paths for a full LLN0 is rather slow.
        it('validates DOType inserts and IDs for multiple custom Data Objects', async () => {
            var _a, _b, _c, _d, _e;
            element.lNodeType = 'GGIO';
            element.reset();
            await ((_a = element.lNodeTypeUI) === null || _a === void 0 ? void 0 : _a.updateComplete);
            await element.updateComplete;
            expect(Object.keys(element.treeUI.tree)).to.have.lengthOf(38);
            const dataObjects = [
                { name: 'AnOut2', type: 'APC' },
                { name: 'CntVal2', type: 'BCR' },
                { name: 'DPCSO2', type: 'DPC' },
                { name: 'ISCSO2', type: 'INC' },
                { name: 'InRef2', type: 'ORG' },
                { name: 'SPCSO2', type: 'SPC' },
                { name: 'Ind2', type: 'SPS' },
            ];
            for (const { name, type } of dataObjects) {
                const dialog = element.createDOdialog;
                dialog.show();
                await waitUntil(() => dialog.open);
                const doNameInput = (_b = dialog.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#do-name');
                doNameInput.value = name;
                doNameInput.dispatchEvent(new Event('input'));
                const cdcTypeSelect = (_c = dialog.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#cdc-type');
                cdcTypeSelect.value = type;
                cdcTypeSelect.dispatchEvent(new Event('input'));
                const confirmButton = (_d = dialog.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#confirm-btn');
                confirmButton.click();
                await waitUntil(() => !dialog.open, undefined, { timeout: 2000 });
                await element.updateComplete;
                expect(element.treeUI.tree[name]).to.exist;
                expect(element.treeUI.tree[name]).to.have.property('type', type);
                expect(element.treeUI.tree[name]).to.have.property('tagName', 'DataObject');
                expect(element.treeUI.tree[name]).to.have.property('descID', '');
                expect(element.treeUI.tree[name]).to.have.property('presCond', 'O');
                dialog.close();
            }
            expect(Object.keys(element.treeUI.tree)).to.have.lengthOf(45);
            element.treeUI.selection = lNodeSelection;
            const descriptionDialog = element.descriptionDialog;
            descriptionDialog.show();
            await descriptionDialog.updateComplete;
            descriptionDialog.description.value = 'Test Description';
            const confirmButton = (_e = descriptionDialog.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('#confirm-button');
            confirmButton.click();
            await element.updateComplete;
            const inserts = listener.args[0][0].detail.edit;
            const insertedDOs = inserts.filter((insert) => insert.node.tagName === 'DOType');
            const expectedIds = [
                'Beh$oscd$_',
                ...dataObjects.map(({ name }) => `${name}$oscd$_`),
            ];
            insertedDOs.forEach((insert, idx) => {
                const id = insert.node.getAttribute('id');
                expect(id, `Insert ID at index ${idx} is incorrect`).to.include(expectedIds[idx]);
            });
        }).timeout(10000);
    });
});
//# sourceMappingURL=oscd-template-generator.spec.js.map