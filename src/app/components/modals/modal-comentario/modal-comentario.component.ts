import { Comment_I } from './../../../interfaces/coment.interface';
import { Board_I } from './../../../interfaces/board.interface';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addComentToTareaAction } from 'src/app/redux/actions/board.action';

@Component({
  selector: 'app-modal-comentario',
  templateUrl: './modal-comentario.component.html',
})
export class ModalComentarioComponent {

  @Input() boardId: string;

  selectedIdTarea: string;
  selectedIdBoard: string;
  tareas: any ="";
  imgParfil:string;

  boards: Board_I[];
  constructor(private _store: Store<any>) {
    this._store.subscribe(state => {
      const { boardReducer } = state.reducer;
      this.boards = boardReducer.boards;
      this.selectedIdTarea = boardReducer.selectedTareaId;
      this.selectedIdBoard = boardReducer.selectedBoardId;
      this.imgParfil = boardReducer.imgParfil;

      if (this.selectedIdBoard !== "" && this.selectedIdTarea !== "") {
        this.tareas = this.boards.find((board:any) => board.id === this.selectedIdBoard).tareas.find((tarea:any)=> tarea.id === this.selectedIdTarea);
        this.tareas = this.tareas;
      }
    })

  }


  addComentToTarea(comment: string) {
    this._store.dispatch(addComentToTareaAction(this.selectedIdTarea, this.selectedIdBoard, this.boards, comment))
    setTimeout(() => {
    }, 3000)
  }


}
