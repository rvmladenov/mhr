import { Article } from 'src/app/home/articles/article/article.model';
import {ActionEx, ArticleActionTypes} from './articles.actions';

export interface State {
    articles: Article[]
  }

export const initialState: State = {
    articles: []
};

export const reducerName = 'articles';

export function reducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case ArticleActionTypes.AddArticles:
        return {
            ...state,
            articles: action.payload
        };

    case ArticleActionTypes.Like:
        const articles = [...state.articles.map(article => {
            if (article.id == action.payload && article.likes < 10) {
                const newArticle = {...article, likes: article.likes+1};

                return newArticle;
            }

            return article;
        })];

        return { articles: articles };

    case ArticleActionTypes.Dislike:

        const articlesDis = [...state.articles.map(article => {
            if (article.id == action.payload && article.likes > 0) {
                const newArticle = { ...article, likes: article.likes-1 };

                return newArticle;
            }

            return article;
        })];

        return { articles: articlesDis };
​
    default:
      return state;
  }
}
