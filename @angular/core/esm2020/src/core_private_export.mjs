/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { ALLOW_MULTIPLE_PLATFORMS as ɵALLOW_MULTIPLE_PLATFORMS, internalCreateApplication as ɵinternalCreateApplication } from './application_ref';
export { APP_ID_RANDOM_PROVIDER as ɵAPP_ID_RANDOM_PROVIDER } from './application_tokens';
export { defaultIterableDiffers as ɵdefaultIterableDiffers, defaultKeyValueDiffers as ɵdefaultKeyValueDiffers } from './change_detection/change_detection';
export { ChangeDetectorStatus as ɵChangeDetectorStatus, isDefaultChangeDetectionStrategy as ɵisDefaultChangeDetectionStrategy } from './change_detection/constants';
export { Console as ɵConsole } from './console';
export { getDebugNodeR2 as ɵgetDebugNodeR2 } from './debug/debug_node';
export { setCurrentInjector as ɵsetCurrentInjector } from './di/injector_compatibility';
export { getInjectableDef as ɵgetInjectableDef } from './di/interface/defs';
export { INJECTOR_SCOPE as ɵINJECTOR_SCOPE } from './di/scope';
export { formatRuntimeError as ɵformatRuntimeError, RuntimeError as ɵRuntimeError } from './errors';
export { findLocaleData as ɵfindLocaleData, getLocaleCurrencyCode as ɵgetLocaleCurrencyCode, getLocalePluralCase as ɵgetLocalePluralCase, LocaleDataIndex as ɵLocaleDataIndex, registerLocaleData as ɵregisterLocaleData, unregisterAllLocaleData as ɵunregisterLocaleData } from './i18n/locale_data_api';
export { DEFAULT_LOCALE_ID as ɵDEFAULT_LOCALE_ID } from './i18n/localization';
export { ComponentFactory as ɵComponentFactory } from './linker/component_factory';
export { clearResolutionOfComponentResourcesQueue as ɵclearResolutionOfComponentResourcesQueue, resolveComponentResources as ɵresolveComponentResources } from './metadata/resource_loading';
export { ReflectionCapabilities as ɵReflectionCapabilities } from './reflection/reflection_capabilities';
export { allowSanitizationBypassAndThrow as ɵallowSanitizationBypassAndThrow, getSanitizationBypassType as ɵgetSanitizationBypassType, unwrapSafeValue as ɵunwrapSafeValue } from './sanitization/bypass';
export { _sanitizeHtml as ɵ_sanitizeHtml } from './sanitization/html_sanitizer';
export { _sanitizeUrl as ɵ_sanitizeUrl } from './sanitization/url_sanitizer';
export { TESTABILITY as ɵTESTABILITY, TESTABILITY_GETTER as ɵTESTABILITY_GETTER } from './testability/testability';
export { coerceToBoolean as ɵcoerceToBoolean } from './util/coercion';
export { devModeEqual as ɵdevModeEqual } from './util/comparison';
export { makeDecorator as ɵmakeDecorator } from './util/decorators';
export { global as ɵglobal } from './util/global';
export { isListLikeIterable as ɵisListLikeIterable } from './util/iterable';
export { isObservable as ɵisObservable, isPromise as ɵisPromise, isSubscribable as ɵisSubscribable } from './util/lang';
export { stringify as ɵstringify } from './util/stringify';
export { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR as ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from './view/provider_flags';
// TODO(alxhub): allows tests to compile, can be removed when tests have been updated.
export const ɵivyEnabled = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9wcml2YXRlX2V4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NvcmVfcHJpdmF0ZV9leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLHdCQUF3QixJQUFJLHlCQUF5QixFQUFFLHlCQUF5QixJQUFJLDBCQUEwQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakosT0FBTyxFQUFDLHNCQUFzQixJQUFJLHVCQUF1QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkYsT0FBTyxFQUFDLHNCQUFzQixJQUFJLHVCQUF1QixFQUFFLHNCQUFzQixJQUFJLHVCQUF1QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekosT0FBTyxFQUFDLG9CQUFvQixJQUFJLHFCQUFxQixFQUFFLGdDQUFnQyxJQUFJLGlDQUFpQyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDbEssT0FBTyxFQUFDLE9BQU8sSUFBSSxRQUFRLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFDLGNBQWMsSUFBSSxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsa0JBQWtCLElBQUksbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RixPQUFPLEVBQUMsZ0JBQWdCLElBQUksaUJBQWlCLEVBQXlDLE1BQU0scUJBQXFCLENBQUM7QUFDbEgsT0FBTyxFQUFDLGNBQWMsSUFBSSxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixJQUFJLG1CQUFtQixFQUFFLFlBQVksSUFBSSxhQUFhLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbEcsT0FBTyxFQUFpRixjQUFjLElBQUksZUFBZSxFQUFFLHFCQUFxQixJQUFJLHNCQUFzQixFQUFFLG1CQUFtQixJQUFJLG9CQUFvQixFQUFFLGVBQWUsSUFBSSxnQkFBZ0IsRUFBRSxrQkFBa0IsSUFBSSxtQkFBbUIsRUFBRSx1QkFBdUIsSUFBSSxxQkFBcUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3pYLE9BQU8sRUFBQyxpQkFBaUIsSUFBSSxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBQyxnQkFBZ0IsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2pGLE9BQU8sRUFBQyx3Q0FBd0MsSUFBSSx5Q0FBeUMsRUFBRSx5QkFBeUIsSUFBSSwwQkFBMEIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzNMLE9BQU8sRUFBQyxzQkFBc0IsSUFBSSx1QkFBdUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZHLE9BQU8sRUFBQywrQkFBK0IsSUFBSSxnQ0FBZ0MsRUFBNkIseUJBQXlCLElBQUksMEJBQTBCLEVBQWdLLGVBQWUsSUFBSSxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2pZLE9BQU8sRUFBQyxhQUFhLElBQUksY0FBYyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFDLFlBQVksSUFBSSxhQUFhLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsV0FBVyxJQUFJLFlBQVksRUFBRSxrQkFBa0IsSUFBSSxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2pILE9BQU8sRUFBQyxlQUFlLElBQUksZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsWUFBWSxJQUFJLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLElBQUksY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEUsT0FBTyxFQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixJQUFJLG1CQUFtQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFDLFlBQVksSUFBSSxhQUFhLEVBQUUsU0FBUyxJQUFJLFVBQVUsRUFBRSxjQUFjLElBQUksZUFBZSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3RILE9BQU8sRUFBQyxTQUFTLElBQUksVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFDLHFDQUFxQyxJQUFJLHNDQUFzQyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEgsc0ZBQXNGO0FBQ3RGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtBTExPV19NVUxUSVBMRV9QTEFURk9STVMgYXMgybVBTExPV19NVUxUSVBMRV9QTEFURk9STVMsIGludGVybmFsQ3JlYXRlQXBwbGljYXRpb24gYXMgybVpbnRlcm5hbENyZWF0ZUFwcGxpY2F0aW9ufSBmcm9tICcuL2FwcGxpY2F0aW9uX3JlZic7XG5leHBvcnQge0FQUF9JRF9SQU5ET01fUFJPVklERVIgYXMgybVBUFBfSURfUkFORE9NX1BST1ZJREVSfSBmcm9tICcuL2FwcGxpY2F0aW9uX3Rva2Vucyc7XG5leHBvcnQge2RlZmF1bHRJdGVyYWJsZURpZmZlcnMgYXMgybVkZWZhdWx0SXRlcmFibGVEaWZmZXJzLCBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzIGFzIMm1ZGVmYXVsdEtleVZhbHVlRGlmZmVyc30gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuZXhwb3J0IHtDaGFuZ2VEZXRlY3RvclN0YXR1cyBhcyDJtUNoYW5nZURldGVjdG9yU3RhdHVzLCBpc0RlZmF1bHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSBhcyDJtWlzRGVmYXVsdENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICcuL2NoYW5nZV9kZXRlY3Rpb24vY29uc3RhbnRzJztcbmV4cG9ydCB7Q29uc29sZSBhcyDJtUNvbnNvbGV9IGZyb20gJy4vY29uc29sZSc7XG5leHBvcnQge2dldERlYnVnTm9kZVIyIGFzIMm1Z2V0RGVidWdOb2RlUjJ9IGZyb20gJy4vZGVidWcvZGVidWdfbm9kZSc7XG5leHBvcnQge3NldEN1cnJlbnRJbmplY3RvciBhcyDJtXNldEN1cnJlbnRJbmplY3Rvcn0gZnJvbSAnLi9kaS9pbmplY3Rvcl9jb21wYXRpYmlsaXR5JztcbmV4cG9ydCB7Z2V0SW5qZWN0YWJsZURlZiBhcyDJtWdldEluamVjdGFibGVEZWYsIMm1ybVJbmplY3RhYmxlRGVjbGFyYXRpb24sIMm1ybVJbmplY3RvckRlZn0gZnJvbSAnLi9kaS9pbnRlcmZhY2UvZGVmcyc7XG5leHBvcnQge0lOSkVDVE9SX1NDT1BFIGFzIMm1SU5KRUNUT1JfU0NPUEV9IGZyb20gJy4vZGkvc2NvcGUnO1xuZXhwb3J0IHtmb3JtYXRSdW50aW1lRXJyb3IgYXMgybVmb3JtYXRSdW50aW1lRXJyb3IsIFJ1bnRpbWVFcnJvciBhcyDJtVJ1bnRpbWVFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0IHtDdXJyZW5jeUluZGV4IGFzIMm1Q3VycmVuY3lJbmRleCwgRXh0cmFMb2NhbGVEYXRhSW5kZXggYXMgybVFeHRyYUxvY2FsZURhdGFJbmRleCwgZmluZExvY2FsZURhdGEgYXMgybVmaW5kTG9jYWxlRGF0YSwgZ2V0TG9jYWxlQ3VycmVuY3lDb2RlIGFzIMm1Z2V0TG9jYWxlQ3VycmVuY3lDb2RlLCBnZXRMb2NhbGVQbHVyYWxDYXNlIGFzIMm1Z2V0TG9jYWxlUGx1cmFsQ2FzZSwgTG9jYWxlRGF0YUluZGV4IGFzIMm1TG9jYWxlRGF0YUluZGV4LCByZWdpc3RlckxvY2FsZURhdGEgYXMgybVyZWdpc3RlckxvY2FsZURhdGEsIHVucmVnaXN0ZXJBbGxMb2NhbGVEYXRhIGFzIMm1dW5yZWdpc3RlckxvY2FsZURhdGF9IGZyb20gJy4vaTE4bi9sb2NhbGVfZGF0YV9hcGknO1xuZXhwb3J0IHtERUZBVUxUX0xPQ0FMRV9JRCBhcyDJtURFRkFVTFRfTE9DQUxFX0lEfSBmcm9tICcuL2kxOG4vbG9jYWxpemF0aW9uJztcbmV4cG9ydCB7Q29tcG9uZW50RmFjdG9yeSBhcyDJtUNvbXBvbmVudEZhY3Rvcnl9IGZyb20gJy4vbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5JztcbmV4cG9ydCB7Y2xlYXJSZXNvbHV0aW9uT2ZDb21wb25lbnRSZXNvdXJjZXNRdWV1ZSBhcyDJtWNsZWFyUmVzb2x1dGlvbk9mQ29tcG9uZW50UmVzb3VyY2VzUXVldWUsIHJlc29sdmVDb21wb25lbnRSZXNvdXJjZXMgYXMgybVyZXNvbHZlQ29tcG9uZW50UmVzb3VyY2VzfSBmcm9tICcuL21ldGFkYXRhL3Jlc291cmNlX2xvYWRpbmcnO1xuZXhwb3J0IHtSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIGFzIMm1UmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnLi9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcbmV4cG9ydCB7YWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyBhcyDJtWFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3csIEJ5cGFzc1R5cGUgYXMgybVCeXBhc3NUeXBlLCBnZXRTYW5pdGl6YXRpb25CeXBhc3NUeXBlIGFzIMm1Z2V0U2FuaXRpemF0aW9uQnlwYXNzVHlwZSwgU2FmZUh0bWwgYXMgybVTYWZlSHRtbCwgU2FmZVJlc291cmNlVXJsIGFzIMm1U2FmZVJlc291cmNlVXJsLCBTYWZlU2NyaXB0IGFzIMm1U2FmZVNjcmlwdCwgU2FmZVN0eWxlIGFzIMm1U2FmZVN0eWxlLCBTYWZlVXJsIGFzIMm1U2FmZVVybCwgU2FmZVZhbHVlIGFzIMm1U2FmZVZhbHVlLCB1bndyYXBTYWZlVmFsdWUgYXMgybV1bndyYXBTYWZlVmFsdWV9IGZyb20gJy4vc2FuaXRpemF0aW9uL2J5cGFzcyc7XG5leHBvcnQge19zYW5pdGl6ZUh0bWwgYXMgybVfc2FuaXRpemVIdG1sfSBmcm9tICcuL3Nhbml0aXphdGlvbi9odG1sX3Nhbml0aXplcic7XG5leHBvcnQge19zYW5pdGl6ZVVybCBhcyDJtV9zYW5pdGl6ZVVybH0gZnJvbSAnLi9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplcic7XG5leHBvcnQge1RFU1RBQklMSVRZIGFzIMm1VEVTVEFCSUxJVFksIFRFU1RBQklMSVRZX0dFVFRFUiBhcyDJtVRFU1RBQklMSVRZX0dFVFRFUn0gZnJvbSAnLi90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5leHBvcnQge2NvZXJjZVRvQm9vbGVhbiBhcyDJtWNvZXJjZVRvQm9vbGVhbn0gZnJvbSAnLi91dGlsL2NvZXJjaW9uJztcbmV4cG9ydCB7ZGV2TW9kZUVxdWFsIGFzIMm1ZGV2TW9kZUVxdWFsfSBmcm9tICcuL3V0aWwvY29tcGFyaXNvbic7XG5leHBvcnQge21ha2VEZWNvcmF0b3IgYXMgybVtYWtlRGVjb3JhdG9yfSBmcm9tICcuL3V0aWwvZGVjb3JhdG9ycyc7XG5leHBvcnQge2dsb2JhbCBhcyDJtWdsb2JhbH0gZnJvbSAnLi91dGlsL2dsb2JhbCc7XG5leHBvcnQge2lzTGlzdExpa2VJdGVyYWJsZSBhcyDJtWlzTGlzdExpa2VJdGVyYWJsZX0gZnJvbSAnLi91dGlsL2l0ZXJhYmxlJztcbmV4cG9ydCB7aXNPYnNlcnZhYmxlIGFzIMm1aXNPYnNlcnZhYmxlLCBpc1Byb21pc2UgYXMgybVpc1Byb21pc2UsIGlzU3Vic2NyaWJhYmxlIGFzIMm1aXNTdWJzY3JpYmFibGV9IGZyb20gJy4vdXRpbC9sYW5nJztcbmV4cG9ydCB7c3RyaW5naWZ5IGFzIMm1c3RyaW5naWZ5fSBmcm9tICcuL3V0aWwvc3RyaW5naWZ5JztcbmV4cG9ydCB7Tk9UX0ZPVU5EX0NIRUNLX09OTFlfRUxFTUVOVF9JTkpFQ1RPUiBhcyDJtU5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1J9IGZyb20gJy4vdmlldy9wcm92aWRlcl9mbGFncyc7XG5cbi8vIFRPRE8oYWx4aHViKTogYWxsb3dzIHRlc3RzIHRvIGNvbXBpbGUsIGNhbiBiZSByZW1vdmVkIHdoZW4gdGVzdHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXG5leHBvcnQgY29uc3QgybVpdnlFbmFibGVkID0gdHJ1ZTtcbiJdfQ==