/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { RuntimeError } from '../errors';
import { getDocument } from '../render3/interfaces/document';
import { SANITIZER } from '../render3/interfaces/view';
import { getLView } from '../render3/state';
import { renderStringify } from '../render3/util/stringify_utils';
import { trustedHTMLFromString, trustedScriptURLFromString } from '../util/security/trusted_types';
import { trustedHTMLFromStringBypass, trustedScriptFromStringBypass, trustedScriptURLFromStringBypass } from '../util/security/trusted_types_bypass';
import { allowSanitizationBypassAndThrow, unwrapSafeValue } from './bypass';
import { _sanitizeHtml as _sanitizeHtml } from './html_sanitizer';
import { SecurityContext } from './security';
import { _sanitizeUrl as _sanitizeUrl } from './url_sanitizer';
/**
 * An `html` sanitizer which converts untrusted `html` **string** into trusted string by removing
 * dangerous content.
 *
 * This method parses the `html` and locates potentially dangerous content (such as urls and
 * javascript) and removes it.
 *
 * It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustHtml}.
 *
 * @param unsafeHtml untrusted `html`, typically from the user.
 * @returns `html` string which is safe to display to user, because all of the dangerous javascript
 * and urls have been removed.
 *
 * @codeGenApi
 */
export function ɵɵsanitizeHtml(unsafeHtml) {
    const sanitizer = getSanitizer();
    if (sanitizer) {
        return trustedHTMLFromStringBypass(sanitizer.sanitize(SecurityContext.HTML, unsafeHtml) || '');
    }
    if (allowSanitizationBypassAndThrow(unsafeHtml, "HTML" /* BypassType.Html */)) {
        return trustedHTMLFromStringBypass(unwrapSafeValue(unsafeHtml));
    }
    return _sanitizeHtml(getDocument(), renderStringify(unsafeHtml));
}
/**
 * A `style` sanitizer which converts untrusted `style` **string** into trusted string by removing
 * dangerous content.
 *
 * It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustStyle}.
 *
 * @param unsafeStyle untrusted `style`, typically from the user.
 * @returns `style` string which is safe to bind to the `style` properties.
 *
 * @codeGenApi
 */
export function ɵɵsanitizeStyle(unsafeStyle) {
    const sanitizer = getSanitizer();
    if (sanitizer) {
        return sanitizer.sanitize(SecurityContext.STYLE, unsafeStyle) || '';
    }
    if (allowSanitizationBypassAndThrow(unsafeStyle, "Style" /* BypassType.Style */)) {
        return unwrapSafeValue(unsafeStyle);
    }
    return renderStringify(unsafeStyle);
}
/**
 * A `url` sanitizer which converts untrusted `url` **string** into trusted string by removing
 * dangerous
 * content.
 *
 * This method parses the `url` and locates potentially dangerous content (such as javascript) and
 * removes it.
 *
 * It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustUrl}.
 *
 * @param unsafeUrl untrusted `url`, typically from the user.
 * @returns `url` string which is safe to bind to the `src` properties such as `<img src>`, because
 * all of the dangerous javascript has been removed.
 *
 * @codeGenApi
 */
export function ɵɵsanitizeUrl(unsafeUrl) {
    const sanitizer = getSanitizer();
    if (sanitizer) {
        return sanitizer.sanitize(SecurityContext.URL, unsafeUrl) || '';
    }
    if (allowSanitizationBypassAndThrow(unsafeUrl, "URL" /* BypassType.Url */)) {
        return unwrapSafeValue(unsafeUrl);
    }
    return _sanitizeUrl(renderStringify(unsafeUrl));
}
/**
 * A `url` sanitizer which only lets trusted `url`s through.
 *
 * This passes only `url`s marked trusted by calling {@link bypassSanitizationTrustResourceUrl}.
 *
 * @param unsafeResourceUrl untrusted `url`, typically from the user.
 * @returns `url` string which is safe to bind to the `src` properties such as `<img src>`, because
 * only trusted `url`s have been allowed to pass.
 *
 * @codeGenApi
 */
export function ɵɵsanitizeResourceUrl(unsafeResourceUrl) {
    const sanitizer = getSanitizer();
    if (sanitizer) {
        return trustedScriptURLFromStringBypass(sanitizer.sanitize(SecurityContext.RESOURCE_URL, unsafeResourceUrl) || '');
    }
    if (allowSanitizationBypassAndThrow(unsafeResourceUrl, "ResourceURL" /* BypassType.ResourceUrl */)) {
        return trustedScriptURLFromStringBypass(unwrapSafeValue(unsafeResourceUrl));
    }
    throw new RuntimeError(904 /* RuntimeErrorCode.UNSAFE_VALUE_IN_RESOURCE_URL */, ngDevMode &&
        'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)');
}
/**
 * A `script` sanitizer which only lets trusted javascript through.
 *
 * This passes only `script`s marked trusted by calling {@link
 * bypassSanitizationTrustScript}.
 *
 * @param unsafeScript untrusted `script`, typically from the user.
 * @returns `url` string which is safe to bind to the `<script>` element such as `<img src>`,
 * because only trusted `scripts` have been allowed to pass.
 *
 * @codeGenApi
 */
