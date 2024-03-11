// Mendapatkan elemen card
var card = document.getElementById("card-1");
var card2 = document.getElementById("card-2");

// Menambahkan event listener untuk 'click'
card.addEventListener("click", function() {
  // Mendapatkan input radio di dalam card
  var radio = document.getElementById("male");
  
  // Memeriksa jika radio tidak null
  if (radio) {
    // Men-trigger klik pada input radio
    radio.click();
  }
});
card2.addEventListener("click", function() {
    // Mendapatkan input radio di dalam card
    var radio2 = document.getElementById("female");
    
    // Memeriksa jika radio tidak null
    if (radio2) {
      // Men-trigger klik pada input radio
      radio2.click();
    }
  });


  $("#next-1").click(function(event) {
    if (!$('#male').is(':checked') && !$('#female').is(':checked')) {
        // Prevent the default action of the click event
        event.preventDefault();
        $("#genderError").text("* Gender is required");
	} else {
        event.preventDefault();
		// $("#nama_lengkapError").text("");
        $("#genderError").text("");
		document.getElementById("first").style.display = "none";
		document.getElementById("second").style.display = "block";
		// document.getElementById("progressBar").style.width = "70%";
		// $("#progressText").text("Langkah-2");

	}
})
$("#prev-1").click(function(event) {
    event.preventDefault();
    $("#ageError").text("");
	document.getElementById("first").style.display = "block";
	document.getElementById("second").style.display = "none";
	// document.getElementById("progressBar").style.width = "40%";
	// $("#progressText").text("Langkah-1");
})
$("#next-2").click(function(event) {
    var inputAge = $("#ageinput").val().trim();
    if (inputAge === "" ){
        event.preventDefault()
        $("#ageError").text("* Age is required");
    } else if( inputAge == 0 ){
        event.preventDefault()
        $("#ageError").text("* Age cannot be 0");
    } else if(inputAge > 120){
        event.preventDefault()
        $("#ageError").text("* Age cannot be more than 120");
    } else{
        event.preventDefault();
        $("#ageError").text("");
		document.getElementById("first").style.display = "none";
		document.getElementById("second").style.display = "none";
		document.getElementById("third").style.display = "block";
    }

})
$("#prev-2").click(function(event) {
    event.preventDefault()
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("third").style.display = "none";
	// document.getElementById("progressBar").style.width = "70%";
	// $("#progressText").text("Langkah-2");
})

$("submit").click(function(event) {
	a = $("#password").val();
	b = $("#confirmpassword").val();
	if (a == "" || b == "") {
		event.preventDefault();
	}
})