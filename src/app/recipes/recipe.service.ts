import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg',
            [
                new Ingredient('Shrimps', 10),
                new Ingredient('Mustard', 1)
            ]),
        new Recipe(
            'Another test recipe',
            'Another test',
            'https://upload.wikimedia.org/wikipedia/commons/8/80/Guacamole_Pepper-Jack_Burger.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2),
                new Ingredient('Cheese', 3)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}