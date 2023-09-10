import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './conducting-equipment-editor.js';
import './function-editor.js';
import './general-equipment-editor.js';
import './l-node-editor.js';
import './line-editor.js';
import './substation-editor.js';
export declare class ProcessEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element Process */
    element: Element;
    /** Whether `Function` and `LNode` are rendered */
    showfunctions: boolean;
    get header(): string;
    private renderConductingEquipments;
    private renderGeneralEquipments;
    private renderLines;
    private renderSubstations;
    private renderProcesses;
    private renderFunctions;
    private renderLNodes;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
