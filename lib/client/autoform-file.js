// autoform-file.js

if (Meteor.isClient) {

	Template.afFileSelectFileBtnTemplate.helpers({



	});

	Template.afFileSelectFileBtnTemplate.events({

		"click input[type='file']" : function (event) {
			event.preventDefault();
			console.log("inside afFileSelectFileBtnTemplate helper in autoform-file.js");
			console.log(event.currentTarget);

		},

	});


};