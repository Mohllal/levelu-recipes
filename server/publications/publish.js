import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../collections/recipes';

Meteor.publish('Recipes', function () {
    return Recipes.find({ author: this.userId });
})