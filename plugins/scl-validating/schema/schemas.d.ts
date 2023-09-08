export declare const schemas: {
    '2003': string;
    '2007B': string;
    '2007B4': string;
};
export type SupportedVersion = keyof typeof schemas;
export declare function isSupported(version: string): version is SupportedVersion;
export declare function getSchema(version: string, revision: string, release: string): string;
export type SchemaAttributes = {
    version: '';
    revision: '';
    release: '';
} | {
    version: '2007';
    revision: 'B';
    release: '';
} | {
    version: '2007';
    revision: 'B';
    release: '4';
};
export declare const supportedAttributes: Record<SupportedVersion, SchemaAttributes>;
