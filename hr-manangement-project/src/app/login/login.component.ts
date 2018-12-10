import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
// import { pipe, map } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  urlLogin = './loginUsers';
  loginValid;
  constructor( private http: HttpClient, private router: Router ) { }

  ngOnInit() {
  }

  makeLogin( username, password) {
    // console.log(data, data2);
    const petition = this.http.get(this.urlLogin);
    let userList;
    let isValid;

    petition.subscribe(
        (response: any) => {
          userList = response;
        },
        null,
        () => {
          isValid = userList.filter(
                      data => data.username === username && data.password === password
                    );
          if ( isValid.length > 0 ) {
            // console.log('save on local storage', isValid);
            this.loginValid = true;
            localStorage.setItem('user_logged', isValid[0].username);
            this.router.navigate(['/dashboard']);
          } else {
            // console.log('User or Password invalid');
            localStorage.clear();
          }

        }

    );
  }



}
