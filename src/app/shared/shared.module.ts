import { NgModule } from '@angular/core';

import { FooterComponent } from '../shared/footer/footer.component'
import { HeaderComponent } from '../shared/header/header.component'
import { LikeDislikeComponent } from '../shared/like-dislike/like-dislike.component'
import { NavComponent } from '../shared/nav/nav.component'
import { TagsComponent } from '../shared/tags/tags.component'

const components = [FooterComponent,
    HeaderComponent,
    NavComponent,
    TagsComponent,
    LikeDislikeComponent];

@NgModule({
    declarations: components,
    exports: components
})
export class SharedModule { }
