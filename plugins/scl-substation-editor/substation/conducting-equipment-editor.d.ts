import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './eq-function-editor.js';
import './l-node-editor.js';
import './sub-equipment-editor.js';
/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
export declare class ConductingEquipmentEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** SCL element ConductingEquipment */
    element: Element;
    /** ConductingEquipment name attribute */
    get name(): string;
    /** Whether `EqFunction`, `SubEqFunction` and `SubEquipment` are rendered */
    showfunctions: boolean;
    private renderLNodes;
    renderEqFunctions(): TemplateResult;
    private renderSubEquipments;
    renderContentPane(): TemplateResult;
    renderContentIcon(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
