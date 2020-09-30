import { createSelector, createFeatureSelector } from '@ngrx/store';
import { reducerName, State } from './articles.reducer';

export const ArticleSelector = createFeatureSelector(reducerName);
export const getAllArticles = createSelector(ArticleSelector, (state: State) => state.articles );
