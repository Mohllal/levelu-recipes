FlowRouter.route('/', {
    name: 'home',
    action: function() {
      console.log("Looking?");
      BlazeLayout.render('home');
    }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action: function() {
    console.log("Looking?");
    BlazeLayout.render('main', { main: 'recipes' });
  }
});
