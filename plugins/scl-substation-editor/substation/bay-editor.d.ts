import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './conducting-equipment-editor.js';
import './general-equipment-editor.js';
import './powertransformer-editor.js';
/** [[`SubstationEditor`]] subeditor for a `Bay` element. */
export declare class BayEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    element: Element;
    /** Whether `Function` and `SubFunction` are rendered */
    showfunctions: boolean;
    get header(): string;
    private renderLNodes;
    renderFunctions(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
