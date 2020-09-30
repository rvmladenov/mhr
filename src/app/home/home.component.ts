import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticlesService } from '../core/articles/articles.service';
import { Article } from './articles/article/article.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddArticles } from '../core/store/articles/articles.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private unsubscribe$ = new Subject<void>();

    constructor(private articlesService: ArticlesService, private store: Store<any>) { }

    ngOnInit(): void {
        this.articlesService
            .getAllArticles()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((articles: Article[]) => {
                this.store.dispatch(new AddArticles(articles));
            })
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
