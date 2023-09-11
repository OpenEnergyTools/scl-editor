import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon-button-toggle';
/** [[`Zeroline`]] pane for displaying `Substation` and/or `IED` sections. */
export declare class ZerolinePane extends LitElement {
    /** The document being edited as provided to editor by [[`Zeroline`]]. */
    doc: XMLDocument;
    editCount: number;
    toggleShowFunctions(): void;
    renderSubstation(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
