import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() nombre= "";
  @Input() direccion= "";
  @Input() cif= "";
  @Input() grupo= "";

  cliente={nombre:"",
    direccion:"",
    cif:"",
    grupo:""
  };

  clientes = new Array();

  constructor() {

  }

  ngOnInit(): void {
  }

  guardar() {
    this.cliente = {nombre: this.nombre,
      direccion: this.direccion,
      cif: this.cif,
      grupo: this.grupo
    };

    this.clientes.push(this.cliente);
  }
}
