import { File } from "../File";
import { WorkFlowContext } from "../WorkflowContext";
import { Plugin } from "../WorkflowContext";
/**
 * @export
 * @class SassPlugin
 * @implements {Plugin}
 */
export declare class SassPluginClass implements Plugin {
    test: RegExp;
    options: any;
    constructor(options: any);
    init(context: WorkFlowContext): void;
    transform(file: File): Promise<any>;
}
export declare const SassPlugin: (options: any) => SassPluginClass;
