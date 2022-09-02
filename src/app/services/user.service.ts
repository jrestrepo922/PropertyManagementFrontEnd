import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateUserDTO } from '../models/user/createUserDTO';
import { GetUserDTO } from '../models/user/getUserDTO';
import { NotificationService } from '../util/notifications/notification.service';
import { catchError, map, tap } from 'rxjs/operators';
import { NotificationType } from '../util/notifications/notification-message';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlBackEnd = 'http://localhost:8080/users'; 
  private baseUrlFrontEnd= "users"


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
   //private notificationService: NotificationService,
    private http: HttpClient, 
    private router: Router
  ) { }

  // gets call when creating a new account 
  createUser(user: CreateUserDTO) {
    this.http.post<GetUserDTO>(this.baseUrlBackEnd, user, this.httpOptions)
    // subscribe gets call once the asyn request has completed
    .subscribe((getUserDTO) => {
      this.router.navigate([this.baseUrlFrontEnd, getUserDTO.id, "properties"]); 
    }, () => {
      window.alert("Error creating account")
    }); 
  }


    // gets call when creating a new account 
    validateUser(url: string) {
      this.http.get<GetUserDTO>(this.baseUrlBackEnd + url)
      // subscribe gets call once the asyn request has completed
      .subscribe((getUserDTO) => {
        this.router.navigate([this.baseUrlFrontEnd, getUserDTO.id, "properties"]); 
      }, () => {
        // if the post fails the second call back funciton gets call
        window.alert("Incorrect password or username")
      }); 
    }
}












    // // gets call when creating a new account 
    // validateUser(user: CreateUserDTO, url: string) {

    //   this.http.get<boolean>(url)
    //   // subscribe gets call once the asyn request has completed
    //   .subscribe((booleanValue) => {
    //     this.router.navigateByUrl(""); 
    //   }, () => {
    //     // if the post fails the second call back funciton gets call
    //     this.notificationService.sendMessage({
    //       message: "fail to create user",
    //       type: NotificationType.error,
    //     })
    //   }); 
    // }