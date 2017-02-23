import { File } from '../File';
import { WorkFlowContext } from '../WorkflowContext';
import { Plugin } from '../WorkflowContext';
/**
 * @export
 * @class StylusPluginClass
 * @implements {Plugin}
 */
export declare class StylusPluginClass implements Plugin {
    /**
     * @type {RegExp}
     * @memberOf StylusPluginClass
     */
    test: RegExp;
    options: any;
    constructor(options: any);
    init(context: WorkFlowContext): void;
    transform(file: File): Promise<any>;
}
export declare const StylusPlugin: (options: any) => StylusPluginClass;
