import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = 'http://localhost:3000/login';

  private signupURL = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) { }
  
  logout() { }
  
  login(user: UserModel) {
    const authData = {
      email: user.email,
      password: user.password
    }

    return this.http.post(this.loginURL, authData);

  }

  nuevoUsuario(user: UserModel) {
    const authData = {
      name: user.name,
      email: user.email,
      password: user.password
    }

    return this.http.post(this.signupURL, authData);

  }
}
