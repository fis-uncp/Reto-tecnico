import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {

  constructor(private _store: Store<any>) {
    this._store.subscribe(state => {
    })
  }

}
