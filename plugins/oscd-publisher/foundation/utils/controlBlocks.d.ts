/** @returns Updated confRev attribute for control block */
export declare function updatedConfRev(ctrlBlock: Element): string;
/** @returns all ExtRef element subscribed to a controlBlock */
export declare function findCtrlBlockSubscription(ctrlBlock: Element): Element[];
/** @returns control blocks for a given data attribute or data set */
export declare function controlBlocks(fcdaOrDataSet: Element): Element[];
