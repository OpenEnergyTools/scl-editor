import { Insert, Remove, Update } from '@openscd/open-scd-core';
/** @returns Action array removing multi FCDA and its subscriber information */
export declare function removeFCDAs(fCDAs: Element[]): (Update | Remove)[];
/** @returns Action array removing FCDA and its subscriber information */
export declare function removeFCDA(fCDA: Element): (Update | Remove)[];
/** @returns Whether a data attribute is subscribed  */
export declare function isSubscribed(fcda: Element): boolean;
/** @returns Action array adding new `FCDA`s to parent [[`DataSet`]] */
export declare function addFCDAs(dataSet: Element, paths: Element[][]): Insert[];
/** @returns Action array adding new `FCDA`s to parent [[`DataSet`]] */
export declare function addFCDOs(dataSet: Element, fcPaths: {
    path: Element[];
    fc: string;
}[]): Insert[];
