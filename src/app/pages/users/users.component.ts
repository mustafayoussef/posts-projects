import { User } from './../../core/Models/user';
import { UserService } from './../../core/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users:User[] | any = [];
  constructor(private userService:UserService) {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(users=>{
      this.users = users;
    })
  }

}
