import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/_shared/user.service';

interface Allocation {
  allocationAmount?: number | null | undefined;
}

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  allocationAmount = 500;
  accounts$ = this.userService.getAccounts();

  constructor(private fb: FormBuilder, private userService:  UserService) { }

  allocationsForm = this.fb.group({
    accounts: this.fb.array([])
  })

  allocateFunds(){
    console.log(this.allocationsForm.value);
  }

  submitForm() {
    if (this.allocationsForm.valid) {
      console.log(this.allocationsForm.value); // Do something with the form data
    } else {
      // Handle form validation errors
      // console.log('Max Value hit');
    }
  }

  get formAccounts() {
    const control = this.allocationsForm.get('accounts') as FormArray;
    return control;
  }

  ngOnInit(): void {
    this.userService.getAccounts().subscribe(
      (response) => {
        const accounts = this.allocationsForm.get('accounts') as FormArray;
        response.forEach((account, i) => {
          accounts.push(
            this.fb.group({
              accountName: [response[i].accountName, Validators.required],
              accountNumber: [response[i].accountNumber, Validators.required],
              balance: [response[i].balance, Validators.required],
              allocationAmount: [null, [Validators.min(0), Validators.max(response[i].balance)]]
            })
          )
        });
        console.log(this.allocationsForm)
      }
    )
  }

}
