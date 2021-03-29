import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNewListAction, selectIdTareaAction, updateTareaAction, addUserOnBoardAction } from 'src/app/redux/actions/board.action';

// INTERFACES
import { Board_I } from 'src/app/interfaces/board.interface';
import { Comment_I } from './../../../interfaces/coment.interface';
import { User_I } from 'src/app/interfaces/user.interface';
import { Tarea_I } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styles: [
  ]
})
export class TareasComponent {

  users: User_I[];
  boards: Board_I[];
  tareas: Tarea_I[];

  constructor(private _store: Store<any>) {
    this._store.subscribe(state => {
      const { userReducer, boardReducer } = state.reducer;
      this.users = userReducer;
      this.boards = boardReducer.boards;

      console.log("STATE-- ", this.boards)
    })
  }


  addNewBoard(title: string) {
    this._store.dispatch(addNewListAction(title))
  }

  idBoard: string;
  captureIdBoard(idBoard: string) {
    this.idBoard = idBoard;
  }

  addNewTarea(title: string, desc: string) {
    this._store.dispatch(updateTareaAction(title, desc, this.idBoard, this.boards))
  }

  boardId: string;
  tareaId: string;
  captureBoaridAndTareaid(tareaId: string, boardId: string) {
    this.boardId = boardId;
    this.tareaId = tareaId;
  }

  setIdTarea(idTarea: string, idBoard: string, comments: Comment_I) {
    this._store.dispatch(selectIdTareaAction(idTarea, idBoard, comments))
  }

  selectuser: any = "";
  selectedUser(user: User_I) {
    this.selectuser = user;
  }

  addUserOnBoard(boards: Board_I[], idBoard: string) {
    this._store.dispatch(addUserOnBoardAction(boards, idBoard, this.selectuser))
  }


}


