import { Insert, Remove } from '@openscd/open-scd-core';
/** @returns a `GSE` element referenced to `GSEControl` element or `null` */
export declare function referencedGSE(gseControl: Element): Element | null;
/** @returns Whether the `gSE`s element attributes or instType has changed */
export declare function checkGSEDiff(gSE: Element, attrs: Record<string, string | null>, instType?: boolean): boolean;
/**
 * @param gSE - the element to be updated
 * @param attrs - input values containing potential changes
 * @param instType - Whether xsi:type attributes shall be set
 * @returns Action array updating GSEs children Address, MinTine and MaxTime
 * */
export declare function updateGSE(gSE: Element, attrs: Record<string, string | null>, instType?: boolean): (Insert | Remove)[];
type GSeOptions = {
    pTypes: Record<string, string | null>;
    minTime?: string;
    maxTime?: string;
};
/** @returns Action inserting new `GSE` to [[`connectedAp`]] element */
export declare function addGSE(connectedAp: Element, attributes: {
    ldInst: string;
    cbName: string;
}, options?: GSeOptions): Insert[];
export {};
