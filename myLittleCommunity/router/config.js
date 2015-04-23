Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.plugin('membersOnly', {
  membersOnlyTpl: 'membersonly',
  only: ['profile.details']
});