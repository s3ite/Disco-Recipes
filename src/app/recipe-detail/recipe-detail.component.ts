import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatDividerModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent {
  id = '52772';
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute, private recipesService: RecipesService,  private sanitizer: DomSanitizer) {}

  recipe: Recipe = {} as Recipe;
  ingredients: { name: string, measure: string }[] = [];
  youtubeUrl: SafeResourceUrl | undefined;


  async ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    const result = await this.recipesService.getRecipeDetailsById(this.id);
    this.recipe = result.meals[0];
    this.onRecipeDataReceived()
    }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  // it's necessary to use @ts-ignore here because the recipe object typescript
  // is not able to infer that strIngredient${i} is a valid key of the Recipe type
  onRecipeDataReceived() {
    for (let i = 1; i <= 20; i++) {
      // @ts-ignore
      if(this.recipe[`strIngredient${i}`] === "") return;

      // @ts-ignore
      const ingredientName = this.recipe[`strIngredient${i}`];

      // @ts-ignore
      const ingredientMeasure = this.recipe[`strMeasure${i}`];

      if (ingredientName && ingredientMeasure) {
        this.ingredients.push({ name: ingredientName, measure: ingredientMeasure });
      }

      if (this.recipe.strYoutube) {
        const videoId = this.recipe.strYoutube.split('v=')[1];
        this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
      }
    }
  }
}
