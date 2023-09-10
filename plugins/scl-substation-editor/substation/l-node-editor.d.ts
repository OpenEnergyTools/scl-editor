import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon';
import '@openscd/oscd-action-icon';
export declare function getLNodeIcon(lNode: Element): TemplateResult;
/** Pane rendering `LNode` element with its children */
export declare class LNodeEditor extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    /** The edited `LNode` element */
    element: Element;
    private get header();
    private get missingIedReference();
    render(): TemplateResult;
}
