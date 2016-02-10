Router.route('/',function(){
  this.render('home');
  this.layout('main-layout');
});

Router.route('/accepted',function(){
  this.render('accepted');
  this.layout('main-layout');
});
