Router.route('/', {
  controller: 'HomeController',
  name: 'home'
});

Router.route('/about', 'about', {
  name: 'about'
});

Router.route('/profiles/:_id', {
  name: 'profile.details',
  layoutTemplate: 'profileLayout',
  waitOn: function () {
    return [
      Meteor.subscribe('profile', this.params._id),
      IRLibLoader.load("/jquery.fittext.js")
    ];
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