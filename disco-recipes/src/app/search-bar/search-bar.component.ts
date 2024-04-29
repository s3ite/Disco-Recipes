import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  constructor(private recipesService: RecipesService) {}

  searchRecipes(userInput: string) {
    this.recipesService.getRecipesByName(userInput);
  }
}
