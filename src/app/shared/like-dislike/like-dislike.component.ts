import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-like-dislike',
    templateUrl: './like-dislike.component.html',
    styleUrls: ['./like-dislike.component.scss']
})
export class LikeDislikeComponent {

    @Input() likes = 0;
    @Output() like = new EventEmitter();
    @Output() dislike = new EventEmitter();

    onLike() {
        this.like.emit();
    }

    onDislike() {
        this.like.emit();
    }

}
