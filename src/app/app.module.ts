import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NavComponent } from './components/nav/nav.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DetailEmployeesComponent } from './components/view-employees/detail-employees/detail-employees.component';
import { AllocationComponent } from './components/allocation/allocation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent,
    HomeComponent,
    DetailEmployeesComponent,
    AllocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
