import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login = new Login();
  message: string;
  
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.loginService.login(this.login).subscribe(data => {
      if((data.status == 'SUCCESS')) {
        let loggedinId = data.userId;
        let name = data.name;
        let typeOfUser= data.userType;
        sessionStorage.setItem('loggedinId', String(loggedinId));
        sessionStorage.setItem('typeOfUser', typeOfUser);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('loggedin', "true");
        sessionStorage.setItem('clicked', "true");
        this.router.navigate(['menubar']);
      }
      else {
        this.message = "Incorrect login credentials";
      }
    })
  }



}
