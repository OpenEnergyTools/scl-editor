import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-fab';
import '@openscd/oscd-action-icon';
/** [[`Communication`]] subeditor for a `ConnectedAP` element. */
export declare class ConnectedAPEditor extends LitElement {
    /** SCL element ConnectedAP */
    element: Element;
    /** ConnectedAP attribute apName */
    get apName(): string;
    private openEditWizard;
    private removeElement;
    render(): TemplateResult;
}
