import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from './article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

    @Input() article: Article;
    @Output() like = new EventEmitter();
    @Output() disLike = new EventEmitter();

    onLike() {
        this.like.emit();
    }

    onDislike() {
        this.disLike.emit();
    }
}
