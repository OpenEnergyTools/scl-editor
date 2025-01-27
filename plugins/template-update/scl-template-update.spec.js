/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-expressions */
import { fixture, expect, html } from '@open-wc/testing';
import { restore, spy } from 'sinon';
import '@openenergytools/open-scd-core/open-scd.js';
import { newOpenEvent } from '@openenergytools/open-scd-core';
import { extension, lln0Selection, mmxuExceptSelection, mmxuSelection, nsdSpeced, } from './scl-template-update.testfiles.js';
import './scl-template-update.js';
const plugins = {
    editor: [
        {
            name: 'Update Template',
            translations: {
                de: 'Update Template',
            },
            icon: 'edit',
            active: true,
            requireDoc: false,
            src: '/dist/scl-template-update.js',
        },
    ],
};
describe('NsdTemplateUpdater', () => {
    let openSCD;
    let element;
    beforeEach(async () => {
        var _a;
        openSCD = await fixture(html `<open-scd plugins="${JSON.stringify(plugins)}"></open-scd>`);
        await new Promise(res => {
            setTimeout(res, 200);
        });
        element = (_a = openSCD.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('oscd-p837a28e71799d7bc');
    });
    it('shows notification without loaded doc', () => {
        var _a, _b, _c;
        expect((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('h1')).to.exist;
        expect((_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('tree-grid')).to.not.exist;
        expect((_c = element.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('md-fab')).to.not.exist;
    });
    describe('given a nsd speced document', () => {
        let listener;
        afterEach(restore);
        beforeEach(async () => {
            listener = spy();
            openSCD.addEventListener('oscd-edit-v2', listener);
            const doc = new DOMParser().parseFromString(nsdSpeced, 'application/xml');
            openSCD.dispatchEvent(newOpenEvent(doc, 'SomeDoc'));
            await new Promise(res => {
                setTimeout(res, 200);
            });
        });
        it('displays an action button', () => { var _a; return expect((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).to.exist; });
        it('updates MMXU on action button click', async () => {
            var _a;
            element.lNodeTypeUI.value = `MMXU$oscd$_c53e78191fabefa3`;
            element.onLNodeTypeSelect();
            await element.updateComplete;
            element.treeUI.selection = mmxuSelection;
            await element.updateComplete;
            ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).click();
            await new Promise(res => {
                setTimeout(res, 200);
            });
            const inserts = listener.args[0][0].detail.edit;
            const removes = listener.args[1][0].detail.edit;
            expect(inserts).to.have.lengthOf(5);
            expect(removes).to.have.lengthOf(2);
            expect(inserts[0].node.getAttribute('id')).to.equal('MMXU$oscd$_b96484e663b92760');
            expect(inserts[1].node.getAttribute('id')).to.equal('Beh$oscd$_954939784529ca3d');
            expect(inserts[2].node.getAttribute('id')).to.equal('phsB$oscd$_65ee65af9248ae5d');
            expect(inserts[3].node.getAttribute('id')).to.equal('A$oscd$_ad714f2a7845e863');
            expect(inserts[4].node.getAttribute('id')).to.equal('stVal$oscd$_2ff6286b1710bcc1');
            expect(removes[0].node.getAttribute('id')).to.equal('MMXU$oscd$_c53e78191fabefa3');
            expect(removes[1].node.getAttribute('id')).to.equal('A$oscd$_41824603f63b26ac');
        });
        it('updates LLN0 on action button click', async () => {
            var _a;
            element.lNodeTypeUI.value = `LLN0$oscd$_85c7ffbe25d80e63`;
            element.onLNodeTypeSelect();
            await element.updateComplete;
            element.treeUI.selection = lln0Selection; // change selection
            await element.updateComplete;
            ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).click();
            await new Promise(res => {
                setTimeout(res, 200);
            });
            const inserts = listener.args[0][0].detail.edit;
            const removes = listener.args[1][0].detail.edit;
            expect(inserts).to.have.lengthOf(9);
            expect(removes).to.have.lengthOf(5);
            expect(inserts[0].node.getAttribute('id')).to.equal('LLN0$oscd$_70973585614987f4');
            expect(inserts[1].node.getAttribute('id')).to.equal('Mod$oscd$_ca3ec0d8276151d7');
            expect(inserts[2].node.getAttribute('id')).to.equal('origin$oscd$_8c586402c5f97d31');
            expect(inserts[3].node.getAttribute('id')).to.equal('SBOw$oscd$_59a179d1c87265eb');
            expect(inserts[4].node.getAttribute('id')).to.equal('origin$oscd$_a128160f5df91cfa');
            expect(inserts[5].node.getAttribute('id')).to.equal('Oper$oscd$_1c003786901c1473');
            expect(inserts[6].node.getAttribute('id')).to.equal('ctlModel$oscd$_40d881a91fe5c769');
            expect(inserts[7].node.getAttribute('id')).to.equal('orCat$oscd$_677850ccf85aee7a');
            expect(inserts[8].node.getAttribute('id')).to.equal('orCat$oscd$_8f842fc78e972b98');
            expect(removes[0].node.getAttribute('id')).to.equal('LLN0$oscd$_85c7ffbe25d80e63');
            expect(removes[1].node.getAttribute('id')).to.equal('Mod$oscd$_d63dba598ea9104c');
            expect(removes[2].node.getAttribute('id')).to.equal('Oper$oscd$_4974a5c5ec541314');
            expect(removes[3].node.getAttribute('id')).to.equal('SBOw$oscd$_4974a5c5ec541314');
            expect(removes[4].node.getAttribute('id')).to.equal('ctlModel$oscd$_f80264355419aeff');
        });
        it('does not update with same selection', async () => {
            var _a;
            element.lNodeTypeUI.value = `LLN0$oscd$_85c7ffbe25d80e63`;
            element.onLNodeTypeSelect();
            await element.updateComplete;
            ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).click();
            await new Promise(res => {
                setTimeout(res, 200);
            });
            expect(listener).to.not.have.been.called;
        });
    });
    describe('given a non nsd speced document', () => {
        let listener;
        afterEach(restore);
        beforeEach(async () => {
            listener = spy();
            openSCD.addEventListener('oscd-edit-v2', listener);
            const doc = new DOMParser().parseFromString(extension, 'application/xml');
            openSCD.dispatchEvent(newOpenEvent(doc, 'SomeDoc'));
            await new Promise(res => {
                setTimeout(res, 200);
            });
        });
        it('does not load non NSD ln classes', async () => {
            var _a;
            element.lNodeTypeUI.value = `invalidLnClass`;
            element.onLNodeTypeSelect();
            await new Promise(res => {
                setTimeout(res, 50);
            });
            expect(JSON.stringify(element.treeUI.tree)).to.equal('{}');
            expect((_a = element.warningDialog) === null || _a === void 0 ? void 0 : _a.getAttribute('open')).to.not.be.null;
        });
        it('notifies with LNodeType is referenced', async () => {
            var _a, _b, _c;
            element.lNodeTypeUI.value = `LLN0$oscd$_85c7ffbe25d80e63`;
            element.onLNodeTypeSelect();
            await new Promise(res => {
                setTimeout(res, 200);
            });
            expect((_a = element.warningDialog) === null || _a === void 0 ? void 0 : _a.getAttribute('open')).to.not.be.null;
            expect((_c = (_b = element.warningDialog) === null || _b === void 0 ? void 0 : _b.querySelector('form')) === null || _c === void 0 ? void 0 : _c.textContent).to.include(`The selected logical node type is referenced. This plugin should be used durig specification only.`);
        });
        it('updates MMXU on action button click', async () => {
            var _a, _b;
            element.lNodeTypeUI.value = `MMXU$oscd$_c53e78191fabefa3`;
            element.onLNodeTypeSelect();
            await element.updateComplete;
            element.treeUI.selection = mmxuExceptSelection;
            await element.updateComplete;
            ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('md-fab')).click();
            await new Promise(res => {
                setTimeout(res, 200);
            });
            ((_b = element.choiceDialog) === null || _b === void 0 ? void 0 : _b.querySelector('.button.proceed')).click();
            await new Promise(res => {
                setTimeout(res, 200);
            });
            const inserts = listener.args[0][0].detail.edit;
            const removes = listener.args[1][0].detail.edit;
            expect(inserts).to.have.lengthOf(3);
            expect(removes).to.have.lengthOf(1);
            expect(inserts[0].node.getAttribute('id')).to.equal('MMXU$oscd$_e244ae9c80495691');
            expect(inserts[1].node.getAttribute('id')).to.equal('Beh$oscd$_954939784529ca3d');
            expect(inserts[2].node.getAttribute('id')).to.equal('stVal$oscd$_2ff6286b1710bcc1');
            expect(removes[0].node.getAttribute('id')).to.equal('MMXU$oscd$_c53e78191fabefa3');
        });
    });
});
//# sourceMappingURL=scl-template-update.spec.js.map