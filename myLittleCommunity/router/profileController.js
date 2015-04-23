ProfileController = RouteController.extend({
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
  },
  onRun: function () {
    ProfilesCollection.update({
      _id: this.params._id
    }, {
      $inc: {
        views: 1
      }
    });
    this.next();
  },
  onBeforeAction: function () {
    if (!Meteor.userId()) {
      this.render('membersonly');
    } else {
      this.next();
    }
  }
});