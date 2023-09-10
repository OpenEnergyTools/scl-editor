import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './eq-function-editor.js';
import './l-node-editor.js';
import './sub-equipment-editor.js';
export declare class TapChangerEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element TransformerWinding */
    element: Element;
    /** Whether `EqFunction` and `SubEquipment` are rendered */
    showfunctions: boolean;
    get header(): string;
    private renderLNodes;
    private renderEqFunctions;
    private renderSubEquipments;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
