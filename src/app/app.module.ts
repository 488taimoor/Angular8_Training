import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { A2SetValuesAndPatchValuesComponent } from './a2-set-values-and-patch-values/a2-set-values-and-patch-values.component';
import { A1NestedFormGroupComponent } from './a1-nested-form-group/a1-nested-form-group.component';
import { A3FormBuilderComponent } from './a3-form-builder/a3-form-builder.component';
import { A4FormValidationComponent } from './a4-form-validation/a4-form-validation.component';
import { A5ValidationsAndLogicsInComponentComponent } from './a5-validations-and-logics-in-component/a5-validations-and-logics-in-component.component';
import { A6DynamicallyValidationComponent } from './a6-dynamically-validation/a6-dynamically-validation.component';
import { A7CustomValidationComponent } from './a7-custom-validation/a7-custom-validation.component';
import { A8CustomValidationWithParameterComponent } from './a8-custom-validation-with-parameter/a8-custom-validation-with-parameter.component';
import { A9ReuseCustomValidationComponent } from './a9-reuse-custom-validation/a9-reuse-custom-validation.component';
import { WebRTCComponent } from './web-rtc/web-rtc.component';
import { A10ParentChildFormValidationComponent } from './a10-parent-child-form-validation/a10-parent-child-form-validation.component';
import { ChildComponent } from './a10-parent-child-form-validation/child/child.component';
import { A11ConfirmPasswordValidationComponent } from './a11-confirm-password-validation/a11-confirm-password-validation.component';
import { A12FormArrayComponent } from './a12-form-array/a12-form-array.component';
import { StylingPracticeComponent } from './styling-practice/styling-practice.component';
import { FlexComponent } from './styling-practice/flex/flex.component';
import { A13LazyLoadingModuleComponent } from './a13-lazy-loading-module/a13-lazy-loading-module.component';
import { A14ChildViewParentComponent } from './a14-child-view-parent/a14-child-view-parent.component';
import { A14childComponent } from './a14-child-view-parent/a14child/a14child.component';
@NgModule({
  declarations: [
    AppComponent,
    A2SetValuesAndPatchValuesComponent,
    A1NestedFormGroupComponent,
    A3FormBuilderComponent,
    A4FormValidationComponent,
    A5ValidationsAndLogicsInComponentComponent,
    A6DynamicallyValidationComponent,
    A7CustomValidationComponent,
    A8CustomValidationWithParameterComponent,
    A9ReuseCustomValidationComponent,
    WebRTCComponent,
    A10ParentChildFormValidationComponent,
    ChildComponent,
    A11ConfirmPasswordValidationComponent,
    A12FormArrayComponent,
    StylingPracticeComponent,
    FlexComponent,
    A13LazyLoadingModuleComponent,
    A14ChildViewParentComponent,
    A14childComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
