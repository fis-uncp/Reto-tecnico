import { Comment_I } from './../../../interfaces/coment.interface';
import { ADD_COMMENT } from './../../actions/board.action';
// import { Action } from "@ngrx/store";
import { Board_I } from 'src/app/interfaces/board.interface';
import { Tarea_I } from 'src/app/interfaces/tarea.interface';
import { v4 as uuidv4 } from 'uuid';
import { ADD_NEW_BOARD, UPDATE_TAREA } from '../../actions/board.action';

const stateStart = {
  boards: [
    {
      id: uuidv4(),
      tareas: [],
      title: "Tabla de ejemplo",
      users: [
        {
          id: uuidv4(),
          image: "/assets/images/imagen1.jpg",
          mail: "shalom_98@gmail.com",
          name: "Shalom Salazar",
        }
      ],
    }
  ],

  selectedTareaId: "",
  selectedBoardId: "",
  imgParfil:"/assets/images/imagen1.jpg"
}

const updateTarea = (idBoard: string, dataBoards: Board_I[], tareaToAdd: Tarea_I) => {

  return dataBoards.map(dataBoard => {
    if (dataBoard.id === idBoard) {
      const tareas: any = [...dataBoard.tareas, tareaToAdd]

      dataBoard = { ...dataBoard, tareas };
      return dataBoard;
    } else {
      return dataBoard;
    }
  })
}

const addComennt = (tareaId: string, boardId: string, dataBoards: any, commentToAdd: Comment_I) => {

  return dataBoards.map((dataBoard: any) => {
    if (dataBoard.id === boardId) {
      const commentUpdate = dataBoard.tareas.map((tarea: any) => {
        if (tarea.id === tareaId) {
          const comments: any = [...tarea.comments, commentToAdd];
          tarea = { ...tarea, comments: comments };
          return tarea;
        } else {
          return tarea
        }
      })
      const tareas: any = [...commentUpdate]
      dataBoard = { ...dataBoard, tareas };
      return dataBoard
    } else {
      return dataBoard;
    }
  })

}


export function boardReducer(state = stateStart, action) {
  const { type, dataBoards, idBoard } = action;

  switch (type) {

    case ADD_NEW_BOARD:
      const { title } = action;
      return {
        ...state,
        boards: [...state.boards, { id: uuidv4(), title, tareas: [], users: [] }]
      }

    case UPDATE_TAREA:
      const { tareaToAdd } = action;
      return {
        ...state,
        boards: updateTarea(idBoard, dataBoards, tareaToAdd)
      }

    case ADD_COMMENT:
      const { tareaId, boardId, commentToAdd } = action;
      return {
        ...state,
        boards: addComennt(tareaId, boardId, dataBoards, commentToAdd)
      }

    case "SELECT_ID_TAREA":
      const { idTarea } = action;
      return {
        ...state,
        selectedTareaId: idTarea,
        selectedBoardId: idBoard,
      }


    case "ADD_USER_ON_BOARD":
      const { user } = action;
      return {
        ...state,
        boards: dataBoards.map((board: any) => {
          if (board.id === idBoard) {
            const users: any = [...board.users, user];
            board = { ...board, users };
            return board;
          } else {
            return board;
          }
        })

      }

    default:
      return state;

  }
}
