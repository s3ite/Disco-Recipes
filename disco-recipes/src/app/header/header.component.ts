import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../recipes.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  areas = [{} as { strArea: string }];
  categories = [
    {} as {
      idCategory: string;
      strCategory: string;
      strCategoryThumb: string;
      strCategoryDescription: string;
    },
  ];
  ingredients = [
    {} as {
      idIngredient: string;
      strIngredient: string;
      strDescription: string;
      strType: string;
    },
  ];

  filterForm!:FormGroup;
  constructor(private recipesService: RecipesService, private router: Router) {
    this.filterForm = new FormGroup({
      filter: new FormControl('')
    });
  }

  async ngOnInit() {
    const resultCategories = await this.recipesService.getAllMealCategories();
    this.categories = resultCategories.categories;

    const resultIngredients = await this.recipesService.getAllMainIngredients();
    this.ingredients = resultIngredients.meals;

    const resultAreas = await this.recipesService.getAllAreas();
    this.areas = resultAreas.meals;
  }

  submit() {
    const value = this.filterForm.value.filter;
    if (value?.strCategory) {
      this.router.navigate(['/categories', value.strCategory]);
    }

    if (value?.strArea) {
      this.router.navigate(['/areas', value.strArea]);
    }

    if (value?.strIngredient) {
      this.router.navigate(['/ingredients', value.strIngredient]);
    }
  }
}
