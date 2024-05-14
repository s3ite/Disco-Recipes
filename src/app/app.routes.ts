import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Home Page',

    },
    {
        path: 'recipe/:id',
        component: RecipeDetailComponent,
        title: 'Recipe Detail',
    },
    {
        path: 'categories/:category',
        component: FilterPageComponent,
        title: 'Category',
    },
    {
        path: 'areas/:area',
        component: FilterPageComponent,
        title: 'Area',
    },
    {
        path: 'ingredients/:ingredient',
        component: FilterPageComponent,
        title: 'Ingredients',
    }
];
