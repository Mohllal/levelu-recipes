import { Recipes } from '../../collections/recipes';
import './recipes.html';

Template.recipes.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('Recipes')
    })
});

Template.recipes.helpers({ 
    recipes: function () {
        return Recipes.find({});
    }
});