import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetlogin',
  templateUrl: './resetlogin.page.html',
  styleUrls: ['./resetlogin.page.scss'],
})
export class ResetloginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cambiar() {
    this.router.navigateByUrl('menu')
  }

  salir() {
    this.router.navigateByUrl('login')
  }

}
