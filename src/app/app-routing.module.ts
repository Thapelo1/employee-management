import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEmployeeComponent} from "./components/add-employee/add-employee.component";
import {ViewEmployeesComponent} from "./components/view-employees/view-employees.component";
import {HomeComponent} from "./components/home/home.component";
import { AllocationComponent } from './components/allocation/allocation.component';

const routes: Routes = [
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'view-employee', component: ViewEmployeesComponent},
  {path: 'allocate', component: AllocationComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