export function ɵɵsanitizeScript(unsafeScript) {
    const sanitizer = getSanitizer();
    if (sanitizer) {
        return trustedScriptFromStringBypass(sanitizer.sanitize(SecurityContext.SCRIPT, unsafeScript) || '');
    }
    if (allowSanitizationBypassAndThrow(unsafeScript, "Script" /* BypassType.Script */)) {
        return trustedScriptFromStringBypass(unwrapSafeValue(unsafeScript));
    }
    throw new RuntimeError(905 /* RuntimeErrorCode.UNSAFE_VALUE_IN_SCRIPT */, ngDevMode && 'unsafe value used in a script context');
}
/**
 * A template tag function for promoting the associated constant literal to a
 * TrustedHTML. Interpolation is explicitly not allowed.
 *
 * @param html constant template literal containing trusted HTML.
 * @returns TrustedHTML wrapping `html`.
 *
 * @security This is a security-sensitive function and should only be used to
 * convert constant values of attributes and properties found in
 * application-provided Angular templates to TrustedHTML.
 *
 * @codeGenApi
 */
export function ɵɵtrustConstantHtml(html) {
    // The following runtime check ensures that the function was called as a
    // template tag (e.g. ɵɵtrustConstantHtml`content`), without any interpolation
    // (e.g. not ɵɵtrustConstantHtml`content ${variable}`). A TemplateStringsArray
    // is an array with a `raw` property that is also an array. The associated
    // template literal has no interpolation if and only if the length of the
    // TemplateStringsArray is 1.
    if (ngDevMode && (!Array.isArray(html) || !Array.isArray(html.raw) || html.length !== 1)) {
        throw new Error(`Unexpected interpolation in trusted HTML constant: ${html.join('?')}`);
    }
    return trustedHTMLFromString(html[0]);
}
/**
 * A template tag function for promoting the associated constant literal to a
 * TrustedScriptURL. Interpolation is explicitly not allowed.
 *
 * @param url constant template literal containing a trusted script URL.
 * @returns TrustedScriptURL wrapping `url`.
 *
 * @security This is a security-sensitive function and should only be used to
 * convert constant values of attributes and properties found in
 * application-provided Angular templates to TrustedScriptURL.
 *
 * @codeGenApi
 */
export function ɵɵtrustConstantResourceUrl(url) {
    // The following runtime check ensures that the function was called as a
    // template tag (e.g. ɵɵtrustConstantResourceUrl`content`), without any
    // interpolation (e.g. not ɵɵtrustConstantResourceUrl`content ${variable}`). A
    // TemplateStringsArray is an array with a `raw` property that is also an
    // array. The associated template literal has no interpolation if and only if
    // the length of the TemplateStringsArray is 1.
    if (ngDevMode && (!Array.isArray(url) || !Array.isArray(url.raw) || url.length !== 1)) {
        throw new Error(`Unexpected interpolation in trusted URL constant: ${url.join('?')}`);
    }
    return trustedScriptURLFromString(url[0]);
}
/**
 * Detects which sanitizer to use for URL property, based on tag name and prop name.
 *
 * The rules are based on the RESOURCE_URL context config from
 * `packages/compiler/src/schema/dom_security_schema.ts`.
 * If tag and prop names don't match Resource URL schema, use URL sanitizer.
 */
export function getUrlSanitizer(tag, prop) {
    if ((prop === 'src' &&
        (tag === 'embed' || tag === 'frame' || tag === 'iframe' || tag === 'media' ||
            tag === 'script')) ||
        (prop === 'href' && (tag === 'base' || tag === 'link'))) {
        return ɵɵsanitizeResourceUrl;
    }
    return ɵɵsanitizeUrl;
}
/**
 * Sanitizes URL, selecting sanitizer function based on tag and property names.
 *
 * This function is used in case we can't define security context at compile time, when only prop
 * name is available. This happens when we generate host bindings for Directives/Components. The
 * host element is unknown at compile time, so we defer calculation of specific sanitizer to
 * runtime.
 *
 * @param unsafeUrl untrusted `url`, typically from the user.
 * @param tag target element tag name.
 * @param prop name of the property that contains the value.
 * @returns `url` string which is safe to bind.
 *
 * @codeGenApi
 */
