import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article/article.model';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    @Input() articles: Article[] = [];

    ngOnInit(): void {
        console.log(this.articles);
    }

    like(articleId) {
        // TODO
    }

    dislike(articleId) {
        // TODO
    }


}
