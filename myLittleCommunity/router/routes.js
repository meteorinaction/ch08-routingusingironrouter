Router.route('/', {
  name: 'home'
});

Router.route('/about', 'about', {
  name: 'about'
});

Router.route('/profiles/:_id', {
  controller: 'ProfileController',
  name: 'profile.details'
});

Router.route('/api/profiles/name/:_id', function () {
  var request = this.request;
  var response = this.response;

  response.end(ProfilesCollection.findOne({
    _id: this.params._id
  }).name);
}, {
  where: 'server'
})