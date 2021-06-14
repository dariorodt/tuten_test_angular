import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService, ISession } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Model
  myForm = new FormGroup({
    email : new FormControl(),
    app : new FormControl(),
    password : new FormControl()
  });

  constructor(private dataService: DataService, private router: Router) { }

  onSubmit() {
    console.log(this.myForm.value);
    let {email, app, password} = this.myForm.value;
    console.log("with: " + email);
    this.dataService.login(email, {App:app, Password:password}).subscribe(
      (data: any) => {
        console.log("login responded");
        console.log("Session Token: " + data.sessionTokenBck);

        this.dataService.session = { App: app, Password: password, SessionData: data};
        this.router.navigate(["/booking"]);
      },
      (error: any) => {
        console.log("login respond with errors: " + error.error);
      }
    );

  }

}
