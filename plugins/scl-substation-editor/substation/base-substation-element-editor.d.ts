import { LitElement } from 'lit';
/** base class hosting global properties and the remove method */
export default class BaseSubstationElementEditor extends LitElement {
    /** The edited `Function` element */
    element: Element;
    /** indicator for changes element */
    editCount: number;
    /** Whether function type element shall be shown */
    showfunctions: boolean;
    removeElement(): void;
}
