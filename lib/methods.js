Meteor.methods({
  addOffer: function(owner, username, offer,
    exchange, details) {
    // only registered users can create offers
    if (Meteor.userId() && offer && exchange && details) {
      Offers.insert({
        owner: owner,
        username: username,
        offer: offer,
        exchange: exchange,
        details: details,
        createdAt: new Date(),
        accepted: false,
      });
    }
  },

  deleteOffer: function(offerId) {
    var offer = Offers.findOne({
      _id: offerId
    });

    // Only owner can delete his offer
    if (offer.owner === Meteor.userId()) {
      Offers.remove({
        _id: offerId
      });
    }

  },

  acceptOffer: function(offerId) {
    Offers.update(offerId, {
      $set: {
        accepted: true,
        acceptingUser: Meteor.userId()
      }
    });
  }

});
