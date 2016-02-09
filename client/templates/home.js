Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.home.helpers({
  offers: function() {
    return Offers.find({
      accepted: {
        $ne: true
      }
    }, {
      sort: {
        createdAt: -1
      }
    });
  }

});
