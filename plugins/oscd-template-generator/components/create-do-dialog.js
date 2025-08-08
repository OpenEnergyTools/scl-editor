import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { LitElement, html, css } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { MdSelectOption } from '@scopedelement/material-web/select/MdSelectOption.js';
import { MdFilledSelect } from '@scopedelement/material-web/select/MdOutlineSelect.js';
import { MdOutlinedTextField } from '@scopedelement/material-web/textfield/MdOutlinedTextField.js';
import { MdDialog } from '@scopedelement/material-web/dialog/dialog.js';
import { MdTextButton } from '@scopedelement/material-web/button/text-button.js';
import { debounce } from '../utils/debounce.js';
// eslint-disable-next-line no-shadow
var DONameStatus;
(function (DONameStatus) {
    DONameStatus["Ok"] = "Ok";
    DONameStatus["Taken"] = "Taken";
    DONameStatus["InvalidCDC"] = "InvalidCDC";
    DONameStatus["CustomNamespaceNeeded"] = "CustomNamespaceNeeded";
})(DONameStatus || (DONameStatus = {}));
const firstTextBlockRegExp = /[A-Za-z]+/;
export class CreateDataObjectDialog extends ScopedElementsMixin(LitElement) {
    constructor() {
        super(...arguments);
        this.cdClasses = [];
        this.tree = {};
        this.namespaceDefaultValue = 'User-Defined';
        this.isCustomNamespaceDisabled = true;
        this.onValueChange = debounce(() => {
            if (!this.cdcType.value || !this.doName.value) {
                this.isCustomNamespaceDisabled = true;
                return;
            }
            const status = this.getDONameStatus();
            this.setDONameStatusError(status);
            this.isCustomNamespaceDisabled =
                status !== DONameStatus.CustomNamespaceNeeded;
        }, 300);
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
        if (this.cdcType) {
            this.cdcType.errorText = '';
            this.cdcType.error = false;
            this.cdcType.reset();
        }
        if (this.doName) {
            this.doName.errorText = '';
            this.doName.error = false;
            this.doName.value = '';
        }
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.close();
    }
    getDONameStatus() {
        const doNameValue = this.doName.value;
        const cdcValue = this.cdcType.value;
        const isTaken = doNameValue in this.tree;
        if (isTaken) {
            return DONameStatus.Taken;
        }
        const multiTree = Object.keys(this.tree)
            .filter(key => this.tree[key].presCond === 'Omulti')
            .reduce((acc, key) => {
            acc[key] = this.tree[key];
            return acc;
        }, {});
        const firstTextBlockMatch = doNameValue.match(firstTextBlockRegExp);
        if (firstTextBlockMatch) {
            const firstTextBlock = firstTextBlockMatch[0];
            const matchingTreeNode = multiTree[`${firstTextBlock}1`];
            if (matchingTreeNode) {
                const doCDCsMatch = cdcValue === matchingTreeNode.type;
                if (!doCDCsMatch) {
                    return DONameStatus.InvalidCDC;
                }
                return DONameStatus.Ok;
            }
        }
        return DONameStatus.CustomNamespaceNeeded;
    }
    setDONameStatusError(status) {
        if (status === DONameStatus.Taken) {
            this.doName.errorText = 'DO name already in use';
            this.doName.error = true;
        }
        else {
            this.doName.errorText = '';
            this.doName.error = false;
        }
        if (status === DONameStatus.InvalidCDC) {
            this.cdcType.errorText = 'CDC type invalid for this DO';
            this.cdcType.error = true;
        }
        else {
            this.cdcType.errorText = '';
            this.cdcType.error = false;
        }
    }
    validate() {
        var _a, _b;
        let isValid = true;
        if (!((_a = this.cdcType) === null || _a === void 0 ? void 0 : _a.value)) {
            this.cdcType.errorText = 'Please select a common data class.';
            this.cdcType.error = true;
            isValid = false;
        }
        else {
            this.cdcType.errorText = '';
            this.cdcType.error = false;
        }
        if (!((_b = this.doName) === null || _b === void 0 ? void 0 : _b.checkValidity())) {
            this.doName.errorText = 'Not a valid DO name.';
            this.doName.error = true;
            isValid = false;
        }
        else {
            this.doName.errorText = '';
            this.doName.error = false;
        }
        const status = this.getDONameStatus();
        if (status === DONameStatus.CustomNamespaceNeeded) {
            if (!this.namespace.value) {
                this.namespace.errorText = 'Custom namespace required.';
                this.namespace.error = true;
                isValid = false;
            }
        }
        else if (status === DONameStatus.Taken ||
            status === DONameStatus.InvalidCDC) {
            this.setDONameStatusError(status);
            isValid = false;
        }
        return isValid;
    }
    /* eslint-disable class-methods-use-this */
    resetErrorText(e) {
        const target = e.target;
        if (target.errorText && target.checkValidity()) {
            target.errorText = '';
            target.error = false;
        }
    }
    handleConfirm() {
        var _a, _b, _c;
        if (!this.validate())
            return;
        const status = this.getDONameStatus();
        const namespace = status === DONameStatus.CustomNamespaceNeeded
            ? this.namespace.value
            : null;
        (_a = this.onConfirm) === null || _a === void 0 ? void 0 : _a.call(this, (_b = this.cdcType) === null || _b === void 0 ? void 0 : _b.value, (_c = this.doName) === null || _c === void 0 ? void 0 : _c.value, namespace);
        this.close();
    }
    render() {
        return html `
      <md-dialog @closed=${() => this.close()}>
        <div slot="headline">Add Data Object</div>
        <div slot="content" class="dialog-content">
          <md-outlined-select
            id="cdc-type"
            class="cdc-type"
            label="Common Data Class"
            required
            @input=${(e) => {
            this.resetErrorText(e);
            this.onValueChange();
        }}
          >
            ${this.cdClasses.map(cdClass => html `<md-select-option value=${cdClass}
                  >${cdClass}</md-select-option
                >`)}
          </md-outlined-select>
          <md-outlined-text-field
            id="do-name"
            label="Data Object Name"
            required
            maxlength="12"
            pattern="[A-Z][0-9A-Za-z]*"
            @input=${(e) => {
            this.resetErrorText(e);
            this.onValueChange();
        }}
          ></md-outlined-text-field>
          <md-outlined-text-field
            id="namespace"
            label="Namespace"
            placeholder=${this.namespaceDefaultValue}
            required
            .disabled=${this.isCustomNamespaceDisabled}
            @input=${this.resetErrorText}
          ></md-outlined-text-field>
        </div>
        <div slot="actions">
          <md-text-button id="cancel-btn" @click=${this.close} type="button"
            >Cancel</md-text-button
          >
          <md-text-button
            id="confirm-btn"
            @click=${this.handleConfirm}
            type="button"
            >Add</md-text-button
          >
        </div>
      </md-dialog>
    `;
    }
}
CreateDataObjectDialog.scopedElements = {
    'md-dialog': MdDialog,
    'md-text-button': MdTextButton,
    'md-outlined-select': MdFilledSelect,
    'md-select-option': MdSelectOption,
    'md-outlined-text-field': MdOutlinedTextField,
};
CreateDataObjectDialog.styles = css `
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
], CreateDataObjectDialog.prototype, "cdClasses", void 0);
__decorate([
    property()
], CreateDataObjectDialog.prototype, "tree", void 0);
__decorate([
    property({ type: Function })
], CreateDataObjectDialog.prototype, "onConfirm", void 0);
__decorate([
    query('md-dialog')
], CreateDataObjectDialog.prototype, "dialog", void 0);
__decorate([
    query('#cdc-type')
], CreateDataObjectDialog.prototype, "cdcType", void 0);
__decorate([
    query('#do-name')
], CreateDataObjectDialog.prototype, "doName", void 0);
__decorate([
    query('#namespace')
], CreateDataObjectDialog.prototype, "namespace", void 0);
__decorate([
    state()
], CreateDataObjectDialog.prototype, "isCustomNamespaceDisabled", void 0);
//# sourceMappingURL=create-do-dialog.js.map