import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddemployeepageComponent } from './addemployeepage/addemployeepage.component';
import { EmployeedeletepageComponent } from './employeedeletepage/employeedeletepage.component';
import { EmployeedetailpageComponent } from './employeedetailpage/employeedetailpage.component';
import { EmployeeeditinformationpageComponent } from './employeeeditinformationpage/employeeeditinformationpage.component';
import { EmployelistpageComponent } from './employelistpage/employelistpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationfinishpageComponent } from './registrationfinishpage/registrationfinishpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

const routes: Routes = [
  {path:'loginpage', component:LoginpageComponent},
  {path:'employeelistpage', component:EmployelistpageComponent},
  {path:'addemployeepage', component:AddemployeepageComponent},
  {path:'employeedetailpage/:id', component:EmployeedetailpageComponent},
  {path:'registrationpage', component:RegistrationpageComponent},
  {path:'registrationfinishpage', component:RegistrationfinishpageComponent},
  {path:'deleteconfirmation/:id', component:EmployeedeletepageComponent},
  {path:'editinformation/:id', component:EmployeeeditinformationpageComponent},
  {path:'', component:HomepageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomepageComponent, LoginpageComponent,RegistrationpageComponent,RegistrationfinishpageComponent, EmployelistpageComponent,AddemployeepageComponent,EmployeedetailpageComponent]
