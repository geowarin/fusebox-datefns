import { WorkFlowContext } from "./WorkflowContext";
import { IPackageInformation } from "./PathMaster";
import { ModuleCollection } from "./ModuleCollection";
import { File } from './File';
/**
 *
 *
 * @export
 * @class ModuleCache
 */
export declare class ModuleCache {
    context: WorkFlowContext;
    /**
     *
     *
     * @type {string}
     * @memberOf ModuleCache
     */
    cacheFolder: string;
    /**
     *
     *
     * @private
     * @type {string}
     * @memberOf ModuleCache
     */
    private cacheFile;
    /**
     *
     *
     * @private
     * @type {string}
     * @memberOf ModuleCache
     */
    private staticCacheFolder;
    /**
     *
     *
     * @private
     *
     * @memberOf ModuleCache
     */
    private cachedDeps;
    /**
     * Creates an instance of ModuleCache.
     *
     * @param {WorkFlowContext} context
     *
     * @memberOf ModuleCache
     */
    constructor(context: WorkFlowContext);
    /**
     *
     *
     * @param {File} file
     * @returns
     *
     * @memberOf ModuleCache
     */
    getStaticCache(file: File): any;
    /**
     *
     *
     * @param {File} file
     * @param {any} dependencies
     * @param {string} sourcemaps
     *
     * @memberOf ModuleCache
     */
    writeStaticCache(file: File, sourcemaps: string): void;
    /**
     *
     *
     * @param {File[]} files
     * @returns {Promise<File[]>}
     *
     * @memberOf ModuleCache
     */
    resolve(files: File[]): Promise<File[]>;
    /**
     *
     *
     * @param {ModuleCollection} rootCollection
     *
     * @memberOf ModuleCache
     */
    buildMap(rootCollection: ModuleCollection): void;
    /**
     *
     *
     * @param {IPackageInformation} info
     * @param {string} contents
     * @returns
     *
     * @memberOf ModuleCache
     */
    set(info: IPackageInformation, contents: string): Promise<{}>;
}
