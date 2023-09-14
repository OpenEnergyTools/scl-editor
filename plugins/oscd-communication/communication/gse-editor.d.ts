import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon';
import '@openscd/oscd-action-icon';
export declare class GseEditor extends LitElement {
    doc: XMLDocument;
    element: Element;
    get label(): string;
    private openEditWizard;
    removeElement(): void;
    render(): TemplateResult;
}
