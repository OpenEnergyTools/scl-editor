import { Remove, Update } from '@openscd/open-scd-core';
/** @returns Updated confRev attribute for control block */
export declare function updatedConfRev(ctrlBlock: Element): string;
/** @returns all ExtRef element subscribed to a controlBlock */
export declare function findCtrlBlockSubscription(ctrlBlock: Element): Element[];
/** @returns object reference acc. IEC 61850-7-3 for control block elements */
export declare function controlBlockObjectReference(ctrlBlock: Element): string | null;
/** @returns control block or null for a given external reference */
export declare function controlBlock(extRef: Element): Element | null;
/** @returns control blocks for a given data attribute or data set */
export declare function controlBlocks(fcdaOrDataSet: Element): Element[];
/** @returns Action array removing control block and its referenced data */
export declare function removeControlBlock(ctrlBlock: Element): (Remove | Update)[];
