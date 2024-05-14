import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipe-caroussel',
  standalone: true,
  imports: [RecipeCardComponent],
  templateUrl: './recipe-caroussel.component.html',
  styleUrl: './recipe-caroussel.component.scss'
})
export class RecipeCarousselComponent {
  recipe1 :any;
  recipe2 :any;
  recipe3 :any;

  constructor(private recipesService: RecipesService) {}

  async ngOnInit() {
    const randomRecipe = await this.recipesService.getRandomRecipe();
    this.recipe1 = randomRecipe.meals[0];

    const randomRecipe2 = await this.recipesService.getRandomRecipe();
    this.recipe2 = randomRecipe2.meals[0];

    const randomRecipe3 = await this.recipesService.getRandomRecipe();
    this.recipe3 = randomRecipe3.meals[0];
  }
}
