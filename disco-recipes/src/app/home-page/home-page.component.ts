import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeCarousselComponent } from '../recipe-caroussel/recipe-caroussel.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBarComponent, RecipeCardComponent, RecipeCarousselComponent, RouterModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title = 'Disco Recipes';
  subtitle = 'Eveillez vos papilles avec des recettes de cuisine du monde entier !';
}
