import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styles: [
  ]
})
export class TableroComponent implements OnInit {

  @Input() board;
  constructor() { }

  ngOnInit(): void {
  }

}
