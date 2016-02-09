Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.home.helpers({
  offers: function() {
    return Offers.find({}, {
      sort: {
        createdAt: -1
      }
    });
  }

});
