import { TemplateResult } from 'lit';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './tapchanger-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
export declare class TransformerWindingEditor extends BaseSubstationElementEditor {
    /** TransformerWinding name attribute */
    get label(): string;
    private renderTapChanger;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
