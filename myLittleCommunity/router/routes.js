Router.route('/', {
  controller: 'HomeController',
  name: 'home'
});

Router.route('/about', 'about', {
  name: 'about'
});

Router.route('/profiles/:_id', {
  controller: 'ProfileController',
  name: 'profile.details'
});