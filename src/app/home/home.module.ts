import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';

const components = [ArticlesComponent, ArticleComponent];

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule
    ]
})
export class HomeModule { }
