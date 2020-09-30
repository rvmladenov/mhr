
import {Action} from '@ngrx/store';

export enum ArticleActionTypes {
  Like = '[Like Article] Like',
  Dislike = '[Dislikes Article] Dislike'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class ArticleLike implements ActionEx {
  readonly type = ArticleActionTypes.Like;

  constructor(public payload: any) {
  }
}

export class ArticleDislike implements ActionEx {
  readonly type = ArticleActionTypes.Dislike;

  constructor(public payload: any) {
  }
}