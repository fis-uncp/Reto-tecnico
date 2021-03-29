import { Board_I } from './../../../interfaces/board.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tableros',
  templateUrl: './tableros.component.html',
  styles: [
  ]
})
export class TablerosComponent implements OnInit {

  boards: Board_I[];
  constructor(private _store: Store<any>) {

    this._store.subscribe(state => {
      const { boardReducer } = state.reducer;

      this.boards = boardReducer.boards;
    })
  }

  ngOnInit(): void {
  }

}
