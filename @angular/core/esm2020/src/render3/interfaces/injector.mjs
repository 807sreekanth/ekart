/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDefined, assertEqual } from '../../util/assert';
export const NO_PARENT_INJECTOR = -1;
/**
 * Each injector is saved in 9 contiguous slots in `LView` and 9 contiguous slots in
 * `TView.data`. This allows us to store information about the current node's tokens (which
 * can be shared in `TView`) as well as the tokens of its ancestor nodes (which cannot be
 * shared, so they live in `LView`).
 *
 * Each of these slots (aside from the last slot) contains a bloom filter. This bloom filter
 * determines whether a directive is available on the associated node or not. This prevents us
 * from searching the directives array at this level unless it's probable the directive is in it.
 *
 * See: https://en.wikipedia.org/wiki/Bloom_filter for more about bloom filters.
 *
 * Because all injectors have been flattened into `LView` and `TViewData`, they cannot typed
 * using interfaces as they were previously. The start index of each `LInjector` and `TInjector`
 * will differ based on where it is flattened into the main array, so it's not possible to know
 * the indices ahead of time and save their types here. The interfaces are still included here
 * for documentation purposes.
 *
 * export interface LInjector extends Array<any> {
 *
 *    // Cumulative bloom for directive IDs 0-31  (IDs are % BLOOM_SIZE)
 *    [0]: number;
 *
 *    // Cumulative bloom for directive IDs 32-63
 *    [1]: number;
 *
 *    // Cumulative bloom for directive IDs 64-95
 *    [2]: number;
 *
 *    // Cumulative bloom for directive IDs 96-127
 *    [3]: number;
 *
 *    // Cumulative bloom for directive IDs 128-159
 *    [4]: number;
 *
 *    // Cumulative bloom for directive IDs 160 - 191
 *    [5]: number;
 *
 *    // Cumulative bloom for directive IDs 192 - 223
 *    [6]: number;
 *
 *    // Cumulative bloom for directive IDs 224 - 255
 *    [7]: number;
 *
 *    // We need to store a reference to the injector's parent so DI can keep looking up
 *    // the injector tree until it finds the dependency it's looking for.
 *    [PARENT_INJECTOR]: number;
 * }
 *
 * export interface TInjector extends Array<any> {
 *
 *    // Shared node bloom for directive IDs 0-31  (IDs are % BLOOM_SIZE)
 *    [0]: number;
 *
 *    // Shared node bloom for directive IDs 32-63
 *    [1]: number;
 *
 *    // Shared node bloom for directive IDs 64-95
 *    [2]: number;
 *
 *    // Shared node bloom for directive IDs 96-127
 *    [3]: number;
 *
 *    // Shared node bloom for directive IDs 128-159
 *    [4]: number;
 *
 *    // Shared node bloom for directive IDs 160 - 191
 *    [5]: number;
 *
 *    // Shared node bloom for directive IDs 192 - 223
 *    [6]: number;
 *
 *    // Shared node bloom for directive IDs 224 - 255
 *    [7]: number;
 *
 *    // Necessary to find directive indices for a particular node.
 *    [TNODE]: TElementNode|TElementContainerNode|TContainerNode;
 *  }
 */
/**
 * Factory for creating instances of injectors in the NodeInjector.
 *
 * This factory is complicated by the fact that it can resolve `multi` factories as well.
 *
 * NOTE: Some of the fields are optional which means that this class has two hidden classes.
 * - One without `multi` support (most common)
 * - One with `multi` values, (rare).
 *
 * Since VMs can cache up to 4 inline hidden classes this is OK.
 *
 * - Single factory: Only `resolving` and `factory` is defined.
 * - `providers` factory: `componentProviders` is a number and `index = -1`.
 * - `viewProviders` factory: `componentProviders` is a number and `index` points to `providers`.
 */
