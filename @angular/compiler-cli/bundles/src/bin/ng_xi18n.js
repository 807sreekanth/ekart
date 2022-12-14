#!/usr/bin/env node

      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
      const __ESM_IMPORT_META_URL__ = import.meta.url;
    
import {
  main,
  readCommandLineAndConfiguration
} from "../../chunk-KG4X2UVK.js";
import {
  EmitFlags
} from "../../chunk-CQC4TODZ.js";
import "../../chunk-W6PLYNW2.js";
import "../../chunk-7D7JVHLL.js";
import "../../chunk-CDDXRRSJ.js";
import "../../chunk-E6XS3AOK.js";
import {
  NodeJSFileSystem,
  setFileSystem
} from "../../chunk-S4JINNFN.js";
import "../../chunk-CTEVZGOM.js";
import "../../chunk-XYNRD7NE.js";

// bazel-out/darwin-fastbuild/bin/packages/compiler-cli/src/bin/ng_xi18n.mjs
import "reflect-metadata";

// bazel-out/darwin-fastbuild/bin/packages/compiler-cli/src/extract_i18n.mjs
import yargs from "yargs";
function mainXi18n(args2, consoleError = console.error) {
  const config = readXi18nCommandLineAndConfiguration(args2);
  return main(args2, consoleError, config, void 0, void 0, void 0);
}
function readXi18nCommandLineAndConfiguration(args2) {
  const options = {};
  const parsedArgs = yargs(args2).option("i18nFormat", { type: "string" }).option("locale", { type: "string" }).option("outFile", { type: "string" }).parseSync();
  if (parsedArgs.outFile)
    options.i18nOutFile = parsedArgs.outFile;
  if (parsedArgs.i18nFormat)
    options.i18nOutFormat = parsedArgs.i18nFormat;
  if (parsedArgs.locale)
    options.i18nOutLocale = parsedArgs.locale;
  const config = readCommandLineAndConfiguration(args2, options, [
    "outFile",
    "i18nFormat",
    "locale"
  ]);
  return { ...config, emitFlags: EmitFlags.I18nBundle };
}

// bazel-out/darwin-fastbuild/bin/packages/compiler-cli/src/bin/ng_xi18n.mjs
process.title = "Angular i18n Message Extractor (ng-xi18n)";
var args = process.argv.slice(2);
setFileSystem(new NodeJSFileSystem());
process.exitCode = mainXi18n(args);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=ng_xi18n.js.map
