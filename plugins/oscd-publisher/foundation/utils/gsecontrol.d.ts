import { Insert, Remove, Update } from '@openscd/open-scd-core';
/** @returns action array to update all `GSEControl` attributes */
export declare function updateGseControl(gseControl: Element, attrs: Record<string, string | null>): (Update | Remove | Insert)[];
/** Function processing GSEControl creation
 * @parent Parent element such as `LN0`, `LDevice`, `AccessPoint` and `IED`
 * @attributes GSEControl element attributes. Required but missing attributes
 *             will be added automatically
 * @returns Action inserting new `GSEControl` to [[`parent`]] element
 * */
export declare function addGSEControl(parent: Element, attributes?: Record<string, string | null>): Insert[] | null;
