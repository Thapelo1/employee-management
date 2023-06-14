import {Component, OnInit} from '@angular/core';
import {Employee} from "../../_shared/interfaces/employee";
import {UserService} from "../../_shared/user.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{



  employeeAdded: boolean = false;
  isSubmitted: boolean = false;

  addEmployeeForm = this.fb.group({
    first_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onAddEmployee(employee: Employee): void {
    this.userService.addNewEmployee(employee).subscribe(
      (response: Employee) => console.log(response),
      (error) => console.log(error),
      () => console.log('Employee created'),
    );
    this.employeeAdded = true;
    this.isSubmitted = true;
  }

  closeAlert(): void {
    this.employeeAdded = false;
    this.addEmployeeForm.reset();
  }

}
