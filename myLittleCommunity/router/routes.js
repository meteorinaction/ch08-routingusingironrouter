Router.route('/', function () {
  this.render('home', {
    data: function () {
      return {
        profiles: ProfilesCollection.find()
      };
    }
  });
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/profiles/:_id', function () {
  profile = ProfilesCollection.findOne({
    _id: this.params._id
  });
  this.layout('profileLayout');
  this.render('profileDetailLeft', {
    to: 'left',
    data: function () {
      return profile;
    }
  });
  this.render('profileDetail', {
    data: function () {
      return profile;
    }
  });
});