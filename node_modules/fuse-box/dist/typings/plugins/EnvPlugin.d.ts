import { WorkFlowContext } from "./../WorkflowContext";
import { Plugin } from "../WorkflowContext";
/**
 * @export
 * @class BannerPluginClass
 * @implements {Plugin}
 */
export declare class EnvPluginClass implements Plugin {
    private env;
    constructor(env: any);
    bundleStart(context: WorkFlowContext): void;
}
export declare const EnvPlugin: (banner: string) => EnvPluginClass;
