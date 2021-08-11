import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  continentes: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  continenteActivo: string = '';
  paises:Country[]=[];

  constructor(private paisService:PaisService) {}

  getClassCss(continente:string):string{
    return (continente===this.continenteActivo)?'btn-outline-primary':'btn-outline-primary'
  }

  activarContinetne(continente: string) {

    if (continente===this.continenteActivo) {
      return;
    }

    this.continenteActivo = continente;
    this.paises=[];
    this.paisService.buscarContinente(continente)
    .subscribe(paises=>this.paises=paises)
  }
}
