import { __decorate } from "tslib";
/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, css, html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-icon';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-list';
import '@material/mwc-snackbar';
import '@material/mwc-switch';
import { validateSchema } from './schema/validateSchema.js';
import { validateTemplates } from './template/validateTemplates.js';
/** An editor [[`plugin`]] to configure validators and display their issue centrally */
export default class SclValidatingPlugin extends LitElement {
    async run() {
        this.dialog.show();
    }
    async validateSchema() {
        this.schemaIssues.length = 0;
        await this.requestUpdate('schemaIssues');
        const result = await validateSchema(this.doc, this.docName);
        this.schemaIssues = result || [{ title: 'Invalid Schema!' }];
        this.waitForSchemaRun = false;
        if (this.schemaIssues.length) {
            this.alertSchemaIssue.labelText =
                this.schemaIssues[this.schemaIssues.length - 1].title;
            this.alertSchemaIssue.show();
        }
        this.requestUpdate('schemaIssues');
    }
    async validateTemplates() {
        this.templateIssues.length = 0;
        this.waitForTemplateRun = false;
        for await (const issue of validateTemplates(this.doc)) {
            this.templateIssues.push(...issue);
            this.requestUpdate('templateIssues');
        }
        if (this.templateIssues.length) {
            this.alertTemplateIssue.labelText =
                this.templateIssues[this.templateIssues.length - 1].title;
            this.alertTemplateIssue.show();
        }
        this.requestUpdate('templateIssues');
    }
    async autoValidate() {
        if (!this.doc)
            await this.requestUpdate();
        if (this.autoValidateTemplate)
            this.validateTemplates();
        if (this.autoValidateSchema)
            this.validateSchema();
    }
    async performUpdate() {
        // eslint-disable-next-line no-promise-executor-return
        await new Promise(resolve => requestAnimationFrame(() => resolve()));
        super.performUpdate();
    }
    constructor() {
        super();
        /** SCL change indicator */
        this.editCount = 0;
        /** Issues return by the schema validator */
        this.schemaIssues = [];
        /** Issues returned by the template validator */
        this.templateIssues = [];
        /** Whether schema validator has had the initial run */
        this.waitForSchemaRun = true;
        /** Whether template validator has had the initial run */
        this.waitForTemplateRun = true;
        /** Whether schema validator shall run after each change to the doc */
        this.autoValidateSchema = true;
        /** Whether template validator shall run after each change to the doc */
        this.autoValidateTemplate = false;
        window.addEventListener('oscd-edit', this.autoValidate.bind(this));
        window.addEventListener('oscd-open', this.autoValidate.bind(this));
    }
    // eslint-disable-next-line class-methods-use-this
    renderValidatorsIssues(issues) {
        if (issues.length === 0)
            return [html `<li divider padded role="separator"></li>`];
        return [
            html `<li divider padded role="separator"></li>`,
            ...issues.map(issue => html ` <abbr title="${`${issue.title}\n${issue.message}`}"
          ><mwc-list-item ?twoline=${!!issue.message}>
            <span> ${issue.title}</span>
            <span slot="secondary">${issue.message}</span>
          </mwc-list-item></abbr
        >`),
        ];
    }
    renderTemplateValidator() {
        return html `<div style="display: flex; flex-direction: row">
        <div style="display: flex; flex-direction: column; flex: auto;">
          <div style="display: flex; flex-direction: row">
            <h3 style="flex:auto">
              ${`Template issues (${this.waitForTemplateRun
            ? 'Run template validator'
            : this.templateIssues.length})`}
            </h3>
            <mwc-icon-button-toggle
              class="expand template"
              onIcon="expand_less"
              offIcon="expand_more"
              @click="${() => this.requestUpdate()}"
            ></mwc-icon-button-toggle>
          </div>
          <div style="display: flex; flex-direction: row">
            <div style="display:flex; align-items:center; flex:auto">
              <mwc-button
                style="float: right"
                label="${`${this.waitForTemplateRun ? '' : 'Re-'}Run manual validation`}"
                @click="${this.validateTemplates}"
              ></mwc-button>
            </div>
            <div style="display: flex">
              <mwc-formfield label="Auto validate on change" alignEnd>
                <mwc-switch
                  @click="${() => {
            this.autoValidateTemplate = !this.autoValidateTemplate;
        }}"
                ></mwc-switch>
              </mwc-formfield>
            </div>
          </div>
        </div>
      </div>
      ${this.expandTemplate && this.expandTemplate.on
            ? html `<mwc-list>
            <li divider padded role="separator"></li>
          </mwc-list>`
            : html `<mwc-list id="content" wrapFocus
            >${this.renderValidatorsIssues(this.templateIssues)}</mwc-list
          >`}`;
    }
    renderSchemaValidator() {
        return html `<div style="display: flex; flex-direction: row">
        <div style="display: flex; flex-direction: column; flex: auto;">
          <div style="display: flex; flex-direction: row">
            <h3 style="flex:auto">
              ${`Schema issues (${this.waitForSchemaRun
            ? 'Run schema validator'
            : this.schemaIssues.length})`}
            </h3>
            <mwc-icon-button-toggle
              class="expand schema"
              onIcon="expand_less"
              offIcon="expand_more"
              @click="${() => this.requestUpdate()}"
            ></mwc-icon-button-toggle>
          </div>
          <div style="display: flex; flex-direction: row">
            <div style="display:flex; align-items:center; flex:auto">
              <mwc-button
                style="float: right"
                label="${`${this.waitForSchemaRun ? '' : 'Re-'}Run manual validation`}"
                @click="${this.validateSchema}"
              ></mwc-button>
            </div>
            <div style="display: flex">
              <mwc-formfield label="Auto validate on change" alignEnd>
                <mwc-switch
                  selected
                  @click="${() => {
            this.autoValidateSchema = !this.autoValidateSchema;
        }}"
                ></mwc-switch>
              </mwc-formfield>
            </div>
          </div>
        </div>
      </div>
      ${this.expandSchema && this.expandSchema.on
            ? html `<mwc-list>
            <li divider padded role="separator"></li>
          </mwc-list>`
            : html `<mwc-list id="content" wrapFocus
            >${this.renderValidatorsIssues(this.schemaIssues)}</mwc-list
          >`}`;
    }
    render() {
        if (!this.doc)
            return html `<mwc-dialog
        ><div>No SCL file loaded, yet!</div>
        <mwc-button
          label="Cancel"
          slot="secondaryAction"
          dialogAction="close"
        ></mwc-button>
      </mwc-dialog>`;
        return html `<mwc-dialog>
        ${this.renderSchemaValidator()}${this.renderTemplateValidator()}
        <mwc-button
          label="Cancel"
          slot="secondaryAction"
          dialogAction="close"
        ></mwc-button>
      </mwc-dialog>
      <mwc-snackbar id="alertSchemaIssue" .timeoutMs=${5000}>
        <mwc-button slot="action" @click=${() => this.dialog.show()}
          >DETAIL</mwc-button
        > </mwc-snackbar
      ><mwc-snackbar id="alertTemplateIssue" .timeoutMs=${4000}>
        <mwc-button slot="action" @click=${() => this.dialog.show()}
          >DETAIL</mwc-button
        >
      </mwc-snackbar>`;
    }
}
SclValidatingPlugin.styles = css `
    mwc-dialog {
      --mdc-dialog-max-width: 90vw;
      --mdc-dialog-min-width: 50vw;
    }
  `;
