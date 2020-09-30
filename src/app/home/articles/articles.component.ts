import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from './article/article.model';
import { getAllArticles } from '../../core/store/articles/articles.selector';
import { ArticleDislike, ArticleLike } from '../../core/store/articles/articles.actions';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    constructor(private store: Store<any>) {}

    articles$: Observable<Article[]> = this.store.pipe(select(getAllArticles));

    ngOnInit(): void {
        
    }

    onLike(articleId) {
        this.store.dispatch(new ArticleLike(articleId));
    }
    
    onDislike(articleId) {
        this.store.dispatch(new ArticleDislike(articleId));
    }
}
