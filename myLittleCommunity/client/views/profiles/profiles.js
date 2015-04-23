Template.profileDetail.rendered = function () {
  console.log("right side rendered");
  var template = Template.instance();
  template.$('h1').fitText();
}