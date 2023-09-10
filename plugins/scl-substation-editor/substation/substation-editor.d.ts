import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './l-node-editor.js';
import './function-editor.js';
import './powertransformer-editor.js';
import './voltage-level-editor.js';
/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
export declare class SubstationEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `Element`, a common property of all Substation subeditors. */
    element: Element;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get header(): string;
    private renderLNodes;
    renderFunctions(): TemplateResult;
    renderPowerTransformerContainer(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
