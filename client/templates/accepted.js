Template.accepted.helpers({
  offers: function() {
    return Offers.find({
      owner: Meteor.userId(),
      accepted: true
    });
  }
});
