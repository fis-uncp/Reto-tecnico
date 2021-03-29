import { Board_I } from 'src/app/interfaces/board.interface';
import { v4 as uuidv4 } from 'uuid';

export const ADD_NEW_BOARD = "ADD_NEW_BOARD";
export const UPDATE_TAREA = "UPDATE_TAREA";
export const ADD_COMMENT = "ADD_COMMENT";

export const SELECT_ID_TAREA = "SELECT_ID_TAREA";
export const ADD_USER_ON_BOARD = "ADD_USER_ON_BOARD";

export function addNewListAction(title: string) {
  return {
    type: ADD_NEW_BOARD,
    id: uuidv4(),
    title
  }
}

export function updateTareaAction(title: string, desc: string, idBoard: string, boards: Board_I[]) {
  return {
    type: UPDATE_TAREA,
    idBoard,
    dataBoards: boards,
    tareaToAdd: {
      id: uuidv4(),
      title,
      description: desc,
      comments: []
    }
  }
}

export function addComentToTareaAction(tareaId: string, boardId: string, boards: Board_I[], comment: string) {
  return {
    type: ADD_COMMENT,
    boardId,
    tareaId,
    dataBoards: boards,
    commentToAdd: {
      id: uuidv4(),
      description: comment,
    }
  }
}

export function selectIdTareaAction(idTarea:string, idBoard:string, comments:any) {
  return {
    type: SELECT_ID_TAREA,
    idTarea,
    idBoard,
    comments
  }
}

export function addUserOnBoardAction(boards:Board_I[], idBoard:string, selectedUser:string) {
  return {
    type: ADD_USER_ON_BOARD,
    dataBoards: boards,
    idBoard,
    user: selectedUser
  }
}
