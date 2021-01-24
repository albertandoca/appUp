import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export interface Junta {
  id: number;
  idLugar: number;
  sexo: string;
  numero: number;
  idPersona: number;
  electores: number;
  control: boolean;
  auditoria?: boolean;
}

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {

  provincia: string
  distrito: string
  canton: string
  parroquia: string
  recinto: string
  juntas: Array<Junta>

  constructor(private router:Router) { }
o
  ngOnInit() {
    this.provincia = 'Chimborazo'
    this.distrito = null
    this.canton = 'Riobamba'
    this.parroquia = 'Lizarzaburu'
    this.recinto = 'Colegio Cardenal Spelman de mujeres y acompañantes'
  }

  login() {
    this.router.navigateByUrl('login')
  }

  resetlogin() {
    this.router.navigateByUrl('resetlogin')
  }

  presidente() {

  }

  nacional() {

  }

  provincial() {

  }

  parlamento() {

  }

}
