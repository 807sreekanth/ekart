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
 * This module is used for handling user input, by defining and building a `FormGroup` that
 * consists of `FormControl` objects, and mapping them onto the DOM. `FormControl`
 * objects can then be used to read information from the form DOM elements.
 *
 * Forms providers are not included in default providers; you must import these providers
 * explicitly.
 */
export { ɵInternalFormsSharedModule } from './directives';
export { AbstractControlDirective } from './directives/abstract_control_directive';
export { AbstractFormGroupDirective } from './directives/abstract_form_group_directive';
export { CheckboxControlValueAccessor } from './directives/checkbox_value_accessor';
export { ControlContainer } from './directives/control_container';
export { NG_VALUE_ACCESSOR } from './directives/control_value_accessor';
export { COMPOSITION_BUFFER_MODE, DefaultValueAccessor } from './directives/default_value_accessor';
export { NgControl } from './directives/ng_control';
export { NgControlStatus, NgControlStatusGroup } from './directives/ng_control_status';
export { NgForm } from './directives/ng_form';
export { NgModel } from './directives/ng_model';
export { NgModelGroup } from './directives/ng_model_group';
export { ɵNgNoValidate } from './directives/ng_no_validate_directive';
export { NumberValueAccessor } from './directives/number_value_accessor';
export { RadioControlValueAccessor } from './directives/radio_control_value_accessor';
export { RangeValueAccessor } from './directives/range_value_accessor';
export { FormControlDirective } from './directives/reactive_directives/form_control_directive';
export { FormControlName } from './directives/reactive_directives/form_control_name';
export { FormGroupDirective } from './directives/reactive_directives/form_group_directive';
export { FormArrayName, FormGroupName } from './directives/reactive_directives/form_group_name';
export { NgSelectOption, SelectControlValueAccessor } from './directives/select_control_value_accessor';
export { SelectMultipleControlValueAccessor, ɵNgSelectMultipleOption } from './directives/select_multiple_control_value_accessor';
export { CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MaxValidator, MinLengthValidator, MinValidator, PatternValidator, RequiredValidator } from './directives/validators';
export { FormBuilder, NonNullableFormBuilder, UntypedFormBuilder } from './form_builder';
export { AbstractControl } from './model/abstract_model';
export { FormArray, UntypedFormArray } from './model/form_array';
export { FormControl, UntypedFormControl } from './model/form_control';
export { FormGroup, FormRecord, UntypedFormGroup } from './model/form_group';
export { NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators } from './validators';
export { VERSION } from './version';
export * from './form_providers';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7OztHQVNHO0FBRUgsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDbkYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDekYsT0FBTyxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUMsY0FBYyxFQUFFLDBCQUEwQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFDLGtDQUFrQyxFQUFFLHVCQUF1QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDaEksT0FBTyxFQUFtQyx5QkFBeUIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBMkMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2USxPQUFPLEVBQWdCLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBVyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hILE9BQU8sRUFBQyxlQUFlLEVBQXVKLE1BQU0sd0JBQXdCLENBQUM7QUFDN00sT0FBTyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRyxPQUFPLEVBQUMsV0FBVyxFQUF3QyxrQkFBa0IsRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQztBQUM3SCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBcUQsTUFBTSxvQkFBb0IsQ0FBQztBQUMvSCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRWxDLGNBQWMsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbW9kdWxlIGlzIHVzZWQgZm9yIGhhbmRsaW5nIHVzZXIgaW5wdXQsIGJ5IGRlZmluaW5nIGFuZCBidWlsZGluZyBhIGBGb3JtR3JvdXBgIHRoYXRcbiAqIGNvbnNpc3RzIG9mIGBGb3JtQ29udHJvbGAgb2JqZWN0cywgYW5kIG1hcHBpbmcgdGhlbSBvbnRvIHRoZSBET00uIGBGb3JtQ29udHJvbGBcbiAqIG9iamVjdHMgY2FuIHRoZW4gYmUgdXNlZCB0byByZWFkIGluZm9ybWF0aW9uIGZyb20gdGhlIGZvcm0gRE9NIGVsZW1lbnRzLlxuICpcbiAqIEZvcm1zIHByb3ZpZGVycyBhcmUgbm90IGluY2x1ZGVkIGluIGRlZmF1bHQgcHJvdmlkZXJzOyB5b3UgbXVzdCBpbXBvcnQgdGhlc2UgcHJvdmlkZXJzXG4gKiBleHBsaWNpdGx5LlxuICovXG5cbmV4cG9ydCB7ybVJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlfSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuZXhwb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXInO1xuZXhwb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Q09NUE9TSVRJT05fQlVGRkVSX01PREUsIERlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0Zvcm19IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtX2ludGVyZmFjZSc7XG5leHBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2wnO1xuZXhwb3J0IHtOZ0NvbnRyb2xTdGF0dXMsIE5nQ29udHJvbFN0YXR1c0dyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMnO1xuZXhwb3J0IHtOZ0Zvcm19IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3JtJztcbmV4cG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsJztcbmV4cG9ydCB7TmdNb2RlbEdyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAnO1xuZXhwb3J0IHvJtU5nTm9WYWxpZGF0ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX25vX3ZhbGlkYXRlX2RpcmVjdGl2ZSc7XG5leHBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXJfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFkaW9fY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge1JhbmdlVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhbmdlX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Rm9ybUNvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtGb3JtQ29udHJvbE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9uYW1lJztcbmV4cG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm1BcnJheU5hbWUsIEZvcm1Hcm91cE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5leHBvcnQge05nU2VsZWN0T3B0aW9uLCBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7U2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvciwgybVOZ1NlbGVjdE11bHRpcGxlT3B0aW9ufSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciwgRW1haWxWYWxpZGF0b3IsIE1heExlbmd0aFZhbGlkYXRvciwgTWF4VmFsaWRhdG9yLCBNaW5MZW5ndGhWYWxpZGF0b3IsIE1pblZhbGlkYXRvciwgUGF0dGVyblZhbGlkYXRvciwgUmVxdWlyZWRWYWxpZGF0b3IsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcbmV4cG9ydCB7Q29udHJvbENvbmZpZywgRm9ybUJ1aWxkZXIsIE5vbk51bGxhYmxlRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtQnVpbGRlciwgybVFbGVtZW50fSBmcm9tICcuL2Zvcm1fYnVpbGRlcic7XG5leHBvcnQge0Fic3RyYWN0Q29udHJvbCwgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgRm9ybUNvbnRyb2xTdGF0dXMsIMm1Q29lcmNlU3RyQXJyVG9OdW1BcnIsIMm1R2V0UHJvcGVydHksIMm1TmF2aWdhdGUsIMm1UmF3VmFsdWUsIMm1VG9rZW5pemUsIMm1VHlwZWRPclVudHlwZWQsIMm1VmFsdWUsIMm1V3JpdGVhYmxlfSBmcm9tICcuL21vZGVsL2Fic3RyYWN0X21vZGVsJztcbmV4cG9ydCB7Rm9ybUFycmF5LCBVbnR5cGVkRm9ybUFycmF5LCDJtUZvcm1BcnJheVJhd1ZhbHVlLCDJtUZvcm1BcnJheVZhbHVlfSBmcm9tICcuL21vZGVsL2Zvcm1fYXJyYXknO1xuZXhwb3J0IHtGb3JtQ29udHJvbCwgRm9ybUNvbnRyb2xPcHRpb25zLCBGb3JtQ29udHJvbFN0YXRlLCBVbnR5cGVkRm9ybUNvbnRyb2wsIMm1Rm9ybUNvbnRyb2xDdG9yfSBmcm9tICcuL21vZGVsL2Zvcm1fY29udHJvbCc7XG5leHBvcnQge0Zvcm1Hcm91cCwgRm9ybVJlY29yZCwgVW50eXBlZEZvcm1Hcm91cCwgybVGb3JtR3JvdXBSYXdWYWx1ZSwgybVGb3JtR3JvdXBWYWx1ZSwgybVPcHRpb25hbEtleXN9IGZyb20gJy4vbW9kZWwvZm9ybV9ncm91cCc7XG5leHBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvcnN9IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5leHBvcnQge1ZFUlNJT059IGZyb20gJy4vdmVyc2lvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vZm9ybV9wcm92aWRlcnMnO1xuIl19