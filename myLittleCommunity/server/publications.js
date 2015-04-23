Meteor.publish('profiles', function () {
  profiles = Meteor.wrapAsync(function (cb) {
    Meteor.setTimeout(function () {
      cb(null, ProfilesCollection.find({}, {
        limit: 10
      }));
    }, 1000);
  })();

  return profiles;
});