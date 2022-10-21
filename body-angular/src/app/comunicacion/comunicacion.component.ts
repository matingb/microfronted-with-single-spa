import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.scss']
})
export class ComunicacionComponent implements OnInit {

  value: any;
  constructor(private thisWindow: Window) { }

  ngOnInit(): void {
  }

  localStore() {
    this.value = window.localStorage.getItem("comunicacion")
  }

  window() {
    //this.value = this.thisWindow['value']
  }

  rxjs() {
    console.log("RXJS")
  }

}