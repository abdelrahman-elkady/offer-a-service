Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.home.helpers({
  offers: [{
      owner: "kady",
      offer: "Programming",
      for: "Cooking",
      details: "Wanna cook a cake for a Java program",
    }, {
      owner: "crazy Ivan",
      offer: "Killing",
      for: "Killing",
      details: "I have no idea what am doing here",
    }
  ],


});
