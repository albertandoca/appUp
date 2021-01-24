import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  entrar() {
    this.router.navigateByUrl('menu')
  }

  salir() {
    this.router.navigateByUrl('resetlogin')
  }

}
