import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import '../substation/eq-function-editor.js';
import '../substation/l-node-editor.js';
export declare class GeneralEquipmentEditor extends LitElement {
    doc: XMLDocument;
    editCount: number;
    element: Element;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get header(): string;
    private renderLNodes;
    private renderEqFunctions;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
