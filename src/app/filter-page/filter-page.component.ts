import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-page',
  standalone: true,
  imports: [RecipeCardComponent, CommonModule],
  templateUrl: './filter-page.component.html',
  styleUrl: './filter-page.component.scss'
})
export class FilterPageComponent {
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {}
  category: string | undefined;
  area: string | undefined;
  ingredient: string | undefined;

  meals: { idMeal: string; strMeal: string; strMealThumb: string }[] = [];

  async ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.ingredient = params?.['ingredient'];
      this.category = params?.['category'];
      this.area = params?.['area'];
    });

    this.onRecipeDataReceived();
  }

  onRecipeDataReceived() {
    this.meals = [];
    if (this.category) {
      this.recipesService.getMealsByCategory(this.category).then((result) => {
        this.meals = result.meals;
      });
    }

    if (this.area) {
      this.recipesService.getMealsByArea(this.area).then((result) => {
        this.meals = result.meals;
      });
    }

    if (this.ingredient) {
      this.recipesService.getMealsByMainIngredient(this.ingredient).then((result) => {
        this.meals = result.meals;
      });
    }
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
