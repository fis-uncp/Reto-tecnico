import { combineReducers } from "@ngrx/store";
import { userReducer } from './user/user.reducer';
import { boardReducer } from './board/board.reducer';

export const reducer = combineReducers({
  userReducer,
  boardReducer,
});
