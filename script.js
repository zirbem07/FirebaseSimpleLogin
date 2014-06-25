$(document).ready(function(){

	var chatRef = new Firebase('https://codehscore.firebaseio.com');
	var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
	  if (error) {
	    // an error occurred while attempting login
	     alert("erereor");
		 alert(error);
	  } else if (user) {
	    // user authenticated with Firebase
	    alert("SUCCESS");
	    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
	  } else {
	  	alert("here");
	    // user is logged out
	  }
	});


	$('.login').on('click', function(){
		var userEmail = $('.userEmail').val();
		var userPassword = $('.userPassword').val();
		console.log(userEmail);
		console.log(userPassword);
		
		auth.login('password', {
		email: userEmail,
		password: userPassword
		// rememberMe: true
		});
		
	});
});