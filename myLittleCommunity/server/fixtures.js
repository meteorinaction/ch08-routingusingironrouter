Meteor.startup(function () {
  if (ProfilesCollection.find().count() === 0) {
    profiles = [{
      name: 'Stephan',
      profileText: 'Into Yoga, health food, long walks on the beach, and being in the dunes on the cape at midnight.',
      profileImg: '/stephan.jpg'
    }, {
      name: 'Manuel',
      profileText: 'I like to eat good food and also cooking it myself!',
      profileImg: '/manuel.jpg'
    }]

    _.forEach(profiles, function (profile) {
      // Updates the profile and inserts it if it does not exist
      ProfilesCollection.upsert({
        name: profile.name
      }, profile);
    });
  }
});