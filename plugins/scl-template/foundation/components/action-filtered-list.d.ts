import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item-base';
import '@material/mwc-textfield';
import { List } from '@material/mwc-list';
import type { ListItem } from '@material/mwc-list/mwc-list-item';
import type { TextField } from '@material/mwc-textfield';
export declare function redispatchEvent(element: LitElement, event: Event): boolean;
/**
 * @fires {ActionEvent} action - Fired when a selection has been made via click or keyboard action.
 * @fires {SelectedEvent} selected - Fired when a selection has been made. `index` is the selected index (will be of type `Set<number>` if multi and `number` if single), and `diff` (of type `IndexDiff`\*\*) represents the diff of added and removed indices from previous selection.
 * @summary A list with a textfield that filters the list items for given or separated terms.
 * @tag action-filtered-list
 */
export declare class ActionFilteredList extends LitElement {
    /** Search textfield label */
    searchFieldLabel?: string;
    /** Whether the check all option is available */
    disableCheckAll: boolean;
    /** The current input value of the filter textfield */
    filter?: string;
    /** Whether multiple selection is enabled. */
    multi: boolean;
    /** Sets activated attribute on selected items providing focus highlight. */
    activatable: boolean;
    list: List;
    /** Selected list item(s). When `true`, `selected` is of type `ListItemBase[]`
     *  When `false`, `selected` is of type `ListItemBase`.
     * `selected` is `null` when no item is selected. */
    get selected(): import("@material/mwc-list/mwc-list-item-base").ListItemBase | import("@material/mwc-list/mwc-list-item-base").ListItemBase[] | null;
    /** Selected item(s) index. When `true`, `index` is of type `number`.
     * When `false`, `index` is of type `Set<number>`. Unset indices are `-1` and
     * empty `Set<number>` for single and multi selection respectively.
     * */
    get index(): import("@material/mwc-list").MWCListIndex;
    /** All list items that are available for selection. Eligible items have the
     * `[mwc-list-item]` attribute which `ListItemBase` applies automatically.
     * */
    items: Array<ListItem>;
    private get existCheckListItem();
    private get isAllSelected();
    private get isSomeSelected();
    searchField: TextField;
    private onCheckAll;
    private onFilterInput;
    firstUpdated(): void;
    constructor();
    private renderCheckAll;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
