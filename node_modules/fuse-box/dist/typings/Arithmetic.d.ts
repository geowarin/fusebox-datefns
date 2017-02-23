import { PropParser } from "./ArithmeticStringParser";
import { File } from "./File";
export interface IBundleInformation {
    deps: boolean;
    nodeModule?: boolean;
}
/**
 * BundleData
 */
export declare class BundleData {
    homeDir: string;
    typescriptMode: boolean;
    including: Map<string, IBundleInformation>;
    excluding: Map<string, IBundleInformation>;
    entry: string;
    tmpFolder: string;
    constructor(homeDir: string, typescriptMode: boolean, including: Map<string, IBundleInformation>, excluding: Map<string, IBundleInformation>, entry?: string);
    setupTempFolder(tmpFolder: string): void;
    fileBlackListed(file: File): boolean;
    fileWhiteListed(file: File): boolean;
    finalize(): void;
    shouldIgnore(name: string): boolean;
    shouldIgnoreDependencies(name: string): boolean;
    shouldIgnoreNodeModules(asbPath: string): boolean;
}
/**
 *
 *
 * @export
 * @class Arithmetic
 */
export declare class Arithmetic {
    /**
     *
     *
     * @static
     * @param {string} str
     * @returns
     *
     * @memberOf Arithmetic
     */
    static parse(str: string): PropParser;
    /**
     * Get files from a directory
     * In case of virtualFiles we create a temp folder,
     * where we write all the contents and start from there
     *
     * @static
     * @param {PropParser} parser
     * @param {string} fileCollection
     * @param {string} homeDir
     * @returns
     *
     * @memberOf Arithmetic
     */
    static getFiles(parser: PropParser, virtualFiles: string, homeDir: string): Promise<any>;
}
