Template.registerHelper("isActiveRoute", function (routeName) {
  if (Router.current().route.getName() === routeName) {
    return 'active';
  }
});