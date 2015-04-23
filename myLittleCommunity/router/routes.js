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
});
Router.route('/api/find/profiles', {
    where: 'server'
  })
  .get(function () {
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
    this.response.end(JSON.stringify(
      ProfilesCollection.find().fetch()));
  })

Router.route('/api/insert/profile', {
    where: 'server'
  })
  .post(function () {
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
    // returns ID for new profile
    this.response.end(JSON.stringify(
      ProfilesCollection.insert(this.request.body)
    ));
  })