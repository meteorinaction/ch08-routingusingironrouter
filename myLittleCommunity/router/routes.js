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

Router.route('/profiles/:_id', {
  layoutTemplate: 'profileLayout',
  waitOn: function () {
    return Meteor.subscribe('profile', this.params._id);
  },
  template: 'profileDetail',
  yieldTemplates: {
    'profileDetailLeft': {
      to: 'left'
    }
  },
  data: function () {
    return ProfilesCollection.findOne({
      _id: this.params._id
    });
  }
});