/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the core/testing package.
 */
export * from './async';
export * from './component_fixture';
export * from './fake_async';
export { TestBed, getTestBed, inject, InjectSetupWrapper, withModule } from './test_bed';
export { TestComponentRenderer, ComponentFixtureAutoDetect, ComponentFixtureNoNgZone } from './test_bed_common';
export * from './test_hooks';
export * from './metadata_override';
export { MetadataOverrider as ɵMetadataOverrider } from './metadata_overrider';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvdGVzdGluZy9zcmMvdGVzdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBRUgsY0FBYyxTQUFTLENBQUM7QUFDeEIsY0FBYyxxQkFBcUIsQ0FBQztBQUNwQyxjQUFjLGNBQWMsQ0FBQztBQUM3QixPQUFPLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUN0RyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCLEVBQW9FLE1BQU0sbUJBQW1CLENBQUM7QUFDakwsY0FBYyxjQUFjLENBQUM7QUFDN0IsY0FBYyxxQkFBcUIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsaUJBQWlCLElBQUksa0JBQWtCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogRW50cnkgcG9pbnQgZm9yIGFsbCBwdWJsaWMgQVBJcyBvZiB0aGUgY29yZS90ZXN0aW5nIHBhY2thZ2UuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9hc3luYyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudF9maXh0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vZmFrZV9hc3luYyc7XG5leHBvcnQge1Rlc3RCZWQsIGdldFRlc3RCZWQsIFRlc3RCZWRTdGF0aWMsIGluamVjdCwgSW5qZWN0U2V0dXBXcmFwcGVyLCB3aXRoTW9kdWxlfSBmcm9tICcuL3Rlc3RfYmVkJztcbmV4cG9ydCB7VGVzdENvbXBvbmVudFJlbmRlcmVyLCBDb21wb25lbnRGaXh0dXJlQXV0b0RldGVjdCwgQ29tcG9uZW50Rml4dHVyZU5vTmdab25lLCBUZXN0TW9kdWxlTWV0YWRhdGEsIFRlc3RFbnZpcm9ubWVudE9wdGlvbnMsIE1vZHVsZVRlYXJkb3duT3B0aW9uc30gZnJvbSAnLi90ZXN0X2JlZF9jb21tb24nO1xuZXhwb3J0ICogZnJvbSAnLi90ZXN0X2hvb2tzJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0YWRhdGFfb3ZlcnJpZGUnO1xuZXhwb3J0IHtNZXRhZGF0YU92ZXJyaWRlciBhcyDJtU1ldGFkYXRhT3ZlcnJpZGVyfSBmcm9tICcuL21ldGFkYXRhX292ZXJyaWRlcic7XG4iXX0=