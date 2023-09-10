import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './l-node-editor.js';
import './eq-function-editor.js';
/** [[`SubstationEditor`]] subeditor for a child-less `SubEquipment` element. */
export declare class SubEquipmentEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element SubEquipment */
    element: Element;
    /** SubEquipment name attribute */
    get label(): string;
    private renderLNodes;
    private renderEqFunctions;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
