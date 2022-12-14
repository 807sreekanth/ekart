/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BROWSER_ANIMATIONS_PROVIDERS, BROWSER_NOOP_ANIMATIONS_PROVIDERS } from './providers';
import * as i0 from "@angular/core";
/**
 * Exports `BrowserModule` with additional [dependency-injection providers](guide/glossary#provider)
 * for use with animations. See [Animations](guide/animations).
 * @publicApi
 */
export class BrowserAnimationsModule {
    /**
     * Configures the module based on the specified object.
     *
     * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
     * @see `BrowserAnimationsModuleConfig`
     *
     * @usageNotes
     * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
     * function as follows:
     * ```
     * @NgModule({
     *   imports: [BrowserAnimationsModule.withConfig(config)]
     * })
     * class MyNgModule {}
     * ```
     */
    static withConfig(config) {
        return {
            ngModule: BrowserAnimationsModule,
            providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS :
                BROWSER_ANIMATIONS_PROVIDERS
        };
    }
}
BrowserAnimationsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: BrowserAnimationsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BrowserAnimationsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.7", ngImport: i0, type: BrowserAnimationsModule, exports: [BrowserModule] });
BrowserAnimationsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: BrowserAnimationsModule, providers: BROWSER_ANIMATIONS_PROVIDERS, imports: [BrowserModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: BrowserAnimationsModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [BrowserModule],
                    providers: BROWSER_ANIMATIONS_PROVIDERS,
                }]
        }] });
/**
 * Returns the set of [dependency-injection providers](guide/glossary#provider)
 * to enable animations in an application. See [animations guide](guide/animations)
 * to learn more about animations in Angular.
 *
 * @usageNotes
 *
 * The function is useful when you want to enable animations in an application
 * bootstrapped using the `bootstrapApplication` function. In this scenario there
 * is no need to import the `BrowserAnimationsModule` NgModule at all, just add
 * providers returned by this function to the `providers` list as show below.
 *
 * ```typescript
 * bootstrapApplication(RootComponent, {
 *   providers: [
 *     provideAnimations()
 *   ]
 * });
 * ```
 *
 * @publicApi
 * @developerPreview
 */
export function provideAnimations() {
    // Return a copy to prevent changes to the original array in case any in-place
    // alterations are performed to the `provideAnimations` call results in app code.
    return [...BROWSER_ANIMATIONS_PROVIDERS];
}
/**
 * A null player that must be imported to allow disabling of animations.
 * @publicApi
 */
export class NoopAnimationsModule {
}
NoopAnimationsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NoopAnimationsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NoopAnimationsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.7", ngImport: i0, type: NoopAnimationsModule, exports: [BrowserModule] });
NoopAnimationsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NoopAnimationsModule, providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS, imports: [BrowserModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: NoopAnimationsModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [BrowserModule],
                    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
                }]
        }] });
/**
 * Returns the set of [dependency-injection providers](guide/glossary#provider)
 * to disable animations in an application. See [animations guide](guide/animations)
 * to learn more about animations in Angular.
 *
 * @usageNotes
 *
 * The function is useful when you want to bootstrap an application using
 * the `bootstrapApplication` function, but you need to disable animations
 * (for example, when running tests).
 *
 * ```typescript
 * bootstrapApplication(RootComponent, {
 *   providers: [
 *     provideNoopAnimations()
 *   ]
 * });
 * ```
 *
 * @publicApi
 * @developerPreview
 */
