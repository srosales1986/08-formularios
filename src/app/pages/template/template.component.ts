import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  user = {
    name: 'Sebastián',
    lastName: 'Rosales',
    email: 'srosales@gmail.com',
    pais: 'ARG',
    genero: ''
  }
  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {

    this.paisService.getPaises().subscribe( paises => {
      this.paises = paises;
      
      this.paises.unshift({
        name: '[ Seleccione un Pais ]',
        code: ''
      })      
      
    });
  }

  save(forma: NgForm) {
    console.log(forma);

    if ( forma.invalid ) {

      Object.values( forma.controls ).forEach ( control => {
        control.markAsTouched();        
      });

      return;
    }
    console.log(forma.value);
    
    
  }
}
