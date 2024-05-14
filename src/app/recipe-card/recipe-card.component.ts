import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input() meal: {
    idMeal?: string | undefined;
    strMeal?: string | undefined;
    strMealThumb?: string | undefined;
    strCategory?: string | undefined;
    strArea?: string | undefined;
  } = { idMeal: '', strMeal: '', strMealThumb: '', strCategory: '', strArea: ''};
}
