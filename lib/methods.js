Meteor.methods({
  addOffer: function(owner, username, offer,
    exchange, details) {
    // only registered users can create offers
    if (Meteor.userId()) {
      Offers.insert({
        owner: owner,
        username: username,
        offer: offer,
        exchange: exchange,
        details: details
      });
    }
  }
});
