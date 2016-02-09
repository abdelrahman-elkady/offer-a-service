Template.navbar.helpers({
  acceptedCount: function() {
    return Offers.find({
      owner: Meteor.userId(),
      accepted: true
    }).count();
  },

  acceptedAny: function() {
    return Offers.find({
      owner: Meteor.userId(),
      accepted: true
    }).count() > 0;
  }

});
