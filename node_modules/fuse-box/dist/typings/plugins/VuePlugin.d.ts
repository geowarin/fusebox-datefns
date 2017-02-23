import { File } from "../File";
import { WorkFlowContext } from "./../WorkflowContext";
import { Plugin } from "../WorkflowContext";
export declare class VuePluginClass implements Plugin {
    test: RegExp;
    opts: any;
    constructor(opts: any);
    init(context: WorkFlowContext): void;
    transform(file: File): void;
}
export declare const VuePlugin: (opts: any) => VuePluginClass;
