/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CommonModule, DOCUMENT, XhrFactory, ɵPLATFORM_BROWSER_ID as PLATFORM_BROWSER_ID } from '@angular/common';
import { APP_ID, ApplicationModule, createPlatformFactory, ErrorHandler, Inject, InjectionToken, NgModule, NgZone, Optional, PLATFORM_ID, PLATFORM_INITIALIZER, platformCore, RendererFactory2, SkipSelf, Testability, TestabilityRegistry, ɵINJECTOR_SCOPE as INJECTOR_SCOPE, ɵinternalCreateApplication as internalCreateApplication, ɵsetDocument, ɵTESTABILITY as TESTABILITY, ɵTESTABILITY_GETTER as TESTABILITY_GETTER } from '@angular/core';
import { BrowserDomAdapter } from './browser/browser_adapter';
import { SERVER_TRANSITION_PROVIDERS, TRANSITION_ID } from './browser/server-transition';
import { BrowserGetTestability } from './browser/testability';
import { BrowserXhr } from './browser/xhr';
import { DomRendererFactory2 } from './dom/dom_renderer';
import { DomEventsPlugin } from './dom/events/dom_events';
import { EVENT_MANAGER_PLUGINS, EventManager } from './dom/events/event_manager';
import { KeyEventsPlugin } from './dom/events/key_events';
import { DomSharedStylesHost, SharedStylesHost } from './dom/shared_styles_host';
import * as i0 from "@angular/core";
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || !!ngDevMode;
/**
 * Bootstraps an instance of an Angular application and renders a standalone component as the
 * application's root component. More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The root component passed into this function *must* be a standalone one (should have the
 * `standalone: true` flag in the `@Component` decorator config).
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   template: 'Hello world!'
 * })
 * class RootComponent {}
 *
 * const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
 * ```
 *
 * You can add the list of providers that should be available in the application injector by
 * specifying the `providers` field in an object passed as the second argument:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
 *   ]
 * });
 * ```
 *
 * The `importProvidersFrom` helper method can be used to collect all providers from any
 * existing NgModule (and transitively from all NgModules that it imports):
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(SomeNgModule)
 *   ]
 * });
 * ```
 *
 * Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
 * default. You can add [Testability](api/core/Testability) by getting the list of necessary
 * providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
 * array, for example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
 * ```
 *
 * @param rootComponent A reference to a standalone component that should be rendered.
 * @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 * @developerPreview
 */
export function bootstrapApplication(rootComponent, options) {
    return internalCreateApplication({ rootComponent, ...createProvidersConfig(options) });
}
/**
 * Create an instance of an Angular application without bootstrapping any components. This is useful
 * for the situation where one wants to decouple application environment creation (a platform and
 * associated injectors) from rendering components on a screen. Components can be subsequently
 * bootstrapped on the returned `ApplicationRef`.
 *
 * @param options Extra configuration for the application environment, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 * @developerPreview
 */
export function createApplication(options) {
    return internalCreateApplication(createProvidersConfig(options));
}
function createProvidersConfig(options) {
    return {
        appProviders: [
            ...BROWSER_MODULE_PROVIDERS,
            ...(options?.providers ?? []),
        ],
        platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
    };
}
/**
 * Returns a set of providers required to setup [Testability](api/core/Testability) for an
 * application bootstrapped using the `bootstrapApplication` function. The set of providers is
 * needed to support testing an application with Protractor (which relies on the Testability APIs
 * to be present).
 *
 * @returns An array of providers required to setup Testability for an application and make it
 *     available for testing using Protractor.
 *
 * @developerPreview
 * @publicApi
 */
