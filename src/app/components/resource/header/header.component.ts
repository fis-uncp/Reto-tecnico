import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  imgParfil: string;
  constructor(private _store: Store<any>) {
    this._store.subscribe(state => {
      const { boardReducer } = state.reducer;
      this.imgParfil = boardReducer.imgParfil;
    })
  }

  ngOnInit(): void {
  }

}
