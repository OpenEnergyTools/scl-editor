import { Update } from '@openscd/open-scd-core';
declare type SmvOptsAttributes = {
    refreshTime?: string | null;
    sampleSynchronized?: string | null;
    sampleRate?: string | null;
    dataSet?: string | null;
    security?: string | null;
    dataRef?: string | null;
    synchSourceId?: string | null;
};
/** @returns action array to update all `SmvOps` attributes */
export declare function updateSmvOpts(smvOpts: Element, attributes: SmvOptsAttributes): Update;
export {};
