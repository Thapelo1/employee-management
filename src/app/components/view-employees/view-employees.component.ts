import {Component, OnInit} from '@angular/core';
import {delay} from "rxjs";
import {Employee} from "../../_shared/interfaces/employee";
import {UserService} from "../../_shared/user.service";
import {User} from "../../_shared/interfaces/user";

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit{

  employees$ = this.userService.getEmployees().pipe(
    delay(2000)
  );


  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => console.table(response),
      (error) => console.log(error),
      () => console.log('Users retrived'),
    );
  }

  onGetUser(): void {
    this.userService.getUser('1').subscribe(
      (response: User) => console.table(response),
      (error) => console.log(error),
      () => console.log('User retrived'),
    );
  }

}
