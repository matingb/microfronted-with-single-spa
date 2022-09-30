import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.scss']
})
export class ComunicacionComponent implements OnInit {
  
  nombre = new FormControl('');
  apellido = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
