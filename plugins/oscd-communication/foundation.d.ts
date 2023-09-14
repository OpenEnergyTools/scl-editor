/** Sorts selected `ListItem`s to the top and disabled ones to the bottom. */
export declare function compareNames(a: Element | string, b: Element | string): number;
export declare function isPublic(element: Element): boolean;
export declare function getChildElementsByTagName(element: Element | null | undefined, tag: string | null | undefined): Element[];
/** @returns a new [[`tag`]] element owned by [[`doc`]]. */
export declare function createElement(doc: Document, tag: string, attrs: Record<string, string | null>): Element;
interface WizardRequestBase {
    subWizard?: boolean;
}
export interface EditWizardRequest extends WizardRequestBase {
    element: Element;
}
export interface CreateWizardRequest extends WizardRequestBase {
    parent: Element;
    tagName: string;
}
export type WizardRequest = EditWizardRequest | CreateWizardRequest;
export declare function isEditRequest(wizard: any): wizard is EditWizardRequest;
export declare function isCreateRequest(wizard: any): wizard is CreateWizardRequest;
type EditWizardEvent = CustomEvent<EditWizardRequest>;
type CreateWizardEvent = CustomEvent<CreateWizardRequest>;
export type WizardEvent = EditWizardEvent | CreateWizardEvent;
type CloseWizardEvent = CustomEvent<WizardRequest>;
export declare function newEditWizardEvent(element: Element, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<EditWizardRequest>>): EditWizardEvent;
export declare function newCreateWizardEvent(parent: Element, tagName: string, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<CreateWizardRequest>>): CreateWizardEvent;
export declare function newCloseWizardEvent(wizard: WizardRequest, eventInitDict?: CustomEventInit<Partial<WizardRequest>>): CloseWizardEvent;
declare global {
    interface ElementEventMap {
        ['oscd-edit-wizard-request']: EditWizardRequest;
        ['oscd-create-wizard-request']: CreateWizardRequest;
        ['oscd-close-wizard']: WizardEvent;
    }
}
export {};
