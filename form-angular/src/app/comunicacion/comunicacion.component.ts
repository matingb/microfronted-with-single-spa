import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.scss']
})
export class ComunicacionComponent implements OnInit {
  
  value = new FormControl('');
  
  constructor(private thisWindow: Window) {}

  ngOnInit(): void {
  }

  guardarEnLocalStore() {
    window.localStorage.setItem("comunicacion", this.value.value)
  }

  guardarEnWindow() {
    this.thisWindow['value'] = "456"
  }

  guardarEnRxjs() {
    console.log("RXJS")
  }
}
