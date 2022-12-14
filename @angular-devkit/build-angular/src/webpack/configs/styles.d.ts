/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Configuration } from 'webpack';
import { StyleElement } from '../../builders/browser/schema';
import { WebpackConfigOptions } from '../../utils/build-options';
export declare function resolveGlobalStyles(styleEntrypoints: StyleElement[], root: string, preserveSymlinks: boolean, skipResolution?: boolean): {
    entryPoints: Record<string, string[]>;
    noInjectNames: string[];
    paths: string[];
};
export declare function getStylesConfig(wco: WebpackConfigOptions): Configuration;
