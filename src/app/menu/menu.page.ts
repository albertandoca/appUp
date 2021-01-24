import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  usuario: string
  constructor(private router:Router) { }

  ngOnInit() {
    this.usuario = 'Rosa Paulina Jacome Rosero'
  }

  login() {
    this.router.navigateByUrl('login')
  }

  resetlogin() {
    this.router.navigateByUrl('resetlogin')
  }

  presidente() {
    this.router.navigateByUrl('mesas')
  }

  nacional() {

  }

  provincial() {

  }

  parlamento() {

  }

}
