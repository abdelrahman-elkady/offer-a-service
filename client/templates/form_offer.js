Template.form_offer.events({
  "submit form": function(event) {
    event.preventDefault();
    // FIXME: that's dumb save in a session
    var username = Meteor.user().username;

    var target = event.target;

    Meteor.call("addOffer", Meteor.userId(), username, target.offer.value,
      target.exchange.value, target.details.value);
  }
});
