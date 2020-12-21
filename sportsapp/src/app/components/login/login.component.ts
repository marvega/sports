import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/model/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UserModel;

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm) {
    
    if (form.invalid) return;

    this.auth.login(this.user).subscribe(resp => {
      console.log(resp)
    }, err => {
        console.log(err);
        console.log(err.error.message);
        console.log(err.error.success);
    });
    
  }


}
