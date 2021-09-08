
import { Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  nombre: string | undefined;
  cif: string | undefined;
  direccion: string | undefined;
  grupo: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
