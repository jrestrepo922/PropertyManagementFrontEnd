import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserDTO } from 'src/app/models/user/createUserDTO';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username: string = ""; 
  password: string = ""; 

  constructor(
    private router: Router,
    private userService: UserService, 
    ) { }

  ngOnInit(): void {
  }

  handleClick(){
    this.router.navigateByUrl("/signup");
  }

  handleLogin(){
    let url = `/validate?username=${this.username}&password=${this.password}`; 
    this.userService.validateUser(url); 
  }
}
