import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { LitElement, html, css } from 'lit';
import { query, property } from 'lit/decorators.js';
import { MdDialog } from '@scopedelement/material-web/dialog/dialog.js';
import { MdTextButton } from '@scopedelement/material-web/button/text-button.js';
import AceEditor from 'ace-custom-element';
import { insertSelectedLNodeType, } from '@openenergytools/scl-lib';
import { createBaseSCLDoc, serializeAndFormat } from '../foundation.js';
const aceTheme = `solarized_${localStorage.getItem('theme') || 'light'}`;
export class PreviewDialog extends ScopedElementsMixin(LitElement) {
    constructor() {
        super(...arguments);
        this.selection = {};
        this.tree = undefined;
        this.lNodeType = '';
    }
    get xmlContent() {
        if (!this.selection || !this.tree || !this.lNodeType) {
            return '<!-- No data selected for preview -->';
        }
        try {
            const doc = createBaseSCLDoc();
            const inserts = insertSelectedLNodeType(doc, this.selection, {
                class: this.lNodeType,
                data: this.tree,
            });
            inserts.forEach(insert => {
                if (insert.parent && insert.node) {
                    insert.parent.appendChild(insert.node);
                }
            });
            return serializeAndFormat(doc);
        }
        catch (error) {
            return `<!-- Error generating preview: ${error} -->`;
        }
    }
    show() {
        var _a;
        (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.show();
    }
    render() {
        return html `
      <md-dialog @closed=${() => { var _a; return (_a = this.dialog) === null || _a === void 0 ? void 0 : _a.close(); }}>
        <div slot="headline">Preview LNodeType</div>
        <div slot="content">
          <ace-editor
            mode="ace/mode/xml"
            theme=${`ace/theme/${aceTheme}`}
            wrap
            style="width: 80vw;"
            .value=${this.xmlContent}
            readonly
          ></ace-editor>
        </div>
        <div slot="actions">
          <md-text-button @click=${() => this.dialog.close()} type="button"
            >Close</md-text-button
          >
        </div>
      </md-dialog>
    `;
    }
}
PreviewDialog.scopedElements = {
    'md-dialog': MdDialog,
    'md-text-button': MdTextButton,
    'ace-editor': AceEditor,
};
PreviewDialog.styles = css `
    md-dialog {
      --md-dialog-container-max-width: 90vw;
      max-width: 90vw;
      max-height: 100vh;
    }
    [slot='content'] {
      padding: 12px;
    }
    ace-editor {
      height: calc(100vh - 240px);
      box-sizing: border-box;
    }
    md-text-button {
      text-transform: uppercase;
    }
  `;
__decorate([
    query('md-dialog')
], PreviewDialog.prototype, "dialog", void 0);
__decorate([
    query('ace-editor')
], PreviewDialog.prototype, "aceEditor", void 0);
__decorate([
    property({ type: Object })
], PreviewDialog.prototype, "selection", void 0);
__decorate([
    property({ type: Object })
], PreviewDialog.prototype, "tree", void 0);
__decorate([
    property({ type: String })
], PreviewDialog.prototype, "lNodeType", void 0);
//# sourceMappingURL=preview-dialog.js.map