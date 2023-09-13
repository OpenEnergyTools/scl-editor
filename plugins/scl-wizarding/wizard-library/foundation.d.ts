import { TemplateResult } from 'lit';
import { List } from '@material/mwc-list';
import { Select } from '@material/mwc-select';
import { TextField } from '@material/mwc-textfield';
import { Edit } from '@openscd/open-scd-core';
import { OscdTextfield } from '../foundation/components/oscd-textfield.js';
import { OscdSelect } from '../foundation/components/oscd-select.js';
/** Throws an error bearing `message`, never returning. */
export declare function unreachable(message: string): never;
/** @returns the cartesian product of `arrays` */
export declare function crossProduct<T>(...arrays: T[][]): T[][];
export declare const wizardInputSelector = "oscd-textfield, mwc-textfield, ace-editor, mwc-select, oscd-select, oscd-checkbox";
export type WizardInputElement = OscdTextfield | TextField | Select | OscdSelect;
/** @returns [[`EditorAction`]]s to dispatch on [[`WizardDialog`]] commit. */
export type WizardActor = (inputs: WizardInputElement[], wizard: Element, list?: List | null) => Edit[];
/** @returns the validity of `input` depending on type. */
export declare function checkValidity(input: WizardInputElement): boolean;
/** reports the validity of `input` depending on type. */
export declare function reportValidity(input: WizardInputElement): boolean;
/** @returns the `value` or `maybeValue` of `input` depending on type. */
export declare function getValue(input: WizardInputElement): string | null;
/** @returns the `multiplier` of `input` if available. */
export declare function getMultiplier(input: WizardInputElement): string | null;
/** @returns [[`WizardAction`]]s to dispatch on [[`WizardDialog`]] menu action. */
export type WizardMenuActor = (wizard: Element) => void;
/** User interactions rendered in the wizard-dialog menu */
export interface MenuAction {
    label: string;
    icon?: string;
    action: WizardMenuActor;
}
/** Represents a page of a wizard dialog */
export interface WizardPage {
    title: string;
    content?: TemplateResult[];
    primary?: {
        icon: string;
        label: string;
        action: WizardActor;
        auto?: boolean;
    };
    secondary?: {
        icon: string;
        label: string;
        action: WizardActor;
    };
    initial?: boolean;
    menuActions?: MenuAction[];
}
export type Wizard = WizardPage[];
export type WizardFactory = () => Wizard;
/** If `wizard === null`, close the current wizard, else queue `wizard`. */
export interface WizardDetail {
    wizard: WizardFactory | null;
    subwizard?: boolean;
}
/** @returns a clone of `element` with attributes set to values from `attrs`. */
export declare function cloneElement(element: Element, attrs: Record<string, string | null>): Element;
/**
 * Extract the 'name' attribute from the given XML element.
 * @param element - The element to extract name from.
 * @returns the name, or undefined if there is no name.
 */
export declare function getNameAttribute(element: Element): string | undefined;
export declare function isPublic(element: Element): boolean;
/** @returns a new [[`tag`]] element owned by [[`doc`]]. */
export declare function createElement(doc: Document, tag: string, attrs: Record<string, string | null>): Element;
export declare function getChildElementsByTagName(element: Element | null | undefined, tag: string | null | undefined): Element[];
