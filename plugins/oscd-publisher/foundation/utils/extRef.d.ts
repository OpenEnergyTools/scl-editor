declare type Remove = {
    node: Node;
};
declare type Update = {
    element: Element;
    attributes: Record<string, string | null>;
};
export declare function unsubscribe(extRefs: Element[]): (Update | Remove)[];
/** @returns Whether a ExtRef to FCDA reference match */
export declare function matchExtRefFcda(extRef: Element, fcda: Element): boolean;
/** @returns Whether src... type ExtRef attributes match */
export declare function matchExtRefCtrlBlockAttr(extRef: Element, ctrlBlock: Element): boolean;
export {};
