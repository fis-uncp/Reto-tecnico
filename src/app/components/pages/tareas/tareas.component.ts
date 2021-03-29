import { Comment_I } from './../../../interfaces/coment.interface';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { addNewListAction, updateTareaAction } from 'src/app/redux/actions/board.action';
// INTERFACES
import { Board_I } from '../../../interfaces/board.interface';
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

    const payload = {
      type: "SELECT_ID_TAREA",
      idTarea,
      idBoard
    }
    this._store.dispatch(payload)
  }

  selectuser: any = "";
  selectedUser(user: User_I) {
    this.selectuser = user;
  }

  addUserOnBoard(boards, idBoard) {

    const payload = {
      type: "ADD_USER_ON_BOARD",
      dataBoards: boards,
      idBoard,
      user: this.selectuser
    }
    this._store.dispatch(payload)
  }


}


