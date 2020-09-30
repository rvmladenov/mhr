import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticlesService } from '../core/articles/articles.service';
import { Article } from './articles/article/article.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    private unsubscribe$ = new Subject<void>();
    articles: Article[] = [];

    constructor(private articlesService: ArticlesService) { }

    ngOnInit(): void {
        this.articlesService
            .getAllArticles()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((articles: Article[]) => {
                this.articles = articles;
            })
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
