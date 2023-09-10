import { TemplateResult } from 'lit';
import './substation/general-equipment-editor.js';
export declare function getChildElementsByTagName(element: Element | null | undefined, tag: string | null | undefined): Element[];
export declare function renderGeneralEquipment(doc: XMLDocument, element: Element, showfunctions: boolean): TemplateResult;
/** Common `CSS` styles used by substation subeditors */
export declare const styles: import("lit").CSSResult;
export declare const powerTransformerTwoWindingIcon: TemplateResult<1>;
export declare const generalConductingEquipmentIcon: TemplateResult<1>;
export declare const disconnectorIcon: TemplateResult<1>;
export declare const circuitBreakerIcon: TemplateResult<1>;
export declare const currentTransformerIcon: TemplateResult<1>;
export declare const voltageTransformerIcon: TemplateResult<1>;
export declare const earthSwitchIcon: TemplateResult<1>;
export declare function crossProduct<T>(...arrays: T[][]): T[][];
export declare function typeStr(condEq: Element): string;
export declare function getIcon(condEq: Element): TemplateResult;
