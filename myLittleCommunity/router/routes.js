Router.route('/', {
  waitOn: function () {
    return Meteor.subscribe('profiles');
  },
  template: 'home',
  data: function () {
    return {
      profiles: ProfilesCollection.find({}, {
        limit: 10
      })
    };
  }
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