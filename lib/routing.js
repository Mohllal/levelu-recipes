FlowRouter.route('/', {
    name: 'home',
    action: function() {
      console.log("Looking?");
      BlazeLayout.render('home');
    }
});

