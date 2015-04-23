Router.route('/', function () {
  this.render('home');
});
Router.route('/about', function () {
  this.render('about');
});
Router.route('/profiles/manuel', function () {
  this.layout('profileLayout');
  this.render('profileImage', {
    to: 'left'
  });
  this.render('profileDetail');
});