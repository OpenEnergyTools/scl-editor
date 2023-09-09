/**
 * @param doc - project xml document
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @returns a function generating increasing unused `MAC-Address` within `doc` on subsequent invocations
 */
export declare function mACAddressGenerator(doc: XMLDocument, serviceType: 'SMV' | 'GSE'): () => string | null;
/**
 * @param doc - project xml document
 * @param serviceType - SampledValueControl (SMV) or GSEControl (GSE)
 * @param type1A - whether the GOOSE is a Trip GOOSE resulting in different APPID range - default false
 * @returns a function generating increasing unused `APPID` within `doc` on subsequent invocations
 */
export declare function appIdGenerator(doc: XMLDocument, serviceType: 'SMV' | 'GSE', type1A?: boolean): () => string | null;
