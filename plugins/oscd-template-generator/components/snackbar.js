import { __decorate } from "tslib";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
export class Snackbar extends LitElement {
    constructor() {
        super(...arguments);
        this.message = '';
        this.type = 'success';
        this.visible = false;
    }
    updated(changed) {
        if (changed.has('message') && this.message) {
            this.visible = true;
            setTimeout(() => {
                this.visible = false;
            }, 3200);
        }
    }
    render() {
        if (!this.message)
            return html ``;
        return html `
      <div
        class="snackbar ${this.type} ${this.visible ? 'visible' : ''}"
        role="alert"
        aria-live="assertive"
      >
        <span class="snackbar-icon ${this.type}"
          >${this.type === 'success' ? '✔' : '✖'}</span
        >
        <span>${this.message}</span>
      </div>
    `;
    }
}
Snackbar.styles = css `
    .snackbar {
      position: fixed;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--snackbar-bg-color, #323232);
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      font-family: var(--oscd-theme-text-font, 'Roboto');
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .snackbar.visible {
      opacity: 1;
    }
    .snackbar.success {
      --snackbar-bg-color: #323232;
    }
    .snackbar.error {
      --snackbar-bg-color: #d32f2f;
    }
    .snackbar-icon {
      font-size: 16px;
    }
    .snackbar-icon.success {
      color: #4caf50;
    }
    .snackbar-icon.error {
      color: #ffcccb;
    }
  `;
__decorate([
    property({ type: String })
], Snackbar.prototype, "message", void 0);
__decorate([
    property({ type: String })
], Snackbar.prototype, "type", void 0);
__decorate([
    state()
], Snackbar.prototype, "visible", void 0);
//# sourceMappingURL=snackbar.js.map