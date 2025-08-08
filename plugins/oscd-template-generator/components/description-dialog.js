import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { LitElement, html, css } from 'lit';
import { property, query } from 'lit/decorators.js';
import { MdOutlinedTextField } from '@scopedelement/material-web/textfield/MdOutlinedTextField.js';
import { MdDialog } from '@scopedelement/material-web/dialog/dialog.js';
import { MdTextButton } from '@scopedelement/material-web/button/text-button.js';
export class DescriptionDialog extends ScopedElementsMixin(LitElement) {
    constructor() {
        super(...arguments);
        this.cdClasses = [];
    }
    get open() {
        var _a, _b;
        return (_b = (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.open) !== null && _b !== void 0 ? _b : false;
    }
    show() {
        var _a;
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.show();
    }
    close() {
        var _a;
        if (this.description) {
            this.description.errorText = '';
            this.description.error = false;
            this.description.value = '';
        }
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.close();
    }
    validate() {
        var _a;
        let isValid = true;
        if (!((_a = this.description) === null || _a === void 0 ? void 0 : _a.checkValidity())) {
            this.description.errorText = 'Not a valid description.';
            this.description.error = true;
            isValid = false;
        }
        else {
            this.description.errorText = '';
            this.description.error = false;
        }
        return isValid;
    }
    resetErrorText(e) {
        if (this.description.errorText && this.description.checkValidity()) {
            this.description.errorText = '';
            this.description.error = false;
        }
    }
    handleConfirm() {
        if (!this.validate())
            return;
        this.onConfirm(this.description.value);
        this.close();
    }
    render() {
        return html `
      <md-dialog @closed=${() => this.close()}>
        <div slot="headline">Add LNodeType Description</div>
        <div slot="content" class="dialog-content">
          <md-outlined-text-field
            id="lnode-type-description"
            label="LNodeType Description"
            required
            @input=${this.resetErrorText}
          ></md-outlined-text-field>
        </div>
        <div slot="actions">
          <md-text-button id="cancel-button" @click=${this.close} type="button"
            >Cancel</md-text-button
          >
          <md-text-button
            id="confirm-button"
            @click=${this.handleConfirm}
            type="button"
            >Add</md-text-button
          >
        </div>
      </md-dialog>
    `;
    }
}
DescriptionDialog.scopedElements = {
    'md-dialog': MdDialog,
    'md-text-button': MdTextButton,
    'md-outlined-text-field': MdOutlinedTextField,
};
DescriptionDialog.styles = css `
    md-text-button {
      text-transform: uppercase;
    }
    .dialog-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `;
__decorate([
    property({ type: Array })
], DescriptionDialog.prototype, "cdClasses", void 0);
__decorate([
    property({ type: Function })
], DescriptionDialog.prototype, "onConfirm", void 0);
__decorate([
    property({ type: Function })
], DescriptionDialog.prototype, "onCancel", void 0);
__decorate([
    query('md-dialog')
], DescriptionDialog.prototype, "dialog", void 0);
__decorate([
    query('#lnode-type-description')
], DescriptionDialog.prototype, "description", void 0);
//# sourceMappingURL=description-dialog.js.map