/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from './global';
/**
 * This file is used to control if the default rendering pipeline should be `ViewEngine` or `Ivy`.
 *
 * For more information on how to run and debug tests with either Ivy or View Engine (legacy),
 * please see [BAZEL.md](./docs/BAZEL.md).
 */
let _devMode = true;
let _runModeLocked = false;
/**
 * Returns whether Angular is in development mode. After called once,
 * the value is locked and won't change any more.
 *
 * By default, this is true, unless a user calls `enableProdMode` before calling this.
 *
 * @publicApi
 */
export function isDevMode() {
    _runModeLocked = true;
    return _devMode;
}
/**
 * Disable Angular's development mode, which turns off assertions and other
 * checks within the framework.
 *
 * One important assertion this disables verifies that a change detection pass
 * does not result in additional changes to any bindings (also known as
 * unidirectional data flow).
 *
 * @publicApi
 */
export function enableProdMode() {
    if (_runModeLocked) {
        throw new Error('Cannot enable prod mode after platform setup.');
    }
    // The below check is there so when ngDevMode is set via terser
    // `global['ngDevMode'] = false;` is also dropped.
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        global['ngDevMode'] = false;
    }
    _devMode = false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNfZGV2X21vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy91dGlsL2lzX2Rldl9tb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFaEM7Ozs7O0dBS0c7QUFFSCxJQUFJLFFBQVEsR0FBWSxJQUFJLENBQUM7QUFDN0IsSUFBSSxjQUFjLEdBQVksS0FBSyxDQUFDO0FBR3BDOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsU0FBUztJQUN2QixjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsY0FBYztJQUM1QixJQUFJLGNBQWMsRUFBRTtRQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7S0FDbEU7SUFFRCwrREFBK0Q7SUFDL0Qsa0RBQWtEO0lBQ2xELElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTtRQUNqRCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQzdCO0lBRUQsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Z2xvYmFsfSBmcm9tICcuL2dsb2JhbCc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGlzIHVzZWQgdG8gY29udHJvbCBpZiB0aGUgZGVmYXVsdCByZW5kZXJpbmcgcGlwZWxpbmUgc2hvdWxkIGJlIGBWaWV3RW5naW5lYCBvciBgSXZ5YC5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBob3cgdG8gcnVuIGFuZCBkZWJ1ZyB0ZXN0cyB3aXRoIGVpdGhlciBJdnkgb3IgVmlldyBFbmdpbmUgKGxlZ2FjeSksXG4gKiBwbGVhc2Ugc2VlIFtCQVpFTC5tZF0oLi9kb2NzL0JBWkVMLm1kKS5cbiAqL1xuXG5sZXQgX2Rldk1vZGU6IGJvb2xlYW4gPSB0cnVlO1xubGV0IF9ydW5Nb2RlTG9ja2VkOiBib29sZWFuID0gZmFsc2U7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgQW5ndWxhciBpcyBpbiBkZXZlbG9wbWVudCBtb2RlLiBBZnRlciBjYWxsZWQgb25jZSxcbiAqIHRoZSB2YWx1ZSBpcyBsb2NrZWQgYW5kIHdvbid0IGNoYW5nZSBhbnkgbW9yZS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIGlzIHRydWUsIHVubGVzcyBhIHVzZXIgY2FsbHMgYGVuYWJsZVByb2RNb2RlYCBiZWZvcmUgY2FsbGluZyB0aGlzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2TW9kZSgpOiBib29sZWFuIHtcbiAgX3J1bk1vZGVMb2NrZWQgPSB0cnVlO1xuICByZXR1cm4gX2Rldk1vZGU7XG59XG5cbi8qKlxuICogRGlzYWJsZSBBbmd1bGFyJ3MgZGV2ZWxvcG1lbnQgbW9kZSwgd2hpY2ggdHVybnMgb2ZmIGFzc2VydGlvbnMgYW5kIG90aGVyXG4gKiBjaGVja3Mgd2l0aGluIHRoZSBmcmFtZXdvcmsuXG4gKlxuICogT25lIGltcG9ydGFudCBhc3NlcnRpb24gdGhpcyBkaXNhYmxlcyB2ZXJpZmllcyB0aGF0IGEgY2hhbmdlIGRldGVjdGlvbiBwYXNzXG4gKiBkb2VzIG5vdCByZXN1bHQgaW4gYWRkaXRpb25hbCBjaGFuZ2VzIHRvIGFueSBiaW5kaW5ncyAoYWxzbyBrbm93biBhc1xuICogdW5pZGlyZWN0aW9uYWwgZGF0YSBmbG93KS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVQcm9kTW9kZSgpOiB2b2lkIHtcbiAgaWYgKF9ydW5Nb2RlTG9ja2VkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZW5hYmxlIHByb2QgbW9kZSBhZnRlciBwbGF0Zm9ybSBzZXR1cC4nKTtcbiAgfVxuXG4gIC8vIFRoZSBiZWxvdyBjaGVjayBpcyB0aGVyZSBzbyB3aGVuIG5nRGV2TW9kZSBpcyBzZXQgdmlhIHRlcnNlclxuICAvLyBgZ2xvYmFsWyduZ0Rldk1vZGUnXSA9IGZhbHNlO2AgaXMgYWxzbyBkcm9wcGVkLlxuICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgZ2xvYmFsWyduZ0Rldk1vZGUnXSA9IGZhbHNlO1xuICB9XG5cbiAgX2Rldk1vZGUgPSBmYWxzZTtcbn1cbiJdfQ==