import { LitElement, TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './eq-sub-function-editor.js';
import './general-equipment-editor.js';
/** Pane rendering `EqFunction` element with its children */
export declare class EqFunctionEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    /** The edited `EqFunction` element */
    element: Element;
    showfunctions: boolean;
    private get header();
    private renderLNodes;
    private renderEqSubFunctions;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
