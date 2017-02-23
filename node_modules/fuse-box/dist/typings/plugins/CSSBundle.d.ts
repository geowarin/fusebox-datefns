import { File } from "../File";
import { WorkFlowContext } from "./../WorkflowContext";
import { Plugin } from "../WorkflowContext";
export interface CSSBundleOptions {
}
/**
 *
 *
 * @export
 * @class CSSBundleClass
 * @implements {Plugin}
 */
export declare class CSSBundleClass implements Plugin {
    test: RegExp;
    constructor(opts: CSSBundleOptions);
    init(context: WorkFlowContext): void;
    transformGroup(group: File): void;
}
export declare const CSSBundle: (opts?: CSSBundleOptions) => CSSBundleClass;
