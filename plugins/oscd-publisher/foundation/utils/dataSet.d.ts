import { Insert, Update } from '@openscd/open-scd-core';
/** @returns Update actions for `DataSet`s attributes and its `datSet` references */
export declare function updateDateSetName(dataSet: Element, attr: Record<string, string | null>): Update[];
/**
 * @parent Parent element such as `LN0`, `LN`, `LDevice`, `AccessPoint` and `IED`
 * @attributes DataSet element attributes. Required but missing attributes
 *             will be added automatically.
 ** @returns Action inserting new `DataSet` to [[`parent`]] element */
export declare function addDataSet(parent: Element, attributes?: Record<string, string | null>): Insert | null;
