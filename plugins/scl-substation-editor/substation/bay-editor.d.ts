import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './power-transformer-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** [[`SubstationEditor`]] subeditor for a `Bay` element. */
export declare class BayEditor extends BaseSubstationElementEditor {
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
