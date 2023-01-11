import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService
        .login()
        .subscribe({
          next: (value) => {
            value && this.router.navigate(['./heroes'])
            this.authService.setUser(value)
            this.saveUserSession(value)
          },
          error: (err) => {
            
          },
        })
  }

  saveUserSession(userData: Auth){
    localStorage.setItem('id', userData.id)
  }

}