export function provideNoopAnimations() {
    // Return a copy to prevent changes to the original array in case any in-place
    // alterations are performed to the `provideNoopAnimations` call results in app code.
    return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFzQixRQUFRLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBQyw0QkFBNEIsRUFBRSxpQ0FBaUMsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7QUFjNUY7Ozs7R0FJRztBQUtILE1BQU0sT0FBTyx1QkFBdUI7SUFDbEM7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFxQztRQUVyRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUNuQyw0QkFBNEI7U0FDbkUsQ0FBQztJQUNKLENBQUM7OytIQXhCVSx1QkFBdUI7Z0lBQXZCLHVCQUF1QixZQUh4QixhQUFhO2dJQUdaLHVCQUF1QixhQUZ2Qiw0QkFBNEIsWUFEN0IsYUFBYTtzR0FHWix1QkFBdUI7a0JBSm5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUN4QixTQUFTLEVBQUUsNEJBQTRCO2lCQUN4Qzs7QUE0QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCO0lBQy9CLDhFQUE4RTtJQUM5RSxpRkFBaUY7SUFDakYsT0FBTyxDQUFDLEdBQUcsNEJBQTRCLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7OztHQUdHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjs7NEhBQXBCLG9CQUFvQjs2SEFBcEIsb0JBQW9CLFlBSHJCLGFBQWE7NkhBR1osb0JBQW9CLGFBRnBCLGlDQUFpQyxZQURsQyxhQUFhO3NHQUdaLG9CQUFvQjtrQkFKaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLFNBQVMsRUFBRSxpQ0FBaUM7aUJBQzdDOztBQUlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDSCxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLDhFQUE4RTtJQUM5RSxxRkFBcUY7SUFDckYsT0FBTyxDQUFDLEdBQUcsaUNBQWlDLENBQUMsQ0FBQztBQUNoRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge0JST1dTRVJfQU5JTUFUSU9OU19QUk9WSURFUlMsIEJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSU30gZnJvbSAnLi9wcm92aWRlcnMnO1xuXG4vKipcbiAqIE9iamVjdCB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgYmVoYXZpb3Igb2Yge0BsaW5rIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlfVxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlQ29uZmlnIHtcbiAgLyoqXG4gICAqICBXaGV0aGVyIGFuaW1hdGlvbnMgc2hvdWxkIGJlIGRpc2FibGVkLiBQYXNzaW5nIHRoaXMgaXMgaWRlbnRpY2FsIHRvIHByb3ZpZGluZyB0aGVcbiAgICogYE5vb3BBbmltYXRpb25zTW9kdWxlYCwgYnV0IGl0IGNhbiBiZSBjb250cm9sbGVkIGJhc2VkIG9uIGEgcnVudGltZSB2YWx1ZS5cbiAgICovXG4gIGRpc2FibGVBbmltYXRpb25zPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBFeHBvcnRzIGBCcm93c2VyTW9kdWxlYCB3aXRoIGFkZGl0aW9uYWwgW2RlcGVuZGVuY3ktaW5qZWN0aW9uIHByb3ZpZGVyc10oZ3VpZGUvZ2xvc3NhcnkjcHJvdmlkZXIpXG4gKiBmb3IgdXNlIHdpdGggYW5pbWF0aW9ucy4gU2VlIFtBbmltYXRpb25zXShndWlkZS9hbmltYXRpb25zKS5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0Jyb3dzZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IEJST1dTRVJfQU5JTUFUSU9OU19QUk9WSURFUlMsXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIG1vZHVsZSBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBPYmplY3QgdXNlZCB0byBjb25maWd1cmUgdGhlIGJlaGF2aW9yIG9mIHRoZSBgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVgLlxuICAgKiBAc2VlIGBCcm93c2VyQW5pbWF0aW9uc01vZHVsZUNvbmZpZ2BcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICogV2hlbiByZWdpc3RlcmluZyB0aGUgYEJyb3dzZXJBbmltYXRpb25zTW9kdWxlYCwgeW91IGNhbiB1c2UgdGhlIGB3aXRoQ29uZmlnYFxuICAgKiBmdW5jdGlvbiBhcyBmb2xsb3dzOlxuICAgKiBgYGBcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBpbXBvcnRzOiBbQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUud2l0aENvbmZpZyhjb25maWcpXVxuICAgKiB9KVxuICAgKiBjbGFzcyBNeU5nTW9kdWxlIHt9XG4gICAqIGBgYFxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBCcm93c2VyQW5pbWF0aW9uc01vZHVsZUNvbmZpZyk6XG4gICAgICBNb2R1bGVXaXRoUHJvdmlkZXJzPEJyb3dzZXJBbmltYXRpb25zTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogY29uZmlnLmRpc2FibGVBbmltYXRpb25zID8gQlJPV1NFUl9OT09QX0FOSU1BVElPTlNfUFJPVklERVJTIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQlJPV1NFUl9BTklNQVRJT05TX1BST1ZJREVSU1xuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzZXQgb2YgW2RlcGVuZGVuY3ktaW5qZWN0aW9uIHByb3ZpZGVyc10oZ3VpZGUvZ2xvc3NhcnkjcHJvdmlkZXIpXG4gKiB0byBlbmFibGUgYW5pbWF0aW9ucyBpbiBhbiBhcHBsaWNhdGlvbi4gU2VlIFthbmltYXRpb25zIGd1aWRlXShndWlkZS9hbmltYXRpb25zKVxuICogdG8gbGVhcm4gbW9yZSBhYm91dCBhbmltYXRpb25zIGluIEFuZ3VsYXIuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBUaGUgZnVuY3Rpb24gaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gZW5hYmxlIGFuaW1hdGlvbnMgaW4gYW4gYXBwbGljYXRpb25cbiAqIGJvb3RzdHJhcHBlZCB1c2luZyB0aGUgYGJvb3RzdHJhcEFwcGxpY2F0aW9uYCBmdW5jdGlvbi4gSW4gdGhpcyBzY2VuYXJpbyB0aGVyZVxuICogaXMgbm8gbmVlZCB0byBpbXBvcnQgdGhlIGBCcm93c2VyQW5pbWF0aW9uc01vZHVsZWAgTmdNb2R1bGUgYXQgYWxsLCBqdXN0IGFkZFxuICogcHJvdmlkZXJzIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gdG8gdGhlIGBwcm92aWRlcnNgIGxpc3QgYXMgc2hvdyBiZWxvdy5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBib290c3RyYXBBcHBsaWNhdGlvbihSb290Q29tcG9uZW50LCB7XG4gKiAgIHByb3ZpZGVyczogW1xuICogICAgIHByb3ZpZGVBbmltYXRpb25zKClcbiAqICAgXVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZGV2ZWxvcGVyUHJldmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUFuaW1hdGlvbnMoKTogUHJvdmlkZXJbXSB7XG4gIC8vIFJldHVybiBhIGNvcHkgdG8gcHJldmVudCBjaGFuZ2VzIHRvIHRoZSBvcmlnaW5hbCBhcnJheSBpbiBjYXNlIGFueSBpbi1wbGFjZVxuICAvLyBhbHRlcmF0aW9ucyBhcmUgcGVyZm9ybWVkIHRvIHRoZSBgcHJvdmlkZUFuaW1hdGlvbnNgIGNhbGwgcmVzdWx0cyBpbiBhcHAgY29kZS5cbiAgcmV0dXJuIFsuLi5CUk9XU0VSX0FOSU1BVElPTlNfUFJPVklERVJTXTtcbn1cblxuLyoqXG4gKiBBIG51bGwgcGxheWVyIHRoYXQgbXVzdCBiZSBpbXBvcnRlZCB0byBhbGxvdyBkaXNhYmxpbmcgb2YgYW5pbWF0aW9ucy5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0Jyb3dzZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IEJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSUyxcbn0pXG5leHBvcnQgY2xhc3MgTm9vcEFuaW1hdGlvbnNNb2R1bGUge1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNldCBvZiBbZGVwZW5kZW5jeS1pbmplY3Rpb24gcHJvdmlkZXJzXShndWlkZS9nbG9zc2FyeSNwcm92aWRlcilcbiAqIHRvIGRpc2FibGUgYW5pbWF0aW9ucyBpbiBhbiBhcHBsaWNhdGlvbi4gU2VlIFthbmltYXRpb25zIGd1aWRlXShndWlkZS9hbmltYXRpb25zKVxuICogdG8gbGVhcm4gbW9yZSBhYm91dCBhbmltYXRpb25zIGluIEFuZ3VsYXIuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBUaGUgZnVuY3Rpb24gaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gYm9vdHN0cmFwIGFuIGFwcGxpY2F0aW9uIHVzaW5nXG4gKiB0aGUgYGJvb3RzdHJhcEFwcGxpY2F0aW9uYCBmdW5jdGlvbiwgYnV0IHlvdSBuZWVkIHRvIGRpc2FibGUgYW5pbWF0aW9uc1xuICogKGZvciBleGFtcGxlLCB3aGVuIHJ1bm5pbmcgdGVzdHMpLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGJvb3RzdHJhcEFwcGxpY2F0aW9uKFJvb3RDb21wb25lbnQsIHtcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgcHJvdmlkZU5vb3BBbmltYXRpb25zKClcbiAqICAgXVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZGV2ZWxvcGVyUHJldmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZU5vb3BBbmltYXRpb25zKCk6IFByb3ZpZGVyW10ge1xuICAvLyBSZXR1cm4gYSBjb3B5IHRvIHByZXZlbnQgY2hhbmdlcyB0byB0aGUgb3JpZ2luYWwgYXJyYXkgaW4gY2FzZSBhbnkgaW4tcGxhY2VcbiAgLy8gYWx0ZXJhdGlvbnMgYXJlIHBlcmZvcm1lZCB0byB0aGUgYHByb3ZpZGVOb29wQW5pbWF0aW9uc2AgY2FsbCByZXN1bHRzIGluIGFwcCBjb2RlLlxuICByZXR1cm4gWy4uLkJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSU107XG59XG4iXX0=