export function provideProtractorTestingSupport() {
    // Return a copy to prevent changes to the original array in case any in-place
    // alterations are performed to the `provideProtractorTestingSupport` call results in app code.
    return [...TESTABILITY_PROVIDERS];
}
export function initDomAdapter() {
    BrowserDomAdapter.makeCurrent();
}
export function errorHandler() {
    return new ErrorHandler();
}
export function _document() {
    // Tell ivy about the global document
    ɵsetDocument(document);
    return document;
}
export const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
    { provide: PLATFORM_ID, useValue: PLATFORM_BROWSER_ID },
    { provide: PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
    { provide: DOCUMENT, useFactory: _document, deps: [] },
];
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */
export const platformBrowser = createPlatformFactory(platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
/**
 * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
 * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
 * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
 * `BrowserModule` providers without referencing the module itself.
 */
const BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(NG_DEV_MODE ? 'BrowserModule Providers Marker' : '');
const TESTABILITY_PROVIDERS = [
    {
        provide: TESTABILITY_GETTER,
        useClass: BrowserGetTestability,
        deps: [],
    },
    {
        provide: TESTABILITY,
        useClass: Testability,
        deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
    },
    {
        provide: Testability,
        useClass: Testability,
        deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
    }
];
const BROWSER_MODULE_PROVIDERS = [
    { provide: INJECTOR_SCOPE, useValue: 'root' },
    { provide: ErrorHandler, useFactory: errorHandler, deps: [] }, {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: DomEventsPlugin,
        multi: true,
        deps: [DOCUMENT, NgZone, PLATFORM_ID]
    },
    { provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true, deps: [DOCUMENT] }, {
        provide: DomRendererFactory2,
        useClass: DomRendererFactory2,
        deps: [EventManager, DomSharedStylesHost, APP_ID]
    },
    { provide: RendererFactory2, useExisting: DomRendererFactory2 },
    { provide: SharedStylesHost, useExisting: DomSharedStylesHost },
    { provide: DomSharedStylesHost, useClass: DomSharedStylesHost, deps: [DOCUMENT] },
    { provide: EventManager, useClass: EventManager, deps: [EVENT_MANAGER_PLUGINS, NgZone] },
    { provide: XhrFactory, useClass: BrowserXhr, deps: [] },
    NG_DEV_MODE ? { provide: BROWSER_MODULE_PROVIDERS_MARKER, useValue: true } : []
];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
export class BrowserModule {
    constructor(providersAlreadyPresent) {
        if (NG_DEV_MODE && providersAlreadyPresent) {
            throw new Error(`Providers from the \`BrowserModule\` have already been loaded. If you need access ` +
                `to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
        }
    }
    /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     */
    static withServerTransition(params) {
        return {
            ngModule: BrowserModule,
            providers: [
                { provide: APP_ID, useValue: params.appId },
                { provide: TRANSITION_ID, useExisting: APP_ID },
                SERVER_TRANSITION_PROVIDERS,
            ],
        };
    }
}
BrowserModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: BrowserModule, deps: [{ token: BROWSER_MODULE_PROVIDERS_MARKER, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
BrowserModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.7", ngImport: i0, type: BrowserModule, exports: [CommonModule, ApplicationModule] });
BrowserModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: BrowserModule, providers: [
        ...BROWSER_MODULE_PROVIDERS,
        ...TESTABILITY_PROVIDERS
    ], imports: [CommonModule, ApplicationModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: BrowserModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        ...BROWSER_MODULE_PROVIDERS,
                        ...TESTABILITY_PROVIDERS
                    ],
                    exports: [CommonModule, ApplicationModule],
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }, {
                    type: Inject,
                    args: [BROWSER_MODULE_PROVIDERS_MARKER]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXIvc3JjL2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixJQUFJLG1CQUFtQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEgsT0FBTyxFQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBa0IscUJBQXFCLEVBQUUsWUFBWSxFQUE2QixNQUFNLEVBQUUsY0FBYyxFQUF1QixRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUF5QixnQkFBZ0IsRUFBRSxRQUFRLEVBQWtCLFdBQVcsRUFBRSxtQkFBbUIsRUFBUSxlQUFlLElBQUksY0FBYyxFQUFFLDBCQUEwQixJQUFJLHlCQUF5QixFQUFFLFlBQVksRUFBRSxZQUFZLElBQUksV0FBVyxFQUFFLG1CQUFtQixJQUFJLGtCQUFrQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9oQixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsMkJBQTJCLEVBQUUsYUFBYSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDdkYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQy9FLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFL0UsTUFBTSxXQUFXLEdBQUcsT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFlcEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkRHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNoQyxhQUE0QixFQUFFLE9BQTJCO0lBQzNELE9BQU8seUJBQXlCLENBQUMsRUFBQyxhQUFhLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDdkYsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxPQUEyQjtJQUMzRCxPQUFPLHlCQUF5QixDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUVELFNBQVMscUJBQXFCLENBQUMsT0FBMkI7SUFDeEQsT0FBTztRQUNMLFlBQVksRUFBRTtZQUNaLEdBQUcsd0JBQXdCO1lBQzNCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQztTQUM5QjtRQUNELGlCQUFpQixFQUFFLG1DQUFtQztLQUN2RCxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxVQUFVLCtCQUErQjtJQUM3Qyw4RUFBOEU7SUFDOUUsK0ZBQStGO0lBQy9GLE9BQU8sQ0FBQyxHQUFHLHFCQUFxQixDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjO0lBQzVCLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xDLENBQUM7QUFFRCxNQUFNLFVBQVUsWUFBWTtJQUMxQixPQUFPLElBQUksWUFBWSxFQUFFLENBQUM7QUFDNUIsQ0FBQztBQUVELE1BQU0sVUFBVSxTQUFTO0lBQ3ZCLHFDQUFxQztJQUNyQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkIsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUFxQjtJQUNuRSxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0lBQ3JELEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztJQUN0RSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO0NBQ3JELENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FDeEIscUJBQXFCLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0FBRXhGOzs7OztHQUtHO0FBQ0gsTUFBTSwrQkFBK0IsR0FDakMsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFNUUsTUFBTSxxQkFBcUIsR0FBRztJQUM1QjtRQUNFLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsV0FBVztRQUNwQixRQUFRLEVBQUUsV0FBVztRQUNyQixJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7S0FDeEQ7SUFDRDtRQUNFLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQztLQUN4RDtDQUNGLENBQUM7QUFFRixNQUFNLHdCQUF3QixHQUFlO0lBQzNDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO0lBQzNDLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsRUFBRTtRQUMzRCxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUM7S0FDdEM7SUFDRCxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFBRTtRQUMxRixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sQ0FBQztLQUNsRDtJQUNELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQztJQUM3RCxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUM7SUFDN0QsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQy9FLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxFQUFDO0lBQ3RGLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7SUFDckQsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Q0FDOUUsQ0FBQztBQUVGOzs7Ozs7OztHQVFHO0FBUUgsTUFBTSxPQUFPLGFBQWE7SUFDeEIsWUFDWSx1QkFBcUM7UUFDL0MsSUFBSSxXQUFXLElBQUksdUJBQXVCLEVBQUU7WUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FDWCxvRkFBb0Y7Z0JBQ3BGLG1GQUFtRixDQUFDLENBQUM7U0FDMUY7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxNQUF1QjtRQUNqRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBQztnQkFDekMsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUM7Z0JBQzdDLDJCQUEyQjthQUM1QjtTQUNGLENBQUM7SUFDSixDQUFDOztxSEEzQlUsYUFBYSxrQkFDb0IsK0JBQStCO3NIQURoRSxhQUFhLFlBRmQsWUFBWSxFQUFFLGlCQUFpQjtzSEFFOUIsYUFBYSxhQU5iO1FBQ1QsR0FBRyx3QkFBd0I7UUFDM0IsR0FBRyxxQkFBcUI7S0FDekIsWUFDUyxZQUFZLEVBQUUsaUJBQWlCO3NHQUU5QixhQUFhO2tCQVB6QixRQUFRO21CQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDVCxHQUFHLHdCQUF3Qjt3QkFDM0IsR0FBRyxxQkFBcUI7cUJBQ3pCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztpQkFDM0M7OzBCQUVjLFFBQVE7OzBCQUFJLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tbW9uTW9kdWxlLCBET0NVTUVOVCwgWGhyRmFjdG9yeSwgybVQTEFURk9STV9CUk9XU0VSX0lEIGFzIFBMQVRGT1JNX0JST1dTRVJfSUR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0FQUF9JRCwgQXBwbGljYXRpb25Nb2R1bGUsIEFwcGxpY2F0aW9uUmVmLCBjcmVhdGVQbGF0Zm9ybUZhY3RvcnksIEVycm9ySGFuZGxlciwgSW1wb3J0ZWROZ01vZHVsZVByb3ZpZGVycywgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5nWm9uZSwgT3B0aW9uYWwsIFBMQVRGT1JNX0lELCBQTEFURk9STV9JTklUSUFMSVpFUiwgcGxhdGZvcm1Db3JlLCBQbGF0Zm9ybVJlZiwgUHJvdmlkZXIsIFJlbmRlcmVyRmFjdG9yeTIsIFNraXBTZWxmLCBTdGF0aWNQcm92aWRlciwgVGVzdGFiaWxpdHksIFRlc3RhYmlsaXR5UmVnaXN0cnksIFR5cGUsIMm1SU5KRUNUT1JfU0NPUEUgYXMgSU5KRUNUT1JfU0NPUEUsIMm1aW50ZXJuYWxDcmVhdGVBcHBsaWNhdGlvbiBhcyBpbnRlcm5hbENyZWF0ZUFwcGxpY2F0aW9uLCDJtXNldERvY3VtZW50LCDJtVRFU1RBQklMSVRZIGFzIFRFU1RBQklMSVRZLCDJtVRFU1RBQklMSVRZX0dFVFRFUiBhcyBURVNUQUJJTElUWV9HRVRURVJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICcuL2Jyb3dzZXIvYnJvd3Nlcl9hZGFwdGVyJztcbmltcG9ydCB7U0VSVkVSX1RSQU5TSVRJT05fUFJPVklERVJTLCBUUkFOU0lUSU9OX0lEfSBmcm9tICcuL2Jyb3dzZXIvc2VydmVyLXRyYW5zaXRpb24nO1xuaW1wb3J0IHtCcm93c2VyR2V0VGVzdGFiaWxpdHl9IGZyb20gJy4vYnJvd3Nlci90ZXN0YWJpbGl0eSc7XG5pbXBvcnQge0Jyb3dzZXJYaHJ9IGZyb20gJy4vYnJvd3Nlci94aHInO1xuaW1wb3J0IHtEb21SZW5kZXJlckZhY3RvcnkyfSBmcm9tICcuL2RvbS9kb21fcmVuZGVyZXInO1xuaW1wb3J0IHtEb21FdmVudHNQbHVnaW59IGZyb20gJy4vZG9tL2V2ZW50cy9kb21fZXZlbnRzJztcbmltcG9ydCB7RVZFTlRfTUFOQUdFUl9QTFVHSU5TLCBFdmVudE1hbmFnZXJ9IGZyb20gJy4vZG9tL2V2ZW50cy9ldmVudF9tYW5hZ2VyJztcbmltcG9ydCB7S2V5RXZlbnRzUGx1Z2lufSBmcm9tICcuL2RvbS9ldmVudHMva2V5X2V2ZW50cyc7XG5pbXBvcnQge0RvbVNoYXJlZFN0eWxlc0hvc3QsIFNoYXJlZFN0eWxlc0hvc3R9IGZyb20gJy4vZG9tL3NoYXJlZF9zdHlsZXNfaG9zdCc7XG5cbmNvbnN0IE5HX0RFVl9NT0RFID0gdHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgISFuZ0Rldk1vZGU7XG5cbi8qKlxuICogU2V0IG9mIGNvbmZpZyBvcHRpb25zIGF2YWlsYWJsZSBkdXJpbmcgdGhlIGFwcGxpY2F0aW9uIGJvb3RzdHJhcCBvcGVyYXRpb24uXG4gKlxuICogQGRldmVsb3BlclByZXZpZXdcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvbkNvbmZpZyB7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHByb3ZpZGVycyB0aGF0IHNob3VsZCBiZSBhdmFpbGFibGUgdG8gdGhlIHJvb3QgY29tcG9uZW50IGFuZCBhbGwgaXRzIGNoaWxkcmVuLlxuICAgKi9cbiAgcHJvdmlkZXJzOiBBcnJheTxQcm92aWRlcnxJbXBvcnRlZE5nTW9kdWxlUHJvdmlkZXJzPjtcbn1cblxuLyoqXG4gKiBCb290c3RyYXBzIGFuIGluc3RhbmNlIG9mIGFuIEFuZ3VsYXIgYXBwbGljYXRpb24gYW5kIHJlbmRlcnMgYSBzdGFuZGFsb25lIGNvbXBvbmVudCBhcyB0aGVcbiAqIGFwcGxpY2F0aW9uJ3Mgcm9vdCBjb21wb25lbnQuIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgc3RhbmRhbG9uZSBjb21wb25lbnRzIGNhbiBiZSBmb3VuZCBpbiBbdGhpc1xuICogZ3VpZGVdKGd1aWRlL3N0YW5kYWxvbmUtY29tcG9uZW50cykuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIFRoZSByb290IGNvbXBvbmVudCBwYXNzZWQgaW50byB0aGlzIGZ1bmN0aW9uICptdXN0KiBiZSBhIHN0YW5kYWxvbmUgb25lIChzaG91bGQgaGF2ZSB0aGVcbiAqIGBzdGFuZGFsb25lOiB0cnVlYCBmbGFnIGluIHRoZSBgQENvbXBvbmVudGAgZGVjb3JhdG9yIGNvbmZpZykuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHN0YW5kYWxvbmU6IHRydWUsXG4gKiAgIHRlbXBsYXRlOiAnSGVsbG8gd29ybGQhJ1xuICogfSlcbiAqIGNsYXNzIFJvb3RDb21wb25lbnQge31cbiAqXG4gKiBjb25zdCBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmID0gYXdhaXQgYm9vdHN0cmFwQXBwbGljYXRpb24oUm9vdENvbXBvbmVudCk7XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFkZCB0aGUgbGlzdCBvZiBwcm92aWRlcnMgdGhhdCBzaG91bGQgYmUgYXZhaWxhYmxlIGluIHRoZSBhcHBsaWNhdGlvbiBpbmplY3RvciBieVxuICogc3BlY2lmeWluZyB0aGUgYHByb3ZpZGVyc2AgZmllbGQgaW4gYW4gb2JqZWN0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50OlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGF3YWl0IGJvb3RzdHJhcEFwcGxpY2F0aW9uKFJvb3RDb21wb25lbnQsIHtcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAge3Byb3ZpZGU6IEJBQ0tFTkRfVVJMLCB1c2VWYWx1ZTogJ2h0dHBzOi8veW91cmRvbWFpbi5jb20vYXBpJ31cbiAqICAgXVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGltcG9ydFByb3ZpZGVyc0Zyb21gIGhlbHBlciBtZXRob2QgY2FuIGJlIHVzZWQgdG8gY29sbGVjdCBhbGwgcHJvdmlkZXJzIGZyb20gYW55XG4gKiBleGlzdGluZyBOZ01vZHVsZSAoYW5kIHRyYW5zaXRpdmVseSBmcm9tIGFsbCBOZ01vZHVsZXMgdGhhdCBpdCBpbXBvcnRzKTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBhd2FpdCBib290c3RyYXBBcHBsaWNhdGlvbihSb290Q29tcG9uZW50LCB7XG4gKiAgIHByb3ZpZGVyczogW1xuICogICAgIGltcG9ydFByb3ZpZGVyc0Zyb20oU29tZU5nTW9kdWxlKVxuICogICBdXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE5vdGU6IHRoZSBgYm9vdHN0cmFwQXBwbGljYXRpb25gIG1ldGhvZCBkb2Vzbid0IGluY2x1ZGUgW1Rlc3RhYmlsaXR5XShhcGkvY29yZS9UZXN0YWJpbGl0eSkgYnlcbiAqIGRlZmF1bHQuIFlvdSBjYW4gYWRkIFtUZXN0YWJpbGl0eV0oYXBpL2NvcmUvVGVzdGFiaWxpdHkpIGJ5IGdldHRpbmcgdGhlIGxpc3Qgb2YgbmVjZXNzYXJ5XG4gKiBwcm92aWRlcnMgdXNpbmcgYHByb3ZpZGVQcm90cmFjdG9yVGVzdGluZ1N1cHBvcnQoKWAgZnVuY3Rpb24gYW5kIGFkZGluZyB0aGVtIGludG8gdGhlIGBwcm92aWRlcnNgXG4gKiBhcnJheSwgZm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtwcm92aWRlUHJvdHJhY3RvclRlc3RpbmdTdXBwb3J0fSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbiAqXG4gKiBhd2FpdCBib290c3RyYXBBcHBsaWNhdGlvbihSb290Q29tcG9uZW50LCB7cHJvdmlkZXJzOiBbcHJvdmlkZVByb3RyYWN0b3JUZXN0aW5nU3VwcG9ydCgpXX0pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHJvb3RDb21wb25lbnQgQSByZWZlcmVuY2UgdG8gYSBzdGFuZGFsb25lIGNvbXBvbmVudCB0aGF0IHNob3VsZCBiZSByZW5kZXJlZC5cbiAqIEBwYXJhbSBvcHRpb25zIEV4dHJhIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBib290c3RyYXAgb3BlcmF0aW9uLCBzZWUgYEFwcGxpY2F0aW9uQ29uZmlnYCBmb3JcbiAqICAgICBhZGRpdGlvbmFsIGluZm8uXG4gKiBAcmV0dXJucyBBIHByb21pc2UgdGhhdCByZXR1cm5zIGFuIGBBcHBsaWNhdGlvblJlZmAgaW5zdGFuY2Ugb25jZSByZXNvbHZlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZGV2ZWxvcGVyUHJldmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwQXBwbGljYXRpb24oXG4gICAgcm9vdENvbXBvbmVudDogVHlwZTx1bmtub3duPiwgb3B0aW9ucz86IEFwcGxpY2F0aW9uQ29uZmlnKTogUHJvbWlzZTxBcHBsaWNhdGlvblJlZj4ge1xuICByZXR1cm4gaW50ZXJuYWxDcmVhdGVBcHBsaWNhdGlvbih7cm9vdENvbXBvbmVudCwgLi4uY3JlYXRlUHJvdmlkZXJzQ29uZmlnKG9wdGlvbnMpfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIEFuZ3VsYXIgYXBwbGljYXRpb24gd2l0aG91dCBib290c3RyYXBwaW5nIGFueSBjb21wb25lbnRzLiBUaGlzIGlzIHVzZWZ1bFxuICogZm9yIHRoZSBzaXR1YXRpb24gd2hlcmUgb25lIHdhbnRzIHRvIGRlY291cGxlIGFwcGxpY2F0aW9uIGVudmlyb25tZW50IGNyZWF0aW9uIChhIHBsYXRmb3JtIGFuZFxuICogYXNzb2NpYXRlZCBpbmplY3RvcnMpIGZyb20gcmVuZGVyaW5nIGNvbXBvbmVudHMgb24gYSBzY3JlZW4uIENvbXBvbmVudHMgY2FuIGJlIHN1YnNlcXVlbnRseVxuICogYm9vdHN0cmFwcGVkIG9uIHRoZSByZXR1cm5lZCBgQXBwbGljYXRpb25SZWZgLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEV4dHJhIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBhcHBsaWNhdGlvbiBlbnZpcm9ubWVudCwgc2VlIGBBcHBsaWNhdGlvbkNvbmZpZ2AgZm9yXG4gKiAgICAgYWRkaXRpb25hbCBpbmZvLlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmV0dXJucyBhbiBgQXBwbGljYXRpb25SZWZgIGluc3RhbmNlIG9uY2UgcmVzb2x2ZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICogQGRldmVsb3BlclByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcGxpY2F0aW9uKG9wdGlvbnM/OiBBcHBsaWNhdGlvbkNvbmZpZykge1xuICByZXR1cm4gaW50ZXJuYWxDcmVhdGVBcHBsaWNhdGlvbihjcmVhdGVQcm92aWRlcnNDb25maWcob3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm92aWRlcnNDb25maWcob3B0aW9ucz86IEFwcGxpY2F0aW9uQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgYXBwUHJvdmlkZXJzOiBbXG4gICAgICAuLi5CUk9XU0VSX01PRFVMRV9QUk9WSURFUlMsXG4gICAgICAuLi4ob3B0aW9ucz8ucHJvdmlkZXJzID8/IFtdKSxcbiAgICBdLFxuICAgIHBsYXRmb3JtUHJvdmlkZXJzOiBJTlRFUk5BTF9CUk9XU0VSX1BMQVRGT1JNX1BST1ZJREVSU1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzZXQgb2YgcHJvdmlkZXJzIHJlcXVpcmVkIHRvIHNldHVwIFtUZXN0YWJpbGl0eV0oYXBpL2NvcmUvVGVzdGFiaWxpdHkpIGZvciBhblxuICogYXBwbGljYXRpb24gYm9vdHN0cmFwcGVkIHVzaW5nIHRoZSBgYm9vdHN0cmFwQXBwbGljYXRpb25gIGZ1bmN0aW9uLiBUaGUgc2V0IG9mIHByb3ZpZGVycyBpc1xuICogbmVlZGVkIHRvIHN1cHBvcnQgdGVzdGluZyBhbiBhcHBsaWNhdGlvbiB3aXRoIFByb3RyYWN0b3IgKHdoaWNoIHJlbGllcyBvbiB0aGUgVGVzdGFiaWxpdHkgQVBJc1xuICogdG8gYmUgcHJlc2VudCkuXG4gKlxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgcHJvdmlkZXJzIHJlcXVpcmVkIHRvIHNldHVwIFRlc3RhYmlsaXR5IGZvciBhbiBhcHBsaWNhdGlvbiBhbmQgbWFrZSBpdFxuICogICAgIGF2YWlsYWJsZSBmb3IgdGVzdGluZyB1c2luZyBQcm90cmFjdG9yLlxuICpcbiAqIEBkZXZlbG9wZXJQcmV2aWV3XG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlUHJvdHJhY3RvclRlc3RpbmdTdXBwb3J0KCk6IFByb3ZpZGVyW10ge1xuICAvLyBSZXR1cm4gYSBjb3B5IHRvIHByZXZlbnQgY2hhbmdlcyB0byB0aGUgb3JpZ2luYWwgYXJyYXkgaW4gY2FzZSBhbnkgaW4tcGxhY2VcbiAgLy8gYWx0ZXJhdGlvbnMgYXJlIHBlcmZvcm1lZCB0byB0aGUgYHByb3ZpZGVQcm90cmFjdG9yVGVzdGluZ1N1cHBvcnRgIGNhbGwgcmVzdWx0cyBpbiBhcHAgY29kZS5cbiAgcmV0dXJuIFsuLi5URVNUQUJJTElUWV9QUk9WSURFUlNdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERvbUFkYXB0ZXIoKSB7XG4gIEJyb3dzZXJEb21BZGFwdGVyLm1ha2VDdXJyZW50KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhhbmRsZXIoKTogRXJyb3JIYW5kbGVyIHtcbiAgcmV0dXJuIG5ldyBFcnJvckhhbmRsZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9kb2N1bWVudCgpOiBhbnkge1xuICAvLyBUZWxsIGl2eSBhYm91dCB0aGUgZ2xvYmFsIGRvY3VtZW50XG4gIMm1c2V0RG9jdW1lbnQoZG9jdW1lbnQpO1xuICByZXR1cm4gZG9jdW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9CUk9XU0VSX1BMQVRGT1JNX1BST1ZJREVSUzogU3RhdGljUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IFBMQVRGT1JNX0lELCB1c2VWYWx1ZTogUExBVEZPUk1fQlJPV1NFUl9JRH0sXG4gIHtwcm92aWRlOiBQTEFURk9STV9JTklUSUFMSVpFUiwgdXNlVmFsdWU6IGluaXREb21BZGFwdGVyLCBtdWx0aTogdHJ1ZX0sXG4gIHtwcm92aWRlOiBET0NVTUVOVCwgdXNlRmFjdG9yeTogX2RvY3VtZW50LCBkZXBzOiBbXX0sXG5dO1xuXG4vKipcbiAqIEEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBgUGxhdGZvcm1SZWZgIGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCBicm93c2VyIHNlcnZpY2VcbiAqIHByb3ZpZGVycy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybUJyb3dzZXI6IChleHRyYVByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW10pID0+IFBsYXRmb3JtUmVmID1cbiAgICBjcmVhdGVQbGF0Zm9ybUZhY3RvcnkocGxhdGZvcm1Db3JlLCAnYnJvd3NlcicsIElOVEVSTkFMX0JST1dTRVJfUExBVEZPUk1fUFJPVklERVJTKTtcblxuLyoqXG4gKiBJbnRlcm5hbCBtYXJrZXIgdG8gc2lnbmFsIHdoZXRoZXIgcHJvdmlkZXJzIGZyb20gdGhlIGBCcm93c2VyTW9kdWxlYCBhcmUgYWxyZWFkeSBwcmVzZW50IGluIERJLlxuICogVGhpcyBpcyBuZWVkZWQgdG8gYXZvaWQgbG9hZGluZyBgQnJvd3Nlck1vZHVsZWAgcHJvdmlkZXJzIHR3aWNlLiBXZSBjYW4ndCByZWx5IG9uIHRoZVxuICogYEJyb3dzZXJNb2R1bGVgIHByZXNlbmNlIGl0c2VsZiwgc2luY2UgdGhlIHN0YW5kYWxvbmUtYmFzZWQgYm9vdHN0cmFwIGp1c3QgaW1wb3J0c1xuICogYEJyb3dzZXJNb2R1bGVgIHByb3ZpZGVycyB3aXRob3V0IHJlZmVyZW5jaW5nIHRoZSBtb2R1bGUgaXRzZWxmLlxuICovXG5jb25zdCBCUk9XU0VSX01PRFVMRV9QUk9WSURFUlNfTUFSS0VSID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW4oTkdfREVWX01PREUgPyAnQnJvd3Nlck1vZHVsZSBQcm92aWRlcnMgTWFya2VyJyA6ICcnKTtcblxuY29uc3QgVEVTVEFCSUxJVFlfUFJPVklERVJTID0gW1xuICB7XG4gICAgcHJvdmlkZTogVEVTVEFCSUxJVFlfR0VUVEVSLFxuICAgIHVzZUNsYXNzOiBCcm93c2VyR2V0VGVzdGFiaWxpdHksXG4gICAgZGVwczogW10sXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBURVNUQUJJTElUWSxcbiAgICB1c2VDbGFzczogVGVzdGFiaWxpdHksXG4gICAgZGVwczogW05nWm9uZSwgVGVzdGFiaWxpdHlSZWdpc3RyeSwgVEVTVEFCSUxJVFlfR0VUVEVSXVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogVGVzdGFiaWxpdHksICAvLyBBbHNvIHByb3ZpZGUgYXMgYFRlc3RhYmlsaXR5YCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkuXG4gICAgdXNlQ2xhc3M6IFRlc3RhYmlsaXR5LFxuICAgIGRlcHM6IFtOZ1pvbmUsIFRlc3RhYmlsaXR5UmVnaXN0cnksIFRFU1RBQklMSVRZX0dFVFRFUl1cbiAgfVxuXTtcblxuY29uc3QgQlJPV1NFUl9NT0RVTEVfUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogSU5KRUNUT1JfU0NPUEUsIHVzZVZhbHVlOiAncm9vdCd9LFxuICB7cHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VGYWN0b3J5OiBlcnJvckhhbmRsZXIsIGRlcHM6IFtdfSwge1xuICAgIHByb3ZpZGU6IEVWRU5UX01BTkFHRVJfUExVR0lOUyxcbiAgICB1c2VDbGFzczogRG9tRXZlbnRzUGx1Z2luLFxuICAgIG11bHRpOiB0cnVlLFxuICAgIGRlcHM6IFtET0NVTUVOVCwgTmdab25lLCBQTEFURk9STV9JRF1cbiAgfSxcbiAge3Byb3ZpZGU6IEVWRU5UX01BTkFHRVJfUExVR0lOUywgdXNlQ2xhc3M6IEtleUV2ZW50c1BsdWdpbiwgbXVsdGk6IHRydWUsIGRlcHM6IFtET0NVTUVOVF19LCB7XG4gICAgcHJvdmlkZTogRG9tUmVuZGVyZXJGYWN0b3J5MixcbiAgICB1c2VDbGFzczogRG9tUmVuZGVyZXJGYWN0b3J5MixcbiAgICBkZXBzOiBbRXZlbnRNYW5hZ2VyLCBEb21TaGFyZWRTdHlsZXNIb3N0LCBBUFBfSURdXG4gIH0sXG4gIHtwcm92aWRlOiBSZW5kZXJlckZhY3RvcnkyLCB1c2VFeGlzdGluZzogRG9tUmVuZGVyZXJGYWN0b3J5Mn0sXG4gIHtwcm92aWRlOiBTaGFyZWRTdHlsZXNIb3N0LCB1c2VFeGlzdGluZzogRG9tU2hhcmVkU3R5bGVzSG9zdH0sXG4gIHtwcm92aWRlOiBEb21TaGFyZWRTdHlsZXNIb3N0LCB1c2VDbGFzczogRG9tU2hhcmVkU3R5bGVzSG9zdCwgZGVwczogW0RPQ1VNRU5UXX0sXG4gIHtwcm92aWRlOiBFdmVudE1hbmFnZXIsIHVzZUNsYXNzOiBFdmVudE1hbmFnZXIsIGRlcHM6IFtFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIE5nWm9uZV19LFxuICB7cHJvdmlkZTogWGhyRmFjdG9yeSwgdXNlQ2xhc3M6IEJyb3dzZXJYaHIsIGRlcHM6IFtdfSxcbiAgTkdfREVWX01PREUgPyB7cHJvdmlkZTogQlJPV1NFUl9NT0RVTEVfUFJPVklERVJTX01BUktFUiwgdXNlVmFsdWU6IHRydWV9IDogW11cbl07XG5cbi8qKlxuICogRXhwb3J0cyByZXF1aXJlZCBpbmZyYXN0cnVjdHVyZSBmb3IgYWxsIEFuZ3VsYXIgYXBwcy5cbiAqIEluY2x1ZGVkIGJ5IGRlZmF1bHQgaW4gYWxsIEFuZ3VsYXIgYXBwcyBjcmVhdGVkIHdpdGggdGhlIENMSVxuICogYG5ld2AgY29tbWFuZC5cbiAqIFJlLWV4cG9ydHMgYENvbW1vbk1vZHVsZWAgYW5kIGBBcHBsaWNhdGlvbk1vZHVsZWAsIG1ha2luZyB0aGVpclxuICogZXhwb3J0cyBhbmQgcHJvdmlkZXJzIGF2YWlsYWJsZSB0byBhbGwgYXBwcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIC4uLkJST1dTRVJfTU9EVUxFX1BST1ZJREVSUywgIC8vXG4gICAgLi4uVEVTVEFCSUxJVFlfUFJPVklERVJTXG4gIF0sXG4gIGV4cG9ydHM6IFtDb21tb25Nb2R1bGUsIEFwcGxpY2F0aW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQnJvd3Nlck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIEBJbmplY3QoQlJPV1NFUl9NT0RVTEVfUFJPVklERVJTX01BUktFUilcbiAgICAgICAgICAgICAgcHJvdmlkZXJzQWxyZWFkeVByZXNlbnQ6IGJvb2xlYW58bnVsbCkge1xuICAgIGlmIChOR19ERVZfTU9ERSAmJiBwcm92aWRlcnNBbHJlYWR5UHJlc2VudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBQcm92aWRlcnMgZnJvbSB0aGUgXFxgQnJvd3Nlck1vZHVsZVxcYCBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQuIElmIHlvdSBuZWVkIGFjY2VzcyBgICtcbiAgICAgICAgICBgdG8gY29tbW9uIGRpcmVjdGl2ZXMgc3VjaCBhcyBOZ0lmIGFuZCBOZ0ZvciwgaW1wb3J0IHRoZSBcXGBDb21tb25Nb2R1bGVcXGAgaW5zdGVhZC5gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyBhIGJyb3dzZXItYmFzZWQgYXBwIHRvIHRyYW5zaXRpb24gZnJvbSBhIHNlcnZlci1yZW5kZXJlZCBhcHAsIGlmXG4gICAqIG9uZSBpcyBwcmVzZW50IG9uIHRoZSBwYWdlLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW1zIEFuIG9iamVjdCBjb250YWluaW5nIGFuIGlkZW50aWZpZXIgZm9yIHRoZSBhcHAgdG8gdHJhbnNpdGlvbi5cbiAgICogVGhlIElEIG11c3QgbWF0Y2ggYmV0d2VlbiB0aGUgY2xpZW50IGFuZCBzZXJ2ZXIgdmVyc2lvbnMgb2YgdGhlIGFwcC5cbiAgICogQHJldHVybnMgVGhlIHJlY29uZmlndXJlZCBgQnJvd3Nlck1vZHVsZWAgdG8gaW1wb3J0IGludG8gdGhlIGFwcCdzIHJvb3QgYEFwcE1vZHVsZWAuXG4gICAqL1xuICBzdGF0aWMgd2l0aFNlcnZlclRyYW5zaXRpb24ocGFyYW1zOiB7YXBwSWQ6IHN0cmluZ30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEJyb3dzZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJyb3dzZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IEFQUF9JRCwgdXNlVmFsdWU6IHBhcmFtcy5hcHBJZH0sXG4gICAgICAgIHtwcm92aWRlOiBUUkFOU0lUSU9OX0lELCB1c2VFeGlzdGluZzogQVBQX0lEfSxcbiAgICAgICAgU0VSVkVSX1RSQU5TSVRJT05fUFJPVklERVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=