import { Meteor } from 'meteor/meteor';

export default Recipes = new Mongo.Collection('recipes');

Recipes.allow({ 
    insert: function(userId, doc) { 
        return !!userId; 
    }, 
    update: function() { 
        return true; 
    }, 
    remove: function() { 
        return true; 
    }
});

IngredientSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Ingredient Name"
    },
    amount: {
        type: String,
        label: "Ingredient Amount"
    }
})

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "Description"
    },
    ingredients: {
        type: [IngredientSchema]
    },
    isInMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Recipes.attachSchema(RecipeSchema);