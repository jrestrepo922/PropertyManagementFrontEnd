import { Component, OnInit } from '@angular/core';
import { CreateUserDTO } from 'src/app/models/user/createUserDTO';
import { UserService } from 'src/app/services/user.service';
import { NotificationType } from 'src/app/util/notifications/notification-message';
import { NotificationService } from 'src/app/util/notifications/notification.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  username: string = ""; 
  password: string = "";
  confirmPassword: string = ""; 


  constructor(
    private userService: UserService,
    ) { }

  ngOnInit(): void {
  }

  handleCreate(){
    if(this.password != this.confirmPassword){
      window.alert("password does not match"); 
      return;
    }

    let createUserDto: CreateUserDTO = {
      username: this.username,
      password: this.password,
    }
    this.userService.createUser(createUserDto); 
  }

}
