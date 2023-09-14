import { LitElement, TemplateResult } from 'lit';
import './communication/subnetwork-editor.js';
/** An editor [[`plugin`]] for editing the `Communication` section. */
export default class OscdCommunicationPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    /**
     * Creates the Communication Element and returns the created Element
     * @returns {Element} Communication `Element`
     */
    private createCommunication;
    /** Opens a [[`WizardDialog`]] for creating a new `SubNetwork` element. */
    private openCreateSubNetworkWizard;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
