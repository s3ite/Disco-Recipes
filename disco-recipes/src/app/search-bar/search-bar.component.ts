import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  constructor(private recipesService: RecipesService, private router: Router) {}

  async searchRecipes(userInput: string) {
    const result = await this.recipesService.getRecipesByName(userInput);
    this.router.navigate(['/recipe', result.meals[0].idMeal]);
  }
}
