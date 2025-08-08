import { expect } from '@open-wc/testing';
import { getSelectionByPath, processEnums, serializeAndFormat, } from './foundation.js';
describe('foundation.js', () => {
    describe('getSelectionByPath', () => {
        it('should navigate to nested selection object', () => {
            const selection = {
                dataObject1: {
                    child1: { grandchild: {} },
                },
            };
            const result = getSelectionByPath(selection, ['dataObject1', 'child1']);
            expect(result).to.deep.equal({ grandchild: {} });
        });
        it('should return empty object for non-existent path', () => {
            const result = getSelectionByPath({}, ['nonExistent']);
            expect(result).to.deep.equal({});
        });
    });
    describe('processEnums', () => {
        it('should return mandatory enumerated nodes', () => {
            const selection = {};
            const node = {
                children: {
                    mandatoryEnum: {
                        typeKind: 'ENUMERATED',
                        mandatory: true,
                        children: {
                            option1: { name: 'option1' },
                        },
                    },
                    optionalEnum: {
                        typeKind: 'ENUMERATED',
                        mandatory: false,
                    },
                },
            };
            const result = processEnums(selection, node);
            expect(result).to.have.property('mandatoryEnum');
            expect(result).to.not.have.property('optionalEnum');
        });
        it('should preserve existing selections and add enum values', () => {
            const selection = {
                myEnum: { userSelected: {} },
            };
            const node = {
                children: {
                    myEnum: {
                        typeKind: 'ENUMERATED',
                        children: {
                            option1: { name: 'option1' },
                        },
                    },
                },
            };
            const result = processEnums(selection, node);
            expect(result.myEnum).to.have.property('userSelected');
            expect(result.myEnum).to.have.property('option1');
        });
        it('should process nested structures recursively', () => {
            const selection = { parent: { child: {} } };
            const node = {
                children: {
                    parent: {
                        children: {
                            child: {
                                children: {
                                    deepEnum: {
                                        typeKind: 'ENUMERATED',
                                        mandatory: true,
                                    },
                                },
                            },
                        },
                    },
                },
            };
            const result = processEnums(selection, node);
            expect(result.parent.child).to.have.property('deepEnum');
        });
    });
    describe('serializeAndFormat', () => {
        const doc = new DOMParser().parseFromString(`<?xml version="1.0" encoding="UTF-8"?>
      <SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="5">
        <Header id="LNodeTypePreview"/>
        <DataTypeTemplates>
          <LNodeType lnClass="LPHD" id="LPHD$oscd$_f79cbe3f4e9088ea"/>
        </DataTypeTemplates>
      </SCL>`, 'application/xml');
        it('should serialize and format an XML document', () => {
            const result = serializeAndFormat(doc);
            expect(result).to.match(/^<\?xml version="1.0" encoding="UTF-8"\?>/);
            expect(result).to.match(/<SCL[\s\S]*>/);
            expect(result).to.match(/^\t<Header id="LNodeTypePreview"\/>/m);
            expect(result).to.match(/^\t<DataTypeTemplates>/m);
            expect(result).to.match(/^\t\t<LNodeType lnClass="LPHD" id="LPHD\$oscd\$_f79cbe3f4e9088ea"\/>/m);
            expect(result).to.match(/^\t<\/DataTypeTemplates>/m);
            expect(result).to.match(/^<\/SCL>$/m);
        });
    });
});
//# sourceMappingURL=foundation.spec.js.map