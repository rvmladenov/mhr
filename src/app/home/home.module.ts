import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer, reducerName } from '../core/store/articles/articles.reducer';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

const components = [HomeComponent, ArticlesComponent, ArticleComponent];

@NgModule({
    declarations: components,
    exports: components,
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        HttpClientModule,
        StoreModule.forFeature(reducerName, reducer)
    ]
})
export class HomeModule { }
