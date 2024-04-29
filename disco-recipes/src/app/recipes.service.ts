import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  async getRecipesByName(name: string) {
    const response = await fetch(`${this.baseUrl}/search.php?s=${name}`);
    return response.json();
  }

  async getRecipeDetailsById(id: string) {
    const response = await fetch(`${this.baseUrl}/lookup.php?i=${id}`);
    return response.json();
  }

  async getRandomRecipe() {
    const response = await fetch(`${this.baseUrl}/random.php`);
    return response.json();
  }

  // =========================== List of filters functions ===========================
  async getAllMealCategories() {
    const response = await fetch(`${this.baseUrl}/categories.php`);
    return response.json();
  }

  async getAllMainIngredients() {
    const response = await fetch(`${this.baseUrl}/list.php?i=list`);
    return response.json();
  }

  async getAllAreas() {
    const response = await fetch(`${this.baseUrl}/list.php?a=list`);
    return response.json();
  }

  // =========================== Filter functions ===========================
  async getMealsByMainIngredient(ingredient: string) {
    const response = await fetch(`${this.baseUrl}/filter.php?i=${ingredient}`);
    return response.json();
  }

  async getMealsByCategory(category: string) {
    const response = await fetch(`${this.baseUrl}/filter.php?c=${category}`);
    return response.json();
  }

  async getMealsByArea(area: string) {
    const response = await fetch(`${this.baseUrl}/filter.php?a=${area}`);
    return response.json();
  }

}
