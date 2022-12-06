/// <amd-module name="@angular/compiler-cli/linker/babel/src/babel_plugin" />
import { LinkerOptions } from '../../src/file_linker/linker_options';
import { ConfigAPI, PluginObj } from './babel_core';
/**
 * This is the Babel plugin definition that is provided as a default export from the package, such
 * that the plugin can be used using the module specifier of the package. This is the recommended
 * way of integrating the Angular Linker into a build pipeline other than the Angular CLI.
 *
 * When the module specifier `@angular/compiler-cli/linker/babel` is used as a plugin in a Babel
 * configuration, Babel invokes this function (by means of the default export) to create the plugin
 * instance according to the provided options.
 *
 * The linker plugin that is created uses the native NodeJS filesystem APIs to interact with the
 * filesystem. Any logging output is printed to the console.
 *
 * @param api Provides access to the Babel environment that is configuring this plugin.
 * @param options The plugin options that have been configured.
 */
export declare function defaultLinkerPlugin(api: ConfigAPI, options: Partial<LinkerOptions>): PluginObj;
