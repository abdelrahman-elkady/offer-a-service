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
    console.log("CLICKED" + this._id);
    event.preventDefault();

    Meteor.call("deleteOffer", this._id);

  }
});
