import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon';
import '@openscd/oscd-action-icon';
export declare const sizableSmvIcon: TemplateResult<2>;
export declare class SmvEditor extends LitElement {
    doc: XMLDocument;
    element: Element;
    get label(): string;
    private openEditWizard;
    private removeElement;
    render(): TemplateResult;
}
