import { LitElement } from 'lit';
import { MdOutlinedButton } from '@scopedelement/material-web/button/outlined-button.js';
import { MdOutlinedTextField } from '@scopedelement/material-web/textfield/MdOutlinedTextField.js';
import { MdList } from '@scopedelement/material-web/list/MdList.js';
import { MdListItem } from '@scopedelement/material-web/list/MdListItem.js';
declare const LNodeTypeSidebar_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class LNodeTypeSidebar extends LNodeTypeSidebar_base {
    static scopedElements: {
        'md-outlined-button': typeof MdOutlinedButton;
        'md-outlined-textfield': typeof MdOutlinedTextField;
        'md-list': typeof MdList;
        'md-list-item': typeof MdListItem;
    };
    lNodeTypes: Element[];
    selectedId?: string;
    filter: string;
    private debounceTimer?;
    private handleInput;
    private clearFilter;
    private handleClick;
    get filteredLNodeTypes(): Element[];
    render(): import("lit").TemplateResult<1>;
    updated(changedProperties: Map<string, unknown>): void;
    static styles: import("lit").CSSResult;
}
export {};
