import { LitElement } from 'lit';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdOutlinedTextField } from '@scopedelement/material-web/textfield/MdOutlinedTextField.js';
import { MdFilledSelect } from '@scopedelement/material-web/select/MdOutlineSelect.js';
import { MdSelectOption } from '@scopedelement/material-web/select/MdSelectOption.js';
import { MdOutlinedButton } from '@scopedelement/material-web/button/outlined-button.js';
import { MdTextButton } from '@scopedelement/material-web/button/text-button.js';
declare const AddDataObjectDialog_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class AddDataObjectDialog extends AddDataObjectDialog_base {
    static scopedElements: {
        'md-outlined-button': typeof MdOutlinedButton;
        'md-dialog': typeof MdDialog;
        'md-outlined-text-field': typeof MdOutlinedTextField;
        'md-text-button': typeof MdTextButton;
        'md-select-option': typeof MdSelectOption;
        'md-filled-select': typeof MdFilledSelect;
    };
    static styles: import("lit").CSSResult;
    cdClasses: string[];
    open: boolean;
    errorText: string;
    createDOdialog: MdDialog;
    cdcType: MdFilledSelect;
    doName: MdOutlinedTextField;
    show(): void;
    close(): void;
    private validateForm;
    private onAddDataObjectSubmit;
    private resetErrorText;
    render(): import("lit").TemplateResult<1>;
}
export default AddDataObjectDialog;
