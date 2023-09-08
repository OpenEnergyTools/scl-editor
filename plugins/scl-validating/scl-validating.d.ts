import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-icon';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-list';
import '@material/mwc-snackbar';
import '@material/mwc-switch';
import type { Dialog } from '@material/mwc-dialog';
import type { IconButtonToggle } from '@material/mwc-icon-button-toggle';
import type { Snackbar } from '@material/mwc-snackbar';
import { IssueDetail } from './foundation/utils.js';
/** An editor [[`plugin`]] to configure validators and display their issue centrally */
export default class SclValidatingPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The name of the document being edited */
    docName: string;
    /** SCL change indicator */
    editCount: number;
    /** Issues return by the schema validator */
    schemaIssues: IssueDetail[];
    /** Issues returned by the template validator */
    templateIssues: IssueDetail[];
    /** Whether schema validator has had the initial run */
    waitForSchemaRun: boolean;
    /** Whether template validator has had the initial run */
    waitForTemplateRun: boolean;
    /** Whether schema validator shall run after each change to the doc */
    autoValidateSchema: boolean;
    /** Whether template validator shall run after each change to the doc */
    autoValidateTemplate: boolean;
    dialog: Dialog;
    expandTemplate: IconButtonToggle;
    expandSchema: IconButtonToggle;
    alertSchemaIssue: Snackbar;
    alertTemplateIssue: Snackbar;
    run(): Promise<void>;
    private validateSchema;
    private validateTemplates;
    private autoValidate;
    performUpdate(): Promise<void>;
    constructor();
    private renderValidatorsIssues;
    private renderTemplateValidator;
    private renderSchemaValidator;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
