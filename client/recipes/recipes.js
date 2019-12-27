import { Recipes } from '../../collections/recipes';
import './recipes.html';

Meteor.subscribe('Recipes');
Template.recipes.helpers({ 
    recipes: function () {
        return Recipes.find({});
    }
});