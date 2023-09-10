import { LitElement, TemplateResult } from 'lit';
import './substation/zeroline-pane.js';
/** An editor [[`plugin`]] for editing the `Substation` section. */
export default class SubstationEditorPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
