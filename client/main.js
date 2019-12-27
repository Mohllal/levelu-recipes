import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layouts/home.html';

Meteor.subscribe('Recipes');
