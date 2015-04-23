Iron.Router.plugins.membersOnly = function (router, options) {
  router.onBeforeAction(function () {
    if (!Meteor.userId()) {
      console.log("tpl option", this.lookupOption('membersOnlyTpl'));
      this.render(this.lookupOption('membersOnlyTpl'));
    } else {
      this.next();
    }
  }, options);
}