export function ɵɵsanitizeUrlOrResourceUrl(unsafeUrl, tag, prop) {
    return getUrlSanitizer(tag, prop)(unsafeUrl);
}
export function validateAgainstEventProperties(name) {
    if (name.toLowerCase().startsWith('on')) {
        const errorMessage = `Binding to event property '${name}' is disallowed for security reasons, ` +
            `please use (${name.slice(2)})=...` +
            `\nIf '${name}' is a directive input, make sure the directive is imported by the` +
            ` current module.`;
        throw new RuntimeError(306 /* RuntimeErrorCode.INVALID_EVENT_BINDING */, errorMessage);
    }
}
export function validateAgainstEventAttributes(name) {
    if (name.toLowerCase().startsWith('on')) {
        const errorMessage = `Binding to event attribute '${name}' is disallowed for security reasons, ` +
            `please use (${name.slice(2)})=...`;
        throw new RuntimeError(306 /* RuntimeErrorCode.INVALID_EVENT_BINDING */, errorMessage);
    }
}
function getSanitizer() {
    const lView = getLView();
    return lView && lView[SANITIZER];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3Nhbml0aXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFtQixNQUFNLFdBQVcsQ0FBQztBQUN6RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFaEUsT0FBTyxFQUFDLHFCQUFxQixFQUFFLDBCQUEwQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDakcsT0FBTyxFQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLGdDQUFnQyxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFFbkosT0FBTyxFQUFDLCtCQUErQixFQUFjLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN0RixPQUFPLEVBQUMsYUFBYSxJQUFJLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksSUFBSSxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUk3RDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsVUFBZTtJQUM1QyxNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUUsQ0FBQztJQUNqQyxJQUFJLFNBQVMsRUFBRTtRQUNiLE9BQU8sMkJBQTJCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJ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LyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UnVudGltZUVycm9yLCBSdW50aW1lRXJyb3JDb2RlfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtnZXREb2N1bWVudH0gZnJvbSAnLi4vcmVuZGVyMy9pbnRlcmZhY2VzL2RvY3VtZW50JztcbmltcG9ydCB7U0FOSVRJWkVSfSBmcm9tICcuLi9yZW5kZXIzL2ludGVyZmFjZXMvdmlldyc7XG5pbXBvcnQge2dldExWaWV3fSBmcm9tICcuLi9yZW5kZXIzL3N0YXRlJztcbmltcG9ydCB7cmVuZGVyU3RyaW5naWZ5fSBmcm9tICcuLi9yZW5kZXIzL3V0aWwvc3RyaW5naWZ5X3V0aWxzJztcbmltcG9ydCB7VHJ1c3RlZEhUTUwsIFRydXN0ZWRTY3JpcHQsIFRydXN0ZWRTY3JpcHRVUkx9IGZyb20gJy4uL3V0aWwvc2VjdXJpdHkvdHJ1c3RlZF90eXBlX2RlZnMnO1xuaW1wb3J0IHt0cnVzdGVkSFRNTEZyb21TdHJpbmcsIHRydXN0ZWRTY3JpcHRVUkxGcm9tU3RyaW5nfSBmcm9tICcuLi91dGlsL3NlY3VyaXR5L3RydXN0ZWRfdHlwZXMnO1xuaW1wb3J0IHt0cnVzdGVkSFRNTEZyb21TdHJpbmdCeXBhc3MsIHRydXN0ZWRTY3JpcHRGcm9tU3RyaW5nQnlwYXNzLCB0cnVzdGVkU2NyaXB0VVJMRnJvbVN0cmluZ0J5cGFzc30gZnJvbSAnLi4vdXRpbC9zZWN1cml0eS90cnVzdGVkX3R5cGVzX2J5cGFzcyc7XG5cbmltcG9ydCB7YWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdywgQnlwYXNzVHlwZSwgdW53cmFwU2FmZVZhbHVlfSBmcm9tICcuL2J5cGFzcyc7XG5pbXBvcnQge19zYW5pdGl6ZUh0bWwgYXMgX3Nhbml0aXplSHRtbH0gZnJvbSAnLi9odG1sX3Nhbml0aXplcic7XG5pbXBvcnQge1Nhbml0aXplcn0gZnJvbSAnLi9zYW5pdGl6ZXInO1xuaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vc2VjdXJpdHknO1xuaW1wb3J0IHtfc2FuaXRpemVVcmwgYXMgX3Nhbml0aXplVXJsfSBmcm9tICcuL3VybF9zYW5pdGl6ZXInO1xuXG5cblxuLyoqXG4gKiBBbiBgaHRtbGAgc2FuaXRpemVyIHdoaWNoIGNvbnZlcnRzIHVudHJ1c3RlZCBgaHRtbGAgKipzdHJpbmcqKiBpbnRvIHRydXN0ZWQgc3RyaW5nIGJ5IHJlbW92aW5nXG4gKiBkYW5nZXJvdXMgY29udGVudC5cbiAqXG4gKiBUaGlzIG1ldGhvZCBwYXJzZXMgdGhlIGBodG1sYCBhbmQgbG9jYXRlcyBwb3RlbnRpYWxseSBkYW5nZXJvdXMgY29udGVudCAoc3VjaCBhcyB1cmxzIGFuZFxuICogamF2YXNjcmlwdCkgYW5kIHJlbW92ZXMgaXQuXG4gKlxuICogSXQgaXMgcG9zc2libGUgdG8gbWFyayBhIHN0cmluZyBhcyB0cnVzdGVkIGJ5IGNhbGxpbmcge0BsaW5rIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0SHRtbH0uXG4gKlxuICogQHBhcmFtIHVuc2FmZUh0bWwgdW50cnVzdGVkIGBodG1sYCwgdHlwaWNhbGx5IGZyb20gdGhlIHVzZXIuXG4gKiBAcmV0dXJucyBgaHRtbGAgc3RyaW5nIHdoaWNoIGlzIHNhZmUgdG8gZGlzcGxheSB0byB1c2VyLCBiZWNhdXNlIGFsbCBvZiB0aGUgZGFuZ2Vyb3VzIGphdmFzY3JpcHRcbiAqIGFuZCB1cmxzIGhhdmUgYmVlbiByZW1vdmVkLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1c2FuaXRpemVIdG1sKHVuc2FmZUh0bWw6IGFueSk6IFRydXN0ZWRIVE1MfHN0cmluZyB7XG4gIGNvbnN0IHNhbml0aXplciA9IGdldFNhbml0aXplcigpO1xuICBpZiAoc2FuaXRpemVyKSB7XG4gICAgcmV0dXJuIHRydXN0ZWRIVE1MRnJvbVN0cmluZ0J5cGFzcyhzYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIHVuc2FmZUh0bWwpIHx8ICcnKTtcbiAgfVxuICBpZiAoYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyh1bnNhZmVIdG1sLCBCeXBhc3NUeXBlLkh0bWwpKSB7XG4gICAgcmV0dXJuIHRydXN0ZWRIVE1MRnJvbVN0cmluZ0J5cGFzcyh1bndyYXBTYWZlVmFsdWUodW5zYWZlSHRtbCkpO1xuICB9XG4gIHJldHVybiBfc2FuaXRpemVIdG1sKGdldERvY3VtZW50KCksIHJlbmRlclN0cmluZ2lmeSh1bnNhZmVIdG1sKSk7XG59XG5cbi8qKlxuICogQSBgc3R5bGVgIHNhbml0aXplciB3aGljaCBjb252ZXJ0cyB1bnRydXN0ZWQgYHN0eWxlYCAqKnN0cmluZyoqIGludG8gdHJ1c3RlZCBzdHJpbmcgYnkgcmVtb3ZpbmdcbiAqIGRhbmdlcm91cyBjb250ZW50LlxuICpcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIG1hcmsgYSBzdHJpbmcgYXMgdHJ1c3RlZCBieSBjYWxsaW5nIHtAbGluayBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFN0eWxlfS5cbiAqXG4gKiBAcGFyYW0gdW5zYWZlU3R5bGUgdW50cnVzdGVkIGBzdHlsZWAsIHR5cGljYWxseSBmcm9tIHRoZSB1c2VyLlxuICogQHJldHVybnMgYHN0eWxlYCBzdHJpbmcgd2hpY2ggaXMgc2FmZSB0byBiaW5kIHRvIHRoZSBgc3R5bGVgIHByb3BlcnRpZXMuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVzYW5pdGl6ZVN0eWxlKHVuc2FmZVN0eWxlOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBzYW5pdGl6ZXIgPSBnZXRTYW5pdGl6ZXIoKTtcbiAgaWYgKHNhbml0aXplcikge1xuICAgIHJldHVybiBzYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlNUWUxFLCB1bnNhZmVTdHlsZSkgfHwgJyc7XG4gIH1cbiAgaWYgKGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3codW5zYWZlU3R5bGUsIEJ5cGFzc1R5cGUuU3R5bGUpKSB7XG4gICAgcmV0dXJuIHVud3JhcFNhZmVWYWx1ZSh1bnNhZmVTdHlsZSk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclN0cmluZ2lmeSh1bnNhZmVTdHlsZSk7XG59XG5cbi8qKlxuICogQSBgdXJsYCBzYW5pdGl6ZXIgd2hpY2ggY29udmVydHMgdW50cnVzdGVkIGB1cmxgICoqc3RyaW5nKiogaW50byB0cnVzdGVkIHN0cmluZyBieSByZW1vdmluZ1xuICogZGFuZ2Vyb3VzXG4gKiBjb250ZW50LlxuICpcbiAqIFRoaXMgbWV0aG9kIHBhcnNlcyB0aGUgYHVybGAgYW5kIGxvY2F0ZXMgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGNvbnRlbnQgKHN1Y2ggYXMgamF2YXNjcmlwdCkgYW5kXG4gKiByZW1vdmVzIGl0LlxuICpcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIG1hcmsgYSBzdHJpbmcgYXMgdHJ1c3RlZCBieSBjYWxsaW5nIHtAbGluayBieXBhc3NTYW5pdGl6YXRpb25UcnVzdFVybH0uXG4gKlxuICogQHBhcmFtIHVuc2FmZVVybCB1bnRydXN0ZWQgYHVybGAsIHR5cGljYWxseSBmcm9tIHRoZSB1c2VyLlxuICogQHJldHVybnMgYHVybGAgc3RyaW5nIHdoaWNoIGlzIHNhZmUgdG8gYmluZCB0byB0aGUgYHNyY2AgcHJvcGVydGllcyBzdWNoIGFzIGA8aW1nIHNyYz5gLCBiZWNhdXNlXG4gKiBhbGwgb2YgdGhlIGRhbmdlcm91cyBqYXZhc2NyaXB0IGhhcyBiZWVuIHJlbW92ZWQuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVzYW5pdGl6ZVVybCh1bnNhZmVVcmw6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IHNhbml0aXplciA9IGdldFNhbml0aXplcigpO1xuICBpZiAoc2FuaXRpemVyKSB7XG4gICAgcmV0dXJuIHNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuVVJMLCB1bnNhZmVVcmwpIHx8ICcnO1xuICB9XG4gIGlmIChhbGxvd1Nhbml0aXphdGlvbkJ5cGFzc0FuZFRocm93KHVuc2FmZVVybCwgQnlwYXNzVHlwZS5VcmwpKSB7XG4gICAgcmV0dXJuIHVud3JhcFNhZmVWYWx1ZSh1bnNhZmVVcmwpO1xuICB9XG4gIHJldHVybiBfc2FuaXRpemVVcmwocmVuZGVyU3RyaW5naWZ5KHVuc2FmZVVybCkpO1xufVxuXG4vKipcbiAqIEEgYHVybGAgc2FuaXRpemVyIHdoaWNoIG9ubHkgbGV0cyB0cnVzdGVkIGB1cmxgcyB0aHJvdWdoLlxuICpcbiAqIFRoaXMgcGFzc2VzIG9ubHkgYHVybGBzIG1hcmtlZCB0cnVzdGVkIGJ5IGNhbGxpbmcge0BsaW5rIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0UmVzb3VyY2VVcmx9LlxuICpcbiAqIEBwYXJhbSB1bnNhZmVSZXNvdXJjZVVybCB1bnRydXN0ZWQgYHVybGAsIHR5cGljYWxseSBmcm9tIHRoZSB1c2VyLlxuICogQHJldHVybnMgYHVybGAgc3RyaW5nIHdoaWNoIGlzIHNhZmUgdG8gYmluZCB0byB0aGUgYHNyY2AgcHJvcGVydGllcyBzdWNoIGFzIGA8aW1nIHNyYz5gLCBiZWNhdXNlXG4gKiBvbmx5IHRydXN0ZWQgYHVybGBzIGhhdmUgYmVlbiBhbGxvd2VkIHRvIHBhc3MuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVzYW5pdGl6ZVJlc291cmNlVXJsKHVuc2FmZVJlc291cmNlVXJsOiBhbnkpOiBUcnVzdGVkU2NyaXB0VVJMfHN0cmluZyB7XG4gIGNvbnN0IHNhbml0aXplciA9IGdldFNhbml0aXplcigpO1xuICBpZiAoc2FuaXRpemVyKSB7XG4gICAgcmV0dXJuIHRydXN0ZWRTY3JpcHRVUkxGcm9tU3RyaW5nQnlwYXNzKFxuICAgICAgICBzYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgdW5zYWZlUmVzb3VyY2VVcmwpIHx8ICcnKTtcbiAgfVxuICBpZiAoYWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyh1bnNhZmVSZXNvdXJjZVVybCwgQnlwYXNzVHlwZS5SZXNvdXJjZVVybCkpIHtcbiAgICByZXR1cm4gdHJ1c3RlZFNjcmlwdFVSTEZyb21TdHJpbmdCeXBhc3ModW53cmFwU2FmZVZhbHVlKHVuc2FmZVJlc291cmNlVXJsKSk7XG4gIH1cbiAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgIFJ1bnRpbWVFcnJvckNvZGUuVU5TQUZFX1ZBTFVFX0lOX1JFU09VUkNFX1VSTCxcbiAgICAgIG5nRGV2TW9kZSAmJlxuICAgICAgICAgICd1bnNhZmUgdmFsdWUgdXNlZCBpbiBhIHJlc291cmNlIFVSTCBjb250ZXh0IChzZWUgaHR0cHM6Ly9nLmNvL25nL3NlY3VyaXR5I3hzcyknKTtcbn1cblxuLyoqXG4gKiBBIGBzY3JpcHRgIHNhbml0aXplciB3aGljaCBvbmx5IGxldHMgdHJ1c3RlZCBqYXZhc2NyaXB0IHRocm91Z2guXG4gKlxuICogVGhpcyBwYXNzZXMgb25seSBgc2NyaXB0YHMgbWFya2VkIHRydXN0ZWQgYnkgY2FsbGluZyB7QGxpbmtcbiAqIGJ5cGFzc1Nhbml0aXphdGlvblRydXN0U2NyaXB0fS5cbiAqXG4gKiBAcGFyYW0gdW5zYWZlU2NyaXB0IHVudHJ1c3RlZCBgc2NyaXB0YCwgdHlwaWNhbGx5IGZyb20gdGhlIHVzZXIuXG4gKiBAcmV0dXJucyBgdXJsYCBzdHJpbmcgd2hpY2ggaXMgc2FmZSB0byBiaW5kIHRvIHRoZSBgPHNjcmlwdD5gIGVsZW1lbnQgc3VjaCBhcyBgPGltZyBzcmM+YCxcbiAqIGJlY2F1c2Ugb25seSB0cnVzdGVkIGBzY3JpcHRzYCBoYXZlIGJlZW4gYWxsb3dlZCB0byBwYXNzLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1c2FuaXRpemVTY3JpcHQodW5zYWZlU2NyaXB0OiBhbnkpOiBUcnVzdGVkU2NyaXB0fHN0cmluZyB7XG4gIGNvbnN0IHNhbml0aXplciA9IGdldFNhbml0aXplcigpO1xuICBpZiAoc2FuaXRpemVyKSB7XG4gICAgcmV0dXJuIHRydXN0ZWRTY3JpcHRGcm9tU3RyaW5nQnlwYXNzKFxuICAgICAgICBzYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlNDUklQVCwgdW5zYWZlU2NyaXB0KSB8fCAnJyk7XG4gIH1cbiAgaWYgKGFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3codW5zYWZlU2NyaXB0LCBCeXBhc3NUeXBlLlNjcmlwdCkpIHtcbiAgICByZXR1cm4gdHJ1c3RlZFNjcmlwdEZyb21TdHJpbmdCeXBhc3ModW53cmFwU2FmZVZhbHVlKHVuc2FmZVNjcmlwdCkpO1xuICB9XG4gIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICBSdW50aW1lRXJyb3JDb2RlLlVOU0FGRV9WQUxVRV9JTl9TQ1JJUFQsXG4gICAgICBuZ0Rldk1vZGUgJiYgJ3Vuc2FmZSB2YWx1ZSB1c2VkIGluIGEgc2NyaXB0IGNvbnRleHQnKTtcbn1cblxuLyoqXG4gKiBBIHRlbXBsYXRlIHRhZyBmdW5jdGlvbiBmb3IgcHJvbW90aW5nIHRoZSBhc3NvY2lhdGVkIGNvbnN0YW50IGxpdGVyYWwgdG8gYVxuICogVHJ1c3RlZEhUTUwuIEludGVycG9sYXRpb24gaXMgZXhwbGljaXRseSBub3QgYWxsb3dlZC5cbiAqXG4gKiBAcGFyYW0gaHRtbCBjb25zdGFudCB0ZW1wbGF0ZSBsaXRlcmFsIGNvbnRhaW5pbmcgdHJ1c3RlZCBIVE1MLlxuICogQHJldHVybnMgVHJ1c3RlZEhUTUwgd3JhcHBpbmcgYGh0bWxgLlxuICpcbiAqIEBzZWN1cml0eSBUaGlzIGlzIGEgc2VjdXJpdHktc2Vuc2l0aXZlIGZ1bmN0aW9uIGFuZCBzaG91bGQgb25seSBiZSB1c2VkIHRvXG4gKiBjb252ZXJ0IGNvbnN0YW50IHZhbHVlcyBvZiBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0aWVzIGZvdW5kIGluXG4gKiBhcHBsaWNhdGlvbi1wcm92aWRlZCBBbmd1bGFyIHRlbXBsYXRlcyB0byBUcnVzdGVkSFRNTC5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtXRydXN0Q29uc3RhbnRIdG1sKGh0bWw6IFRlbXBsYXRlU3RyaW5nc0FycmF5KTogVHJ1c3RlZEhUTUx8c3RyaW5nIHtcbiAgLy8gVGhlIGZvbGxvd2luZyBydW50aW1lIGNoZWNrIGVuc3VyZXMgdGhhdCB0aGUgZnVuY3Rpb24gd2FzIGNhbGxlZCBhcyBhXG4gIC8vIHRlbXBsYXRlIHRhZyAoZS5nLiDJtcm1dHJ1c3RDb25zdGFudEh0bWxgY29udGVudGApLCB3aXRob3V0IGFueSBpbnRlcnBvbGF0aW9uXG4gIC8vIChlLmcuIG5vdCDJtcm1dHJ1c3RDb25zdGFudEh0bWxgY29udGVudCAke3ZhcmlhYmxlfWApLiBBIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gIC8vIGlzIGFuIGFycmF5IHdpdGggYSBgcmF3YCBwcm9wZXJ0eSB0aGF0IGlzIGFsc28gYW4gYXJyYXkuIFRoZSBhc3NvY2lhdGVkXG4gIC8vIHRlbXBsYXRlIGxpdGVyYWwgaGFzIG5vIGludGVycG9sYXRpb24gaWYgYW5kIG9ubHkgaWYgdGhlIGxlbmd0aCBvZiB0aGVcbiAgLy8gVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgMS5cbiAgaWYgKG5nRGV2TW9kZSAmJiAoIUFycmF5LmlzQXJyYXkoaHRtbCkgfHwgIUFycmF5LmlzQXJyYXkoaHRtbC5yYXcpIHx8IGh0bWwubGVuZ3RoICE9PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnRlcnBvbGF0aW9uIGluIHRydXN0ZWQgSFRNTCBjb25zdGFudDogJHtodG1sLmpvaW4oJz8nKX1gKTtcbiAgfVxuICByZXR1cm4gdHJ1c3RlZEhUTUxGcm9tU3RyaW5nKGh0bWxbMF0pO1xufVxuXG4vKipcbiAqIEEgdGVtcGxhdGUgdGFnIGZ1bmN0aW9uIGZvciBwcm9tb3RpbmcgdGhlIGFzc29jaWF0ZWQgY29uc3RhbnQgbGl0ZXJhbCB0byBhXG4gKiBUcnVzdGVkU2NyaXB0VVJMLiBJbnRlcnBvbGF0aW9uIGlzIGV4cGxpY2l0bHkgbm90IGFsbG93ZWQuXG4gKlxuICogQHBhcmFtIHVybCBjb25zdGFudCB0ZW1wbGF0ZSBsaXRlcmFsIGNvbnRhaW5pbmcgYSB0cnVzdGVkIHNjcmlwdCBVUkwuXG4gKiBAcmV0dXJucyBUcnVzdGVkU2NyaXB0VVJMIHdyYXBwaW5nIGB1cmxgLlxuICpcbiAqIEBzZWN1cml0eSBUaGlzIGlzIGEgc2VjdXJpdHktc2Vuc2l0aXZlIGZ1bmN0aW9uIGFuZCBzaG91bGQgb25seSBiZSB1c2VkIHRvXG4gKiBjb252ZXJ0IGNvbnN0YW50IHZhbHVlcyBvZiBhdHRyaWJ1dGVzIGFuZCBwcm9wZXJ0aWVzIGZvdW5kIGluXG4gKiBhcHBsaWNhdGlvbi1wcm92aWRlZCBBbmd1bGFyIHRlbXBsYXRlcyB0byBUcnVzdGVkU2NyaXB0VVJMLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1dHJ1c3RDb25zdGFudFJlc291cmNlVXJsKHVybDogVGVtcGxhdGVTdHJpbmdzQXJyYXkpOiBUcnVzdGVkU2NyaXB0VVJMfHN0cmluZyB7XG4gIC8vIFRoZSBmb2xsb3dpbmcgcnVudGltZSBjaGVjayBlbnN1cmVzIHRoYXQgdGhlIGZ1bmN0aW9uIHdhcyBjYWxsZWQgYXMgYVxuICAvLyB0ZW1wbGF0ZSB0YWcgKGUuZy4gybXJtXRydXN0Q29uc3RhbnRSZXNvdXJjZVVybGBjb250ZW50YCksIHdpdGhvdXQgYW55XG4gIC8vIGludGVycG9sYXRpb24gKGUuZy4gbm90IMm1ybV0cnVzdENvbnN0YW50UmVzb3VyY2VVcmxgY29udGVudCAke3ZhcmlhYmxlfWApLiBBXG4gIC8vIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIGFuIGFycmF5IHdpdGggYSBgcmF3YCBwcm9wZXJ0eSB0aGF0IGlzIGFsc28gYW5cbiAgLy8gYXJyYXkuIFRoZSBhc3NvY2lhdGVkIHRlbXBsYXRlIGxpdGVyYWwgaGFzIG5vIGludGVycG9sYXRpb24gaWYgYW5kIG9ubHkgaWZcbiAgLy8gdGhlIGxlbmd0aCBvZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgMS5cbiAgaWYgKG5nRGV2TW9kZSAmJiAoIUFycmF5LmlzQXJyYXkodXJsKSB8fCAhQXJyYXkuaXNBcnJheSh1cmwucmF3KSB8fCB1cmwubGVuZ3RoICE9PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnRlcnBvbGF0aW9uIGluIHRydXN0ZWQgVVJMIGNvbnN0YW50OiAke3VybC5qb2luKCc/Jyl9YCk7XG4gIH1cbiAgcmV0dXJuIHRydXN0ZWRTY3JpcHRVUkxGcm9tU3RyaW5nKHVybFswXSk7XG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGljaCBzYW5pdGl6ZXIgdG8gdXNlIGZvciBVUkwgcHJvcGVydHksIGJhc2VkIG9uIHRhZyBuYW1lIGFuZCBwcm9wIG5hbWUuXG4gKlxuICogVGhlIHJ1bGVzIGFyZSBiYXNlZCBvbiB0aGUgUkVTT1VSQ0VfVVJMIGNvbnRleHQgY29uZmlnIGZyb21cbiAqIGBwYWNrYWdlcy9jb21waWxlci9zcmMvc2NoZW1hL2RvbV9zZWN1cml0eV9zY2hlbWEudHNgLlxuICogSWYgdGFnIGFuZCBwcm9wIG5hbWVzIGRvbid0IG1hdGNoIFJlc291cmNlIFVSTCBzY2hlbWEsIHVzZSBVUkwgc2FuaXRpemVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsU2FuaXRpemVyKHRhZzogc3RyaW5nLCBwcm9wOiBzdHJpbmcpIHtcbiAgaWYgKChwcm9wID09PSAnc3JjJyAmJlxuICAgICAgICh0YWcgPT09ICdlbWJlZCcgfHwgdGFnID09PSAnZnJhbWUnIHx8IHRhZyA9PT0gJ2lmcmFtZScgfHwgdGFnID09PSAnbWVkaWEnIHx8XG4gICAgICAgIHRhZyA9PT0gJ3NjcmlwdCcpKSB8fFxuICAgICAgKHByb3AgPT09ICdocmVmJyAmJiAodGFnID09PSAnYmFzZScgfHwgdGFnID09PSAnbGluaycpKSkge1xuICAgIHJldHVybiDJtcm1c2FuaXRpemVSZXNvdXJjZVVybDtcbiAgfVxuICByZXR1cm4gybXJtXNhbml0aXplVXJsO1xufVxuXG4vKipcbiAqIFNhbml0aXplcyBVUkwsIHNlbGVjdGluZyBzYW5pdGl6ZXIgZnVuY3Rpb24gYmFzZWQgb24gdGFnIGFuZCBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgaW4gY2FzZSB3ZSBjYW4ndCBkZWZpbmUgc2VjdXJpdHkgY29udGV4dCBhdCBjb21waWxlIHRpbWUsIHdoZW4gb25seSBwcm9wXG4gKiBuYW1lIGlzIGF2YWlsYWJsZS4gVGhpcyBoYXBwZW5zIHdoZW4gd2UgZ2VuZXJhdGUgaG9zdCBiaW5kaW5ncyBmb3IgRGlyZWN0aXZlcy9Db21wb25lbnRzLiBUaGVcbiAqIGhvc3QgZWxlbWVudCBpcyB1bmtub3duIGF0IGNvbXBpbGUgdGltZSwgc28gd2UgZGVmZXIgY2FsY3VsYXRpb24gb2Ygc3BlY2lmaWMgc2FuaXRpemVyIHRvXG4gKiBydW50aW1lLlxuICpcbiAqIEBwYXJhbSB1bnNhZmVVcmwgdW50cnVzdGVkIGB1cmxgLCB0eXBpY2FsbHkgZnJvbSB0aGUgdXNlci5cbiAqIEBwYXJhbSB0YWcgdGFyZ2V0IGVsZW1lbnQgdGFnIG5hbWUuXG4gKiBAcGFyYW0gcHJvcCBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIHRoZSB2YWx1ZS5cbiAqIEByZXR1cm5zIGB1cmxgIHN0cmluZyB3aGljaCBpcyBzYWZlIHRvIGJpbmQuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVzYW5pdGl6ZVVybE9yUmVzb3VyY2VVcmwodW5zYWZlVXJsOiBhbnksIHRhZzogc3RyaW5nLCBwcm9wOiBzdHJpbmcpOiBhbnkge1xuICByZXR1cm4gZ2V0VXJsU2FuaXRpemVyKHRhZywgcHJvcCkodW5zYWZlVXJsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWdhaW5zdEV2ZW50UHJvcGVydGllcyhuYW1lOiBzdHJpbmcpIHtcbiAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgYEJpbmRpbmcgdG8gZXZlbnQgcHJvcGVydHkgJyR7bmFtZX0nIGlzIGRpc2FsbG93ZWQgZm9yIHNlY3VyaXR5IHJlYXNvbnMsIGAgK1xuICAgICAgICBgcGxlYXNlIHVzZSAoJHtuYW1lLnNsaWNlKDIpfSk9Li4uYCArXG4gICAgICAgIGBcXG5JZiAnJHtuYW1lfScgaXMgYSBkaXJlY3RpdmUgaW5wdXQsIG1ha2Ugc3VyZSB0aGUgZGlyZWN0aXZlIGlzIGltcG9ydGVkIGJ5IHRoZWAgK1xuICAgICAgICBgIGN1cnJlbnQgbW9kdWxlLmA7XG4gICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihSdW50aW1lRXJyb3JDb2RlLklOVkFMSURfRVZFTlRfQklORElORywgZXJyb3JNZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBZ2FpbnN0RXZlbnRBdHRyaWJ1dGVzKG5hbWU6IHN0cmluZykge1xuICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICBgQmluZGluZyB0byBldmVudCBhdHRyaWJ1dGUgJyR7bmFtZX0nIGlzIGRpc2FsbG93ZWQgZm9yIHNlY3VyaXR5IHJlYXNvbnMsIGAgK1xuICAgICAgICBgcGxlYXNlIHVzZSAoJHtuYW1lLnNsaWNlKDIpfSk9Li4uYDtcbiAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKFJ1bnRpbWVFcnJvckNvZGUuSU5WQUxJRF9FVkVOVF9CSU5ESU5HLCBlcnJvck1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNhbml0aXplcigpOiBTYW5pdGl6ZXJ8bnVsbCB7XG4gIGNvbnN0IGxWaWV3ID0gZ2V0TFZpZXcoKTtcbiAgcmV0dXJuIGxWaWV3ICYmIGxWaWV3W1NBTklUSVpFUl07XG59XG4iXX0=