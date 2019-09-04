import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is test recipe',
    'https://cdn.pixabay.com/photo/2017/09/19/20/41/pizza-2766568_960_720.jpg'),
    new Recipe('Test recipe', 'This is test recipe',
    'https://cdn.pixabay.com/photo/2017/09/19/20/41/pizza-2766568_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
