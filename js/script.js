$( document ).ready(function() {
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

function calculateBMI(height, weight, age, gender) {
    var bmi;
    if (gender === "male") {
        bmi = (0.5 * weight) / Math.pow(height / 100, 2);
    } else if (gender === "female") {
        bmi = (0.4 * weight) / Math.pow(height / 100, 2);
    } else {
        return null; // Jika gender tidak valid
    }
    return bmi;
}
function weightIdeal(weight, height, age){
    var idealWeight;
    if (age < 18) {
        idealWeight = 18.5 * Math.pow((height / 100), 2); // Berat ideal untuk anak-anak
    } else {
        idealWeight = 22 * Math.pow((height / 100), 2); // Berat ideal untuk orang dewasa
    }

    if (weight < idealWeight - 2) {
        weightStatus = 'You are under your ideal weight.';
    } else if (weight >= idealWeight - 2 && weight <= idealWeight + 2) {
        weightStatus = 'You are within your ideal weight range.';
    } else {
        weightStatus = 'You are over your ideal weight.';
    }

    var weightStatusContainer = document.getElementById('weightStatus');
    weightStatusContainer.textContent = weightStatus;
}

function displayResult(bmi, age) {
    var resultContainer = document.getElementById('resultContainer');
    var bmiResult = document.getElementById('bmiResult');
    var bmiCategory = document.getElementById('bmiCategory');
    var bmiExplanation = document.getElementById('bmiExplanation');

    resultContainer.style.display = 'block';

    bmiResult.textContent = bmi.toFixed(2);

    if (age < 18) {
        if (bmi < 15) {
            bmiCategory.textContent = 'Very severely underweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are very severely underweight for your age. Please consult a healthcare professional for advice.';
        } else if (bmi >= 15 && bmi < 16) {
            bmiCategory.textContent = 'Severely underweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are severely underweight for your age. Please consult a healthcare professional for advice.';
        } else if (bmi >= 16 && bmi < 18.5) {
            bmiCategory.textContent = 'Underweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are underweight for your age. Please consult a healthcare professional for advice.';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategory.textContent = 'Normal weight (Child)';
            bmiExplanation.textContent = 'Your BMI is within the normal range for your age. Keep up the good work!';
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategory.textContent = 'Overweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are overweight for your age. Please consult a healthcare professional for advice.';
        } else if (bmi >= 30 && bmi < 35) {
            bmiCategory.textContent = 'Obese Class I (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class I for your age. Please consult a healthcare professional for advice.';
        } else if (bmi >= 35 && bmi < 40) {
            bmiCategory.textContent = 'Obese Class II (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class II for your age. Please consult a healthcare professional for advice.';
        } else {
            bmiCategory.textContent = 'Obese Class III (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class III for your age. Please consult a healthcare professional for advice.';
        }
    } else {
        if (bmi < 16) {
            bmiCategory.textContent = 'Severely underweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are severely underweight. Please consult a healthcare professional for advice.';
        } else if (bmi >= 16 && bmi < 17) {
            bmiCategory.textContent = 'Moderately underweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are moderately underweight. Please consult a healthcare professional for advice.';
        } else if (bmi >= 17 && bmi < 18.5) {
            bmiCategory.textContent = 'Mildly underweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are mildly underweight. Please consult a healthcare professional for advice.';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategory.textContent = 'Normal weight';
            bmiExplanation.textContent = 'Your BMI is within the normal range. Keep up the good work!';
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategory.textContent = 'Overweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are overweight. Please consider a healthier lifestyle.';
        } else if (bmi >= 30 && bmi < 35) {
            bmiCategory.textContent = 'Obese Class I';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class I. Please consult a healthcare professional for advice.';
        } else if (bmi >= 35 && bmi < 40) {
            bmiCategory.textContent = 'Obese Class II';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class II. Please consult a healthcare professional for advice.';
        } else {
            bmiCategory.textContent = 'Obese Class III';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class III. Please consult a healthcare professional for advice.';
        }
    }
}

$("#Sending").click(function(event) {
    event.preventDefault()
	a = $("#weightinput").val();
	b = $("#heightinput").val();
    heightweightError
	if (a === "" && b === "") {
		event.preventDefault();
        $("#heightweightError").text("* Weight and Height Required");
	}
	else if (a === "") {
		event.preventDefault();
        $("#heightweightError").text("* Weight Required");
	}
	else if (b === "") {
		event.preventDefault();
        $("#heightweightError").text("* Height Required");
	}
    else if( a == 0 && b == 0 ){
        event.preventDefault()
        $("#heightweightError").text("* Weight and Height cannot be 0");
    } 
    else if( a == 0 ){
        event.preventDefault()
        $("#heightweightError").text("* Weight cannot be 0");
    } 
    else if( b == 0 ){
        event.preventDefault()
        $("#heightweightError").text("* Height cannot be 0");
    } 
    else if(a > 500 && b > 500){
        event.preventDefault()
        $("#heightweightError").text("* Weight cannot be more than 500 Kg & Height cannot be more than 250 cm");
    }
    else if(a > 500){
        event.preventDefault()
        $("#heightweightError").text("* Weight cannot be more than 500 Kg");
    } 
    else if(b > 250){
        event.preventDefault()
        $("#heightweightError").text("* Height cannot be more than 250 cm");
    }
    else if(a <= 0 && b <= 0){
        event.preventDefault()
        $("#heightweightError").text("* Weight cannot be under than 0 Kg & Height cannot be under than 0 cm");
    }
    else if(a <= 0){
        event.preventDefault()
        $("#heightweightError").text("* Weight cannot be under than 0 Kg");
    } 
    else if(b <= 0){
        event.preventDefault()
        $("#heightweightError").text("* Height cannot be under than 0 cm");
    }
    else{
        event.preventDefault();
        $("#heightweightError").text("");
        weight = $("#weightinput").val();
	    height = $("#heightinput").val();
        console.log("height", height)
        console.log("weight", weight)
        var age = $("#ageinput").val();
        console.log("age", age)
        var gender = document.querySelector('input[name="gender"]:checked').value;
        console.log("gender", gender)
        try {
            var bmi = calculateBMI(height, weight, age, gender);
            weightIdeal(height, weight, age);
            displayResult(bmi, age, gender);
            document.getElementById("total-results").style.display = "block";
        } catch (error) {
            
        }
    }
    console.log("running")
    })
    
});