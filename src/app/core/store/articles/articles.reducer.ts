import {ActionEx, ArticleActionTypes} from './articles.actions';
export const initialState = [];

export function CustomerReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case ArticleActionTypes.Like:

        return [...state, action.payload];

    case ArticleActionTypes.Dislike:

        return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
​
    default:
      return state;
  }
}
