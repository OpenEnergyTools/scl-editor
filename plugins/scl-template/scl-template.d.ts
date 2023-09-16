import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-icon-button';
import '@openscd/oscd-filtered-list';
import './foundation/components/oscd-textfield.js';
/** An editor [[`plugin`]] for editing the `DataTypeTemplates` section. */
export default class TemplatesPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    selectedLNodeType: Element | null | undefined;
    selectedDOType: Element | null | undefined;
    selectedDAType: Element | null | undefined;
    selectedEnumType: Element | null | undefined;
    private openEnumTypeWizard;
    private openDATypeWizard;
    private openDOTypeWizard;
    private selectReferencedChild;
    private openLNodeTypeWizard;
    private renderEnumTypeList;
    private renderDATypeList;
    private renderDOTypeList;
    private renderLNodeTypeList;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
