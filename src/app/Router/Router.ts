import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablerosComponent } from '../components/pages/tableros/tableros.component';
import { TareasComponent } from '../components/pages/tareas/tareas.component';

const routes: Routes = [
  {path: "" , component:TablerosComponent},
  {path: "tableros" , component:TablerosComponent},
  {path: "tareas" , component:TareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
