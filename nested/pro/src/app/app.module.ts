import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedFormComponent } from './nestedform/nestedform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CascardingComponent } from './cascarding/cascarding.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { Login11Component } from './login11/login11.component';
import { ListComponent } from './list/list.component';
import { ConvertPipe } from './pipes/convert.pipe';
import { NabComponent } from './nab/nab.component';
import { AgePipe } from './pipex/age.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NestedFormComponent,
    CheckboxComponent,
    CascardingComponent,
    CheckboxComponent,
    LoginComponent,
    DisplayComponent,
    Login11Component,
    ListComponent,
    ConvertPipe,
    NabComponent,
    AgePipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