export class NodeInjectorFactory {
    constructor(
    /**
     * Factory to invoke in order to create a new instance.
     */
    factory, 
    /**
     * Set to `true` if the token is declared in `viewProviders` (or if it is component).
     */
    isViewProvider, injectImplementation) {
        this.factory = factory;
        /**
         * Marker set to true during factory invocation to see if we get into recursive loop.
         * Recursive loop causes an error to be displayed.
         */
        this.resolving = false;
        ngDevMode && assertDefined(factory, 'Factory not specified');
        ngDevMode && assertEqual(typeof factory, 'function', 'Expected factory function.');
        this.canSeeViewProviders = isViewProvider;
        this.injectImpl = injectImplementation;
    }
}
export function isFactory(obj) {
    return obj instanceof NodeInjectorFactory;
}
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
export const unusedValueExportToPlacateAjd = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ludGVyZmFjZXMvaW5qZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsT0FBTyxFQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQWtFN0QsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQTZCLENBQUMsQ0FBUSxDQUFDO0FBRXRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4RUc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE1BQU0sT0FBTyxtQkFBbUI7SUFtRjlCO0lBQ0k7O09BRUc7SUFDSSxPQWUrQjtJQUN0Qzs7T0FFRztJQUNILGNBQXVCLEVBQ3ZCLG9CQUFtRjtRQXBCNUUsWUFBTyxHQUFQLE9BQU8sQ0Fld0I7UUFoRzFDOzs7V0FHRztRQUNILGNBQVMsR0FBRyxLQUFLLENBQUM7UUFrR2hCLFNBQVMsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDN0QsU0FBUyxJQUFJLFdBQVcsQ0FBQyxPQUFPLE9BQU8sRUFBRSxVQUFVLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFRO0lBQ2hDLE9BQU8sR0FBRyxZQUFZLG1CQUFtQixDQUFDO0FBQzVDLENBQUM7QUFFRCxpRkFBaUY7QUFDakYsMEJBQTBCO0FBQzFCLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdEZsYWdzfSBmcm9tICcuLi8uLi9kaS9pbnRlcmZhY2UvaW5qZWN0b3InO1xuaW1wb3J0IHtQcm92aWRlclRva2VufSBmcm9tICcuLi8uLi9kaS9wcm92aWRlcl90b2tlbic7XG5pbXBvcnQge2Fzc2VydERlZmluZWQsIGFzc2VydEVxdWFsfSBmcm9tICcuLi8uLi91dGlsL2Fzc2VydCc7XG5cbmltcG9ydCB7VERpcmVjdGl2ZUhvc3ROb2RlfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHtMVmlldywgVERhdGF9IGZyb20gJy4vdmlldyc7XG5cbi8qKlxuICogT2Zmc2V0cyBvZiB0aGUgYE5vZGVJbmplY3RvcmAgZGF0YSBzdHJ1Y3R1cmUgaW4gdGhlIGV4cGFuZG8uXG4gKlxuICogYE5vZGVJbmplY3RvcmAgaXMgc3RvcmVkIGluIGJvdGggYExWaWV3YCBhcyB3ZWxsIGFzIGBUVmlldy5kYXRhYC4gQWxsIHN0b3JhZ2UgcmVxdWlyZXMgOSB3b3Jkcy5cbiAqIEZpcnN0IDggYXJlIHJlc2VydmVkIGZvciBibG9vbSBmaWx0ZXIgYW5kIHRoZSA5dGggaXMgcmVzZXJ2ZWQgZm9yIHRoZSBhc3NvY2lhdGVkIGBUTm9kZWAgYXMgd2VsbFxuICogYXMgcGFyZW50IGBOb2RlSW5qZWN0b3JgIHBvaW50ZXIuIEFsbCBpbmRleGVzIGFyZSBzdGFydGluZyB3aXRoIGBpbmRleGAgYW5kIGhhdmUgYW4gb2Zmc2V0IGFzXG4gKiBzaG93bi5cbiAqXG4gKiBgTFZpZXdgIGxheW91dDpcbiAqIGBgYFxuICogaW5kZXggKyAwOiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyAxOiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyAyOiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyAzOiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyA0OiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyA1OiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyA2OiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyA3OiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyA4OiBjdW11bGF0aXZlIGJsb29tIGZpbHRlclxuICogaW5kZXggKyBQQVJFTlQ6IEluZGV4IHRvIHRoZSBwYXJlbnQgaW5qZWN0b3IuIFNlZSBgUmVsYXRpdmVJbmplY3RvckxvY2F0aW9uYFxuICogICAgICAgICAgICAgICAgIGBjb25zdCBwYXJlbnQgPSBsVmlld1tpbmRleCArIE5vZGVJbmplY3Rvck9mZnNldC5QQVJFTlRdYFxuICogYGBgXG4gKlxuICogYFRWaWV3RGF0YWAgbGF5b3V0OlxuICogYGBgXG4gKiBpbmRleCArIDA6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDE6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDI6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDM6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDQ6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDU6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDY6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDc6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIDg6IGN1bXVsYXRpdmUgYmxvb20gZmlsdGVyXG4gKiBpbmRleCArIFROT0RFOiBUTm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBgTm9kZUluamVjdG9yYFxuICogICAgICAgICAgICAgICAgYGNvbnN0IHROb2RlID0gdFZpZXcuZGF0YVtpbmRleCArIE5vZGVJbmplY3Rvck9mZnNldC5UTk9ERV1gXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gTm9kZUluamVjdG9yT2Zmc2V0IHtcbiAgVE5PREUgPSA4LFxuICBQQVJFTlQgPSA4LFxuICBCTE9PTV9TSVpFID0gOCxcbiAgU0laRSA9IDksXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlbGF0aXZlIGxvY2F0aW9uIG9mIHBhcmVudCBpbmplY3Rvci5cbiAqXG4gKiBUaGUgaW50ZXJmYWNlcyBlbmNvZGVzIG51bWJlciBvZiBwYXJlbnRzIGBMVmlld2BzIHRvIHRyYXZlcnNlIGFuZCBpbmRleCBpbiB0aGUgYExWaWV3YFxuICogcG9pbnRpbmcgdG8gdGhlIHBhcmVudCBpbmplY3Rvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24ge1xuICBfX2JyYW5kX186ICdSZWxhdGl2ZUluamVjdG9yTG9jYXRpb25GbGFncyc7XG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIFJlbGF0aXZlSW5qZWN0b3JMb2NhdGlvbkZsYWdzIHtcbiAgSW5qZWN0b3JJbmRleE1hc2sgPSAwYjExMTExMTExMTExMTExMSxcbiAgVmlld09mZnNldFNoaWZ0ID0gMTYsXG4gIE5PX1BBUkVOVCA9IC0xLFxufVxuXG5leHBvcnQgY29uc3QgTk9fUEFSRU5UX0lOSkVDVE9SOiBSZWxhdGl2ZUluamVjdG9yTG9jYXRpb24gPSAtMSBhcyBhbnk7XG5cbi8qKlxuICogRWFjaCBpbmplY3RvciBpcyBzYXZlZCBpbiA5IGNvbnRpZ3VvdXMgc2xvdHMgaW4gYExWaWV3YCBhbmQgOSBjb250aWd1b3VzIHNsb3RzIGluXG4gKiBgVFZpZXcuZGF0YWAuIFRoaXMgYWxsb3dzIHVzIHRvIHN0b3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IG5vZGUncyB0b2tlbnMgKHdoaWNoXG4gKiBjYW4gYmUgc2hhcmVkIGluIGBUVmlld2ApIGFzIHdlbGwgYXMgdGhlIHRva2VucyBvZiBpdHMgYW5jZXN0b3Igbm9kZXMgKHdoaWNoIGNhbm5vdCBiZVxuICogc2hhcmVkLCBzbyB0aGV5IGxpdmUgaW4gYExWaWV3YCkuXG4gKlxuICogRWFjaCBvZiB0aGVzZSBzbG90cyAoYXNpZGUgZnJvbSB0aGUgbGFzdCBzbG90KSBjb250YWlucyBhIGJsb29tIGZpbHRlci4gVGhpcyBibG9vbSBmaWx0ZXJcbiAqIGRldGVybWluZXMgd2hldGhlciBhIGRpcmVjdGl2ZSBpcyBhdmFpbGFibGUgb24gdGhlIGFzc29jaWF0ZWQgbm9kZSBvciBub3QuIFRoaXMgcHJldmVudHMgdXNcbiAqIGZyb20gc2VhcmNoaW5nIHRoZSBkaXJlY3RpdmVzIGFycmF5IGF0IHRoaXMgbGV2ZWwgdW5sZXNzIGl0J3MgcHJvYmFibGUgdGhlIGRpcmVjdGl2ZSBpcyBpbiBpdC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jsb29tX2ZpbHRlciBmb3IgbW9yZSBhYm91dCBibG9vbSBmaWx0ZXJzLlxuICpcbiAqIEJlY2F1c2UgYWxsIGluamVjdG9ycyBoYXZlIGJlZW4gZmxhdHRlbmVkIGludG8gYExWaWV3YCBhbmQgYFRWaWV3RGF0YWAsIHRoZXkgY2Fubm90IHR5cGVkXG4gKiB1c2luZyBpbnRlcmZhY2VzIGFzIHRoZXkgd2VyZSBwcmV2aW91c2x5LiBUaGUgc3RhcnQgaW5kZXggb2YgZWFjaCBgTEluamVjdG9yYCBhbmQgYFRJbmplY3RvcmBcbiAqIHdpbGwgZGlmZmVyIGJhc2VkIG9uIHdoZXJlIGl0IGlzIGZsYXR0ZW5lZCBpbnRvIHRoZSBtYWluIGFycmF5LCBzbyBpdCdzIG5vdCBwb3NzaWJsZSB0byBrbm93XG4gKiB0aGUgaW5kaWNlcyBhaGVhZCBvZiB0aW1lIGFuZCBzYXZlIHRoZWlyIHR5cGVzIGhlcmUuIFRoZSBpbnRlcmZhY2VzIGFyZSBzdGlsbCBpbmNsdWRlZCBoZXJlXG4gKiBmb3IgZG9jdW1lbnRhdGlvbiBwdXJwb3Nlcy5cbiAqXG4gKiBleHBvcnQgaW50ZXJmYWNlIExJbmplY3RvciBleHRlbmRzIEFycmF5PGFueT4ge1xuICpcbiAqICAgIC8vIEN1bXVsYXRpdmUgYmxvb20gZm9yIGRpcmVjdGl2ZSBJRHMgMC0zMSAgKElEcyBhcmUgJSBCTE9PTV9TSVpFKVxuICogICAgWzBdOiBudW1iZXI7XG4gKlxuICogICAgLy8gQ3VtdWxhdGl2ZSBibG9vbSBmb3IgZGlyZWN0aXZlIElEcyAzMi02M1xuICogICAgWzFdOiBudW1iZXI7XG4gKlxuICogICAgLy8gQ3VtdWxhdGl2ZSBibG9vbSBmb3IgZGlyZWN0aXZlIElEcyA2NC05NVxuICogICAgWzJdOiBudW1iZXI7XG4gKlxuICogICAgLy8gQ3VtdWxhdGl2ZSBibG9vbSBmb3IgZGlyZWN0aXZlIElEcyA5Ni0xMjdcbiAqICAgIFszXTogbnVtYmVyO1xuICpcbiAqICAgIC8vIEN1bXVsYXRpdmUgYmxvb20gZm9yIGRpcmVjdGl2ZSBJRHMgMTI4LTE1OVxuICogICAgWzRdOiBudW1iZXI7XG4gKlxuICogICAgLy8gQ3VtdWxhdGl2ZSBibG9vbSBmb3IgZGlyZWN0aXZlIElEcyAxNjAgLSAxOTFcbiAqICAgIFs1XTogbnVtYmVyO1xuICpcbiAqICAgIC8vIEN1bXVsYXRpdmUgYmxvb20gZm9yIGRpcmVjdGl2ZSBJRHMgMTkyIC0gMjIzXG4gKiAgICBbNl06IG51bWJlcjtcbiAqXG4gKiAgICAvLyBDdW11bGF0aXZlIGJsb29tIGZvciBkaXJlY3RpdmUgSURzIDIyNCAtIDI1NVxuICogICAgWzddOiBudW1iZXI7XG4gKlxuICogICAgLy8gV2UgbmVlZCB0byBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgaW5qZWN0b3IncyBwYXJlbnQgc28gREkgY2FuIGtlZXAgbG9va2luZyB1cFxuICogICAgLy8gdGhlIGluamVjdG9yIHRyZWUgdW50aWwgaXQgZmluZHMgdGhlIGRlcGVuZGVuY3kgaXQncyBsb29raW5nIGZvci5cbiAqICAgIFtQQVJFTlRfSU5KRUNUT1JdOiBudW1iZXI7XG4gKiB9XG4gKlxuICogZXhwb3J0IGludGVyZmFjZSBUSW5qZWN0b3IgZXh0ZW5kcyBBcnJheTxhbnk+IHtcbiAqXG4gKiAgICAvLyBTaGFyZWQgbm9kZSBibG9vbSBmb3IgZGlyZWN0aXZlIElEcyAwLTMxICAoSURzIGFyZSAlIEJMT09NX1NJWkUpXG4gKiAgICBbMF06IG51bWJlcjtcbiAqXG4gKiAgICAvLyBTaGFyZWQgbm9kZSBibG9vbSBmb3IgZGlyZWN0aXZlIElEcyAzMi02M1xuICogICAgWzFdOiBudW1iZXI7XG4gKlxuICogICAgLy8gU2hhcmVkIG5vZGUgYmxvb20gZm9yIGRpcmVjdGl2ZSBJRHMgNjQtOTVcbiAqICAgIFsyXTogbnVtYmVyO1xuICpcbiAqICAgIC8vIFNoYXJlZCBub2RlIGJsb29tIGZvciBkaXJlY3RpdmUgSURzIDk2LTEyN1xuICogICAgWzNdOiBudW1iZXI7XG4gKlxuICogICAgLy8gU2hhcmVkIG5vZGUgYmxvb20gZm9yIGRpcmVjdGl2ZSBJRHMgMTI4LTE1OVxuICogICAgWzRdOiBudW1iZXI7XG4gKlxuICogICAgLy8gU2hhcmVkIG5vZGUgYmxvb20gZm9yIGRpcmVjdGl2ZSBJRHMgMTYwIC0gMTkxXG4gKiAgICBbNV06IG51bWJlcjtcbiAqXG4gKiAgICAvLyBTaGFyZWQgbm9kZSBibG9vbSBmb3IgZGlyZWN0aXZlIElEcyAxOTIgLSAyMjNcbiAqICAgIFs2XTogbnVtYmVyO1xuICpcbiAqICAgIC8vIFNoYXJlZCBub2RlIGJsb29tIGZvciBkaXJlY3RpdmUgSURzIDIyNCAtIDI1NVxuICogICAgWzddOiBudW1iZXI7XG4gKlxuICogICAgLy8gTmVjZXNzYXJ5IHRvIGZpbmQgZGlyZWN0aXZlIGluZGljZXMgZm9yIGEgcGFydGljdWxhciBub2RlLlxuICogICAgW1ROT0RFXTogVEVsZW1lbnROb2RlfFRFbGVtZW50Q29udGFpbmVyTm9kZXxUQ29udGFpbmVyTm9kZTtcbiAqICB9XG4gKi9cblxuLyoqXG4gKiBGYWN0b3J5IGZvciBjcmVhdGluZyBpbnN0YW5jZXMgb2YgaW5qZWN0b3JzIGluIHRoZSBOb2RlSW5qZWN0b3IuXG4gKlxuICogVGhpcyBmYWN0b3J5IGlzIGNvbXBsaWNhdGVkIGJ5IHRoZSBmYWN0IHRoYXQgaXQgY2FuIHJlc29sdmUgYG11bHRpYCBmYWN0b3JpZXMgYXMgd2VsbC5cbiAqXG4gKiBOT1RFOiBTb21lIG9mIHRoZSBmaWVsZHMgYXJlIG9wdGlvbmFsIHdoaWNoIG1lYW5zIHRoYXQgdGhpcyBjbGFzcyBoYXMgdHdvIGhpZGRlbiBjbGFzc2VzLlxuICogLSBPbmUgd2l0aG91dCBgbXVsdGlgIHN1cHBvcnQgKG1vc3QgY29tbW9uKVxuICogLSBPbmUgd2l0aCBgbXVsdGlgIHZhbHVlcywgKHJhcmUpLlxuICpcbiAqIFNpbmNlIFZNcyBjYW4gY2FjaGUgdXAgdG8gNCBpbmxpbmUgaGlkZGVuIGNsYXNzZXMgdGhpcyBpcyBPSy5cbiAqXG4gKiAtIFNpbmdsZSBmYWN0b3J5OiBPbmx5IGByZXNvbHZpbmdgIGFuZCBgZmFjdG9yeWAgaXMgZGVmaW5lZC5cbiAqIC0gYHByb3ZpZGVyc2AgZmFjdG9yeTogYGNvbXBvbmVudFByb3ZpZGVyc2AgaXMgYSBudW1iZXIgYW5kIGBpbmRleCA9IC0xYC5cbiAqIC0gYHZpZXdQcm92aWRlcnNgIGZhY3Rvcnk6IGBjb21wb25lbnRQcm92aWRlcnNgIGlzIGEgbnVtYmVyIGFuZCBgaW5kZXhgIHBvaW50cyB0byBgcHJvdmlkZXJzYC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVJbmplY3RvckZhY3Rvcnkge1xuICAvKipcbiAgICogVGhlIGluamVjdCBpbXBsZW1lbnRhdGlvbiB0byBiZSBhY3RpdmF0ZWQgd2hlbiB1c2luZyB0aGUgZmFjdG9yeS5cbiAgICovXG4gIGluamVjdEltcGw6IG51bGx8KDxUPih0b2tlbjogUHJvdmlkZXJUb2tlbjxUPiwgZmxhZ3M/OiBJbmplY3RGbGFncykgPT4gVCk7XG5cbiAgLyoqXG4gICAqIE1hcmtlciBzZXQgdG8gdHJ1ZSBkdXJpbmcgZmFjdG9yeSBpbnZvY2F0aW9uIHRvIHNlZSBpZiB3ZSBnZXQgaW50byByZWN1cnNpdmUgbG9vcC5cbiAgICogUmVjdXJzaXZlIGxvb3AgY2F1c2VzIGFuIGVycm9yIHRvIGJlIGRpc3BsYXllZC5cbiAgICovXG4gIHJlc29sdmluZyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGF0IHRoZSB0b2tlbiBjYW4gc2VlIG90aGVyIFRva2VucyBkZWNsYXJlZCBpbiBgdmlld1Byb3ZpZGVyc2Agb24gdGhlIHNhbWUgbm9kZS5cbiAgICovXG4gIGNhblNlZVZpZXdQcm92aWRlcnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGZhY3RvcmllcyB0byB1c2UgaW4gY2FzZSBvZiBgbXVsdGlgIHByb3ZpZGVyLlxuICAgKi9cbiAgbXVsdGk/OiBBcnJheTwoKSA9PiBhbnk+O1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgYG11bHRpYC1wcm92aWRlcnMgd2hpY2ggYmVsb25nIHRvIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugd2hlbiBtdWx0aXBsZSBjb21wb25lbnRzIGFuZCBkaXJlY3RpdmVzIGRlY2xhcmUgdGhlIGBtdWx0aWAgcHJvdmlkZXJcbiAgICogdGhleSBoYXZlIHRvIGJlIGNvbmNhdGVuYXRlZCBpbiB0aGUgY29ycmVjdCBvcmRlci5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogSWYgd2UgaGF2ZSBhIGNvbXBvbmVudCBhbmQgZGlyZWN0aXZlIGFjdGl2ZSBhbiBhIHNpbmdsZSBlbGVtZW50IGFzIGRlY2xhcmVkIGhlcmVcbiAgICogYGBgXG4gICAqIGNvbXBvbmVudDpcbiAgICogICBwcm92aWRlcnM6IFsge3Byb3ZpZGU6IFN0cmluZywgdXNlVmFsdWU6ICdjb21wb25lbnQnLCBtdWx0aTogdHJ1ZX0gXSxcbiAgICogICB2aWV3UHJvdmlkZXJzOiBbIHtwcm92aWRlOiBTdHJpbmcsIHVzZVZhbHVlOiAnY29tcG9uZW50VmlldycsIG11bHRpOiB0cnVlfSBdLFxuICAgKlxuICAgKiBkaXJlY3RpdmU6XG4gICAqICAgcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBTdHJpbmcsIHVzZVZhbHVlOiAnZGlyZWN0aXZlJywgbXVsdGk6IHRydWV9IF0sXG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGVuIHRoZSBleHBlY3RlZCByZXN1bHRzIGFyZTpcbiAgICpcbiAgICogYGBgXG4gICAqIHByb3ZpZGVyczogWydjb21wb25lbnQnLCAnZGlyZWN0aXZlJ11cbiAgICogdmlld1Byb3ZpZGVyczogWydjb21wb25lbnQnLCAnY29tcG9uZW50VmlldycsICdkaXJlY3RpdmUnXVxuICAgKiBgYGBcbiAgICpcbiAgICogVGhlIHdheSB0byB0aGluayBhYm91dCBpdCBpcyB0aGF0IHRoZSBgdmlld1Byb3ZpZGVyc2AgaGF2ZSBiZWVuIGluc2VydGVkIGFmdGVyIHRoZSBjb21wb25lbnRcbiAgICogYnV0IGJlZm9yZSB0aGUgZGlyZWN0aXZlcywgd2hpY2ggaXMgd2h5IHdlIG5lZWQgdG8ga25vdyBob3cgbWFueSBgbXVsdGlgcyBoYXZlIGJlZW4gZGVjbGFyZWQgYnlcbiAgICogdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudFByb3ZpZGVycz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ3VycmVudCBpbmRleCBvZiB0aGUgRmFjdG9yeSBpbiB0aGUgYGRhdGFgLiBOZWVkZWQgZm9yIGB2aWV3UHJvdmlkZXJzYCBhbmQgYHByb3ZpZGVyc2AgbWVyZ2luZy5cbiAgICogU2VlIGBwcm92aWRlckZhY3RvcnlgLlxuICAgKi9cbiAgaW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJlY2F1c2UgdGhlIHNhbWUgYG11bHRpYCBwcm92aWRlciBjYW4gYmUgZGVjbGFyZWQgaW4gYHByb3ZpZGVyc2AgYW5kIGB2aWV3UHJvdmlkZXJzYCBpdCBpc1xuICAgKiBwb3NzaWJsZSBmb3IgYHZpZXdQcm92aWRlcnNgIHRvIHNoYWRvdyB0aGUgYHByb3ZpZGVyc2AuIEZvciB0aGlzIHJlYXNvbiB3ZSBzdG9yZSB0aGVcbiAgICogYHByb3ZpZGVGYWN0b3J5YCBvZiB0aGUgYHByb3ZpZGVyc2Agc28gdGhhdCBgcHJvdmlkZXJzYCBjYW4gYmUgZXh0ZW5kZWQgd2l0aCBgdmlld1Byb3ZpZGVyc2AuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIEdpdmVuOlxuICAgKiBgYGBcbiAgICogcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBTdHJpbmcsIHVzZVZhbHVlOiAnYWxsJywgbXVsdGk6IHRydWV9IF0sXG4gICAqIHZpZXdQcm92aWRlcnM6IFsge3Byb3ZpZGU6IFN0cmluZywgdXNlVmFsdWU6ICd2aWV3T25seScsIG11bHRpOiB0cnVlfSBdLFxuICAgKiBgYGBcbiAgICpcbiAgICogV2UgaGF2ZSB0byByZXR1cm4gYFsnYWxsJ11gIGluIGNhc2Ugb2YgY29udGVudCBpbmplY3Rpb24sIGJ1dCBgWydhbGwnLCAndmlld09ubHknXWAgaW4gY2FzZVxuICAgKiBvZiB2aWV3IGluamVjdGlvbi4gV2UgZnVydGhlciBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBzaGFyZWQgaW5zdGFuY2VzIChpbiBvdXIgY2FzZVxuICAgKiBgYWxsYCkgYXJlIHRoZSBleGFjdCBzYW1lIGluc3RhbmNlIGluIGJvdGggdGhlIGNvbnRlbnQgYXMgd2VsbCBhcyB0aGUgdmlldyBpbmplY3Rpb24uIChXZVxuICAgKiBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGRvbid0IGRvdWJsZSBpbnN0YW50aWF0ZS4pIEZvciB0aGlzIHJlYXNvbiB0aGUgYHZpZXdQcm92aWRlcnNgXG4gICAqIGBGYWN0b3J5YCBoYXMgYSBwb2ludGVyIHRvIHRoZSBzaGFkb3dlZCBgcHJvdmlkZXJzYCBmYWN0b3J5IHNvIHRoYXQgaXQgY2FuIGluc3RhbnRpYXRlIHRoZVxuICAgKiBgcHJvdmlkZXJzYCAoYFsnYWxsJ11gKSBhbmQgdGhlbiBleHRlbmQgaXQgd2l0aCBgdmlld1Byb3ZpZGVyc2AgKGBbJ2FsbCddICsgWyd2aWV3T25seSddID1cbiAgICogWydhbGwnLCAndmlld09ubHknXWApLlxuICAgKi9cbiAgcHJvdmlkZXJGYWN0b3J5PzogTm9kZUluamVjdG9yRmFjdG9yeXxudWxsO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgICAvKipcbiAgICAgICAqIEZhY3RvcnkgdG8gaW52b2tlIGluIG9yZGVyIHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZS5cbiAgICAgICAqL1xuICAgICAgcHVibGljIGZhY3Rvcnk6XG4gICAgICAgICAgKHRoaXM6IE5vZGVJbmplY3RvckZhY3RvcnksIF86IHVuZGVmaW5lZCxcbiAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIGFycmF5IHdoZXJlIGluamVjdGFibGVzIHRva2VucyBhcmUgc3RvcmVkLiBUaGlzIGlzIHVzZWQgaW5cbiAgICAgICAgICAgICogY2FzZSBvZiBhbiBlcnJvciByZXBvcnRpbmcgdG8gcHJvZHVjZSBmcmllbmRsaWVyIGVycm9ycy5cbiAgICAgICAgICAgICovXG4gICAgICAgICAgIHREYXRhOiBURGF0YSxcbiAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIGFycmF5IHdoZXJlIGV4aXN0aW5nIGluc3RhbmNlcyBvZiBpbmplY3RhYmxlcyBhcmUgc3RvcmVkLiBUaGlzIGlzIHVzZWQgaW4gY2FzZVxuICAgICAgICAgICAgKiBvZiBtdWx0aSBzaGFkb3cgaXMgbmVlZGVkLiBTZWUgYG11bHRpYCBmaWVsZCBkb2N1bWVudGF0aW9uLlxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgbFZpZXc6IExWaWV3LFxuICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogVGhlIFROb2RlIG9mIHRoZSBzYW1lIGVsZW1lbnQgaW5qZWN0b3IuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICB0Tm9kZTogVERpcmVjdGl2ZUhvc3ROb2RlKSA9PiBhbnksXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byBgdHJ1ZWAgaWYgdGhlIHRva2VuIGlzIGRlY2xhcmVkIGluIGB2aWV3UHJvdmlkZXJzYCAob3IgaWYgaXQgaXMgY29tcG9uZW50KS5cbiAgICAgICAqL1xuICAgICAgaXNWaWV3UHJvdmlkZXI6IGJvb2xlYW4sXG4gICAgICBpbmplY3RJbXBsZW1lbnRhdGlvbjogbnVsbHwoPFQ+KHRva2VuOiBQcm92aWRlclRva2VuPFQ+LCBmbGFncz86IEluamVjdEZsYWdzKSA9PiBUKSkge1xuICAgIG5nRGV2TW9kZSAmJiBhc3NlcnREZWZpbmVkKGZhY3RvcnksICdGYWN0b3J5IG5vdCBzcGVjaWZpZWQnKTtcbiAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RXF1YWwodHlwZW9mIGZhY3RvcnksICdmdW5jdGlvbicsICdFeHBlY3RlZCBmYWN0b3J5IGZ1bmN0aW9uLicpO1xuICAgIHRoaXMuY2FuU2VlVmlld1Byb3ZpZGVycyA9IGlzVmlld1Byb3ZpZGVyO1xuICAgIHRoaXMuaW5qZWN0SW1wbCA9IGluamVjdEltcGxlbWVudGF0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZhY3Rvcnkob2JqOiBhbnkpOiBvYmogaXMgTm9kZUluamVjdG9yRmFjdG9yeSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBOb2RlSW5qZWN0b3JGYWN0b3J5O1xufVxuXG4vLyBOb3RlOiBUaGlzIGhhY2sgaXMgbmVjZXNzYXJ5IHNvIHdlIGRvbid0IGVycm9uZW91c2x5IGdldCBhIGNpcmN1bGFyIGRlcGVuZGVuY3lcbi8vIGZhaWx1cmUgYmFzZWQgb24gdHlwZXMuXG5leHBvcnQgY29uc3QgdW51c2VkVmFsdWVFeHBvcnRUb1BsYWNhdGVBamQgPSAxO1xuIl19