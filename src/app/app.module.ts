import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NgSwitchCaseComponent } from "./components/ng-switch-case/ng-switch-case.component";
import { NgForComponent } from "./components/ng-for/ng-for.component";
import { NgModelComponent } from "./components/ng-model/ng-model.component";
import { CreateCourseComponent } from "./components/create-course/create-course.component";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { FormArrayComponent } from './components/form-array/form-array.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgModelComponent,
    CreateCourseComponent,
    FormArrayComponent,
    ForgotPasswordComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
