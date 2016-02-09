Template.offer.rendered = function() {
  $(".details-icon").popup({
    position: 'right center'
  });
};

Template.offer.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  }
});


Template.offer.events({
  "click .ui.remove.icon": function(event) {
    event.preventDefault();

    Meteor.call("deleteOffer", this._id);

  },

  "click .ui.small.animated.fade.button": function(event) {
    Meteor.call("acceptOffer", this._id); // FIXME :That's fast, have a confirmation or something :D
  }
});