__decorate([
    property({ attribute: false })
], SclValidatingPlugin.prototype, "doc", void 0);
__decorate([
    property()
], SclValidatingPlugin.prototype, "docName", void 0);
__decorate([
    property({ type: Number })
], SclValidatingPlugin.prototype, "editCount", void 0);
__decorate([
    state()
], SclValidatingPlugin.prototype, "schemaIssues", void 0);
__decorate([
    state()
], SclValidatingPlugin.prototype, "templateIssues", void 0);
__decorate([
    state()
], SclValidatingPlugin.prototype, "waitForSchemaRun", void 0);
__decorate([
    state()
], SclValidatingPlugin.prototype, "waitForTemplateRun", void 0);
__decorate([
    state()
], SclValidatingPlugin.prototype, "autoValidateSchema", void 0);
__decorate([
    state()
], SclValidatingPlugin.prototype, "autoValidateTemplate", void 0);
__decorate([
    query('mwc-dialog')
], SclValidatingPlugin.prototype, "dialog", void 0);
__decorate([
    query('.expand.template')
], SclValidatingPlugin.prototype, "expandTemplate", void 0);
__decorate([
    query('.expand.schema')
], SclValidatingPlugin.prototype, "expandSchema", void 0);
__decorate([
    query('#alertSchemaIssue')
], SclValidatingPlugin.prototype, "alertSchemaIssue", void 0);
__decorate([
    query('#alertTemplateIssue')
], SclValidatingPlugin.prototype, "alertTemplateIssue", void 0);
//# sourceMappingURL=scl-validating.js.map