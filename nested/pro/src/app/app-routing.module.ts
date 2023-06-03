import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { NestedFormComponent } from './nestedform/nestedform.component';

const routes: Routes = [
  {path:'nestedform', component: NestedFormComponent},
  {path:'display', component: DisplayComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
