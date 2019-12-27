FlowRouter.route('/', {
    name: 'home',
    action: function() {
      console.log("Looking?");
      GAnalytics.pageview();
      BlazeLayout.render('home');
    }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action: function() {
    console.log("Looking?");
    GAnalytics.pageview('/recipe-book');
    BlazeLayout.render('main', { main: 'recipes' });
  }
});
