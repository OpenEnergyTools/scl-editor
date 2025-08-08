import { expect, fixture, html } from '@open-wc/testing';
import { PreviewDialog } from './preview-dialog.js';
customElements.define('preview-dialog', PreviewDialog);
const tree = {
    DO1: {
        name: 'DO1',
        tagName: 'DataObject',
        type: 'SPS',
        descID: 'desc1',
        presCond: 'O',
        children: {
            DA1: {
                name: 'DA1',
                tagName: 'DataAttribute',
                type: 'BOOLEAN',
                descID: 'descDA1',
                presCond: 'M',
                children: {},
            },
        },
    },
    DO2: {
        name: 'DO2',
        tagName: 'DataObject',
        type: 'INS',
        descID: 'desc2',
        presCond: 'O',
        children: {},
    },
};
describe('PreviewDialog', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html `<preview-dialog></preview-dialog>`);
    });
    it('renders the selected LNodeType', async () => {
        element.lNodeType = 'LPHD';
        element.tree = tree;
        element.selection = {
            DO1: { DA1: {} },
            DO2: {},
        };
        expect(element.xmlContent).to.include('<LNodeType');
        expect(element.xmlContent).to.include('LPHD');
        expect(element.xmlContent).to.include('DO1');
        expect(element.xmlContent).to.include('DA1');
        expect(element.xmlContent).to.include('DO2');
    });
    it('shows a message if no data is selected', async () => {
        element.lNodeType = '';
        element.tree = undefined;
        element.selection = {};
        await element.updateComplete;
        expect(element.xmlContent).to.include('No data selected for preview');
    });
});
//# sourceMappingURL=preview-dialog.spec.js.map