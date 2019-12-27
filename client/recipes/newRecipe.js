import './newRecipe.html';
import { Recipes } from '../../collections/recipes';

Template.newRecipe.helpers({
	page(){
		return Template.currentData();
	},
	collection(){
		return Recipes;
	},
});