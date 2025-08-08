import { Tree, TreeSelection } from '@openenergytools/tree-grid';
export declare function getLNodeTypes(doc: XMLDocument | undefined): Element[];
export declare function getSelectedLNodeType(doc: XMLDocument, selected: string): Element | undefined;
export declare function isLNodeTypeReferenced(doc: XMLDocument, selectedLNodeTypeID: string | null): boolean;
export declare function filterSelection(tree: Tree, selection: TreeSelection): TreeSelection;
