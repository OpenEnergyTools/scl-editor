import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { spy } from 'sinon';
import { CreateDataObjectDialog } from './create-do-dialog.js';
customElements.define('create-data-object-dialog', CreateDataObjectDialog);
describe('CreateDataObjectDialog', () => {
    let element;
    let confirmButton;
    let cancelButton;
    let confirmSpy;
    const cdClasses = ['APC', 'ORG', 'SPS'];
    const tree = {
        AnOut1: {
            presCond: 'Omulti',
            type: 'APC',
        },
        Beh: {
            presCond: '0',
            type: 'ORG',
        },
        Ind1: {
            presCond: 'Omulti',
            type: 'SPS',
        },
    };
    beforeEach(async () => {
        var _a, _b;
        confirmSpy = spy();
        element = await fixture(html `<create-data-object-dialog
      .cdClasses=${cdClasses}
      .tree=${tree}
      .onConfirm=${confirmSpy}
    >
    </create-data-object-dialog>`);
        confirmButton = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#confirm-btn');
        cancelButton = (_b = element.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#cancel-btn');
    });
    it('should call onConfirm for valid form', () => {
        const type = 'APC';
        const doName = 'AnOut2';
        element.doName.value = doName;
        element.cdcType.value = type;
        confirmButton.click();
        expect(confirmSpy.callCount).to.equal(1);
        expect(confirmSpy.calledWith(type, doName)).to.be.true;
    });
    it('clears inputs and closes the dialog on reset button click', async () => {
        element.cdcType.value = 'ACD';
        element.doName.value = 'TestDO';
        cancelButton.click();
        await waitUntil(() => !element.open);
        expect(element.cdcType).to.have.property('value', '');
        expect(element.doName).to.have.property('value', '');
        expect(element.open).to.be.false;
    });
    describe('form validation', () => {
        it('should set DO name in use error', () => {
            element.cdcType.value = 'ORG';
            element.doName.value = 'Beh';
            confirmButton.click();
            expect(confirmSpy.callCount).to.equal(0);
            expect(element.doName.error).to.be.true;
            expect(element.doName.errorText).to.equal('DO name already in use');
        });
        it('should set invalid CDC error', () => {
            element.cdcType.value = 'ORG';
            element.doName.value = 'Ind2';
            confirmButton.click();
            expect(confirmSpy.callCount).to.equal(0);
            expect(element.cdcType.error).to.be.true;
            expect(element.cdcType.errorText).to.equal('CDC type invalid for this DO');
        });
        it('should set custom namespace needed error', async () => {
            element.cdcType.value = 'ORG';
            element.doName.value = 'NewDOName';
            await new Promise(r => setTimeout(r, 400));
            confirmButton.click();
            expect(confirmSpy.callCount).to.equal(0);
            expect(element.namespace.error).to.be.true;
            expect(element.namespace.errorText).to.equal('Custom namespace required.');
        });
    });
});
//# sourceMappingURL=create-do-dialog.spec.js.map