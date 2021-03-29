import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULOS
import { AppComponent } from './app.component';

// REDUX
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/reducers/app.reducer';

// COMPONENTES
import { AppRoutingModule } from './Router/Router';
import { HeaderComponent } from './components/resource/header/header.component';
import { TareasComponent } from './components/pages/tareas/tareas.component';
import { TablerosComponent } from './components/pages/tableros/tableros.component';
import { TableroComponent } from './components/pages/tableros/tablero/tablero.component';
import { TareaComponent } from './components/pages/tareas/tarea/tarea.component';
import { ModalComentarioComponent } from './components/modals/modal-comentario/modal-comentario.component';


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TareaComponent,
    TablerosComponent,
    TableroComponent,
    HeaderComponent,
    ModalComentarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot({reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
