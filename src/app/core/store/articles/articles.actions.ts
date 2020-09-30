
import { Action } from '@ngrx/store';

export class ActionEx implements Action {
    readonly type;
    payload: any;
  }

export enum ArticleActionTypes {
    AddArticles = '[Articles] Add list of articles',
    Like = '[Articles] Like',
    Dislike = '[Articles] Dislike'
}


export class AddArticles implements ActionEx {
  readonly type = ArticleActionTypes.AddArticles;

  constructor(public payload: any) {
  }
}

export class ArticleLike implements ActionEx {
  readonly type = ArticleActionTypes.Like;

  constructor(public payload: number) {
  }
}

export class ArticleDislike implements Action {
  readonly type = ArticleActionTypes.Dislike;

  constructor(public payload: number) {
  }
}