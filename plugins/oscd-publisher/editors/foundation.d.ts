import { TemplateResult } from 'lit';
declare type Path = string[];
interface Directory {
    path: Path;
    header?: TemplateResult;
    entries: string[];
}
export declare function getDisplayString(entry: string): string;
export declare function getDataAttributeChildren(parent: Element): Element[];
export declare function getDataObjectChildren(parent: Element): (Element | string)[];
export declare function getReader(doc: Document, getChildren: (element: Element) => (Element | string)[]): (path: string[]) => Promise<Directory>;
export {};
