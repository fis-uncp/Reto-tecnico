import { Board_I } from './../../interfaces/board.interface';
import { v4 as uuidv4 } from 'uuid';

export const ADD_NEW_BOARD = "ADD_NEW_BOARD";
export const UPDATE_TAREA = "UPDATE_TAREA";
export const ADD_COMMENT = "ADD_COMMENT";


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

export function addComentToTareaAction( tareaId: string,boardId: string, boards: Board_I[], comment: string) {
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
