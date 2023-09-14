import { TemplateResult } from 'lit';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-icon';
import '@openscd/oscd-filtered-list';
import '../../foundation/components/oscd-textfield.js';
import { Wizard } from '../foundation.js';
/**
 * Creates a TypeRestriction checkbox for a given ConnectedAP wizard.
 * @param element - The ConnectedAP of the wizard.
 * @returns The checkbox within a formfield.
 */
export declare function createTypeRestrictionCheckbox(element: Element): TemplateResult;
export declare function createPTextField(element: Element, pType: string): TemplateResult;
/** @returns single page  [[`Wizard`]] for creating SCL element ConnectedAP. */
export declare function createConnectedApWizard(element: Element): Wizard;
/** @returns single page [[`Wizard`]] to edit SCL element ConnectedAP. */
export declare function editConnectedApWizard(element: Element): Wizard;
