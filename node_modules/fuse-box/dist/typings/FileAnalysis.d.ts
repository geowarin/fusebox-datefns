import { File } from "./File";
/**
 * Makes static analysis on the code
 * Gets require statements (es5 and es6)
 *
 * Adds additional injections (if needed)
 *
 * @export
 * @class FileAST
 */
export declare class FileAnalysis {
    file: File;
    /**
     * Acorn AST
     *
     * @type {*}
     * @memberOf FileAST
     */
    ast: any;
    private wasAnalysed;
    private skipAnalysis;
    private fuseBoxVariable;
    private requiresRegeneration;
    /**
     * A list of dependencies
     *
     * @type {string[]}
     * @memberOf FileAST
     */
    dependencies: string[];
    /**
     * Creates an instance of FileAST.
     *
     * @param {File} file
     *
     * @memberOf FileAST
     */
    constructor(file: File);
    astIsLoaded(): boolean;
    /**
     * Loads an AST
     *
     * @param {*} ast
     *
     * @memberOf FileAnalysis
     */
    loadAst(ast: any): void;
    skip(): void;
    /**
     *
     *
     * @private
     *
     * @memberOf FileAST
     */
    parseUsingAcorn(options?: any): void;
    handleAliasReplacement(requireStatement: string): string;
    analyze(): void;
    /**
     * Removes a footer with FuseBox API
     * In case a file we require appears to be a bundle
     *
     * @private
     *
     * @memberOf FileAnalysis
     */
    private removeFuseBoxApiFromBundle();
}
