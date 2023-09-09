import { Insert, Remove } from '@openscd/open-scd-core';
declare type pTypes = {
    'MAC-Address'?: string | null;
    APPID?: string | null;
    'VLAN-ID'?: string | null;
    'VLAN-PRIORITY'?: string | null;
};
declare type smvAttributes = {
    pTypes: pTypes;
    instType?: boolean;
};
/** @returns Whether the `sMV`s element attributes or instType has changed */
export declare function checkSMVDiff(sMV: Element, attributes?: smvAttributes): boolean;
/** Update function for SMV element's Address field
 * @sMV the `SMV` element to update the address element of
 * @attributes pType values `MAC-Address`,`APPID`,`VLAN-ID` or `VLAN-PRIORITY`
 *           instType whether to add xsi:type attributes for better XML parsing
 * @return action array to update a `SMV`s `Address` child element
 */
export declare function updateSmvAddress(sMV: Element, attributes?: smvAttributes): (Insert | Remove)[];
export {};
