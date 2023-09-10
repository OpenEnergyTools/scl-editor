import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './conducting-equipment-editor.js';
import './function-editor.js';
import './general-equipment-editor.js';
import './l-node-editor.js';
export declare class LineEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element Line */
    element: Element;
    /** Whether `Function` and `LNode` are rendered */
    showfunctions: boolean;
    get header(): string;
    private renderConductingEquipments;
    private renderGeneralEquipments;
    private renderFunctions;
    private renderLNodes;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
