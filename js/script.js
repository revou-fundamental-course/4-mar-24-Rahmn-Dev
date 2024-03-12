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
$("#next-3").click(function(event) {
    a = $("#weightinput").val();
    if (a === "") {
		event.preventDefault();
        $("#weightError").text("* Weight Required");
	}  else if(a <= 0){
        event.preventDefault()
        $("#weightError").text("* Weight cannot be under than 0 Kg");
    } else if(a > 500){
        event.preventDefault()
        $("#weightError").text("* Weight cannot be more than 500 Kg");
    } else{
        event.preventDefault();
        $("#weightError").text("");
		document.getElementById("first").style.display = "none";
		document.getElementById("second").style.display = "none";
		document.getElementById("third").style.display = "none";
		document.getElementById("final").style.display = "block";
    }

})
$("#prev-3").click(function(event) {
    event.preventDefault()
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "block";
	document.getElementById("final").style.display = "none";
	// document.getElementById("progressBar").style.width = "70%";
	// $("#progressText").text("Langkah-2");
})

function calculateBMI(height, weight, age, gender) {
    var bmi;
    if (gender === "male") {
        bmi = (weight) / Math.pow(height / 100, 2); // Rumus BMI untuk laki-laki
    } else if (gender === "female") {
        bmi = (weight) / Math.pow(height / 100, 2); // Rumus BMI untuk perempuan
    } else {
        return null; // Jika gender tidak valid
    }
    return bmi;
}
function weightIdeal(weight, height, age, bmi){
    var idealWeight;

    if (age < 18) {
        idealWeight = 18.5 * Math.pow((height / 100), 2); // Berat ideal untuk anak-anak
    } else {
        idealWeight = 22 * Math.pow((height / 100), 2); // Berat ideal untuk orang dewasa
    }

    var weightStatus;
    if (bmi < 18.5) {
        weightStatus = 'You are under your ideal weight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightStatus = 'You are within your ideal weight range.';
    } else {
        weightStatus = 'You are over your ideal weight.';
    }

    var weightStatusContainer = document.getElementById('weightStatus');
    weightStatusContainer.textContent = weightStatus;
}

function displayResult(bmi, age , gender) {
    var resultContainer = document.getElementById('resultContainer');
    var bmiResult = document.getElementById('bmiResult');
    var bmiCategory = document.getElementById('bmiCategory');
    var bmiExplanation = document.getElementById('bmiExplanation');
    var ageis = document.getElementById('age');
    ageis.textContent = age + ' Years Old';
    var genderis = document.getElementById('gender');
    genderis.textContent = gender;
    resultContainer.style.display = 'block';


    bmiResult.textContent = bmi.toFixed(2);

    if (age < 18) {
        if (bmi < 15) {
            bmiCategory.textContent = 'Very severely underweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are very severely underweight for your age. This level of underweight can lead to serious health issues, including malnutrition and developmental delays. It is crucial to consult a healthcare professional immediately for proper assessment and treatment.';
        } else if (bmi >= 15 && bmi < 16) {
            bmiCategory.textContent = 'Severely underweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are severely underweight for your age. Severe underweight can impair growth, weaken immune function, and lead to nutritional deficiencies. It is important to seek medical advice to address underlying causes and improve nutritional status.';
        } else if (bmi >= 16 && bmi < 18.5) {
            bmiCategory.textContent = 'Underweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are underweight for your age. While mild underweight may not always pose immediate health risks, it can still affect overall health and development. Consider consulting a healthcare professional for guidance on improving nutrition and overall health.';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategory.textContent = 'Normal weight (Child)';
            bmiExplanation.textContent = 'Congratulations! Your BMI is within the normal range for your age. Maintaining a healthy weight is essential for overall health and well-being. Keep up the good work by adopting a balanced diet and staying physically active.';
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategory.textContent = 'Overweight (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are overweight for your age. Excess weight during childhood can increase the risk of various health problems, such as type 2 diabetes, high blood pressure, and cardiovascular disease. Consider seeking guidance from a healthcare professional to develop healthy habits and achieve a healthier weight.';
        } else if (bmi >= 30 && bmi < 35) {
            bmiCategory.textContent = 'Obese Class I (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class I for your age. Obesity during childhood significantly increases the risk of developing serious health conditions, including diabetes, heart disease, and joint problems. It is crucial to seek medical advice and implement lifestyle changes to manage weight and improve health.';
        } else if (bmi >= 35 && bmi < 40) {
            bmiCategory.textContent = 'Obese Class II (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class II for your age. Obesity at this level poses severe health risks and requires immediate attention. It is essential to work with healthcare professionals to develop a comprehensive plan for weight management and overall health improvement.';
        } else {
            bmiCategory.textContent = 'Obese Class III (Child)';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class III for your age. This level of obesity is associated with serious health complications and requires urgent medical intervention. It is critical to seek professional help to address weight-related health issues and adopt healthier lifestyle choices.';
        }
    } else {
        if (bmi < 16) {
            bmiCategory.textContent = 'Severely underweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are severely underweight. Severely low body weight in adults can lead to various health complications, including weakened immune system, nutrient deficiencies, and organ damage. It is important to consult a healthcare professional to address underlying causes and develop a treatment plan.';
        } else if (bmi >= 16 && bmi < 17) {
            bmiCategory.textContent = 'Moderately underweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are moderately underweight. While moderate underweight may not always present immediate health risks, it can still impact overall health and well-being. Consider seeking medical advice to identify underlying causes and develop strategies for healthy weight gain.';
        } else if (bmi >= 17 && bmi < 18.5) {
            bmiCategory.textContent = 'Mildly underweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are mildly underweight. While mild underweight may not always be cause for concern, it is important to monitor your health and address any potential underlying issues. Consider consulting a healthcare professional for guidance on achieving a healthy weight.';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategory.textContent = 'Normal weight';
            bmiExplanation.textContent = 'Congratulations! Your BMI is within the normal range. Maintaining a healthy weight is important for overall health and well-being. Continue to prioritize healthy eating habits, regular physical activity, and proper self-care.';
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategory.textContent = 'Overweight';
            bmiExplanation.textContent = 'Your BMI indicates that you are overweight. Excess weight can increase the risk of various health conditions, such as heart disease, diabetes, and certain cancers. Consider making lifestyle changes, such as adopting a balanced diet and increasing physical activity, to achieve a healthier weight.';
        } else if (bmi >= 30 && bmi < 35) {
            bmiCategory.textContent = 'Obese Class I';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class I. Obesity increases the risk of developing serious health conditions, including heart disease, stroke, and type 2 diabetes. It is important to prioritize weight management through healthy eating habits, regular exercise, and professional guidance.';
        } else if (bmi >= 35 && bmi < 40) {
            bmiCategory.textContent = 'Obese Class II';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class II. Obesity at this level significantly impacts health and quality of life. It is crucial to seek medical advice and implement comprehensive lifestyle changes to address weight-related health risks.';
        } else {
            bmiCategory.textContent = 'Obese Class III';
            bmiExplanation.textContent = 'Your BMI indicates that you are obese Class III. This level of obesity poses severe health risks and requires urgent medical attention. It is essential to work closely with healthcare professionals to develop a personalized plan for weight management and overall health improvement.';
        }
    }
}
function recommendation(bmi, age){
    var jagakesehatan = document.getElementById('jagakesehatan');
    var banyakvitamin = document.getElementById('bnykvitamin');
    var banyakbuah = document.getElementById('bnykbuah');
    var banyaksayur = document.getElementById('bnyksyur');
    var tidur = document.getElementById('tidur');
    var olahraga = document.getElementById('olahraga');
    var pushup = document.getElementById('pushup');
    var bersepeda = document.getElementById('bersepeda');
    var banyakminum = document.getElementById('bnykmnm');
    var banyakmakan = document.getElementById('bnykmkn');
    var checkdoctor = document.getElementById('ambulance');
    var consultation = document.getElementById('consultation');
    console.log("fungsi recomendation",age)
       // Semua elemen diatur ke tampilan default terlebih dahulu
       jagakesehatan.style.display = "none";
       banyakvitamin.style.display = "none";
       banyakbuah.style.display = "none";
       banyaksayur.style.display = "none";
       tidur.style.display = "none";
       olahraga.style.display = "none";
       pushup.style.display = "none";
       bersepeda.style.display = "none";
       banyakminum.style.display = "none";
       banyakmakan.style.display = "none";
       checkdoctor.style.display = "none";
       consultation.style.display = "none";

    // Menentukan rekomendasi berdasarkan kategori BMI dan usia
    if (age < 18) {
        if (bmi < 15) {
            banyakvitamin.style.display = "flex";
            banyakbuah.style.display = "flex";
            banyaksayur.style.display = "flex";
            tidur.style.display = "flex";
            olahraga.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            banyakminum.style.display = "flex";
            banyakmakan.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        } else if (bmi >= 15 && bmi < 16) {
            banyakvitamin.style.display = "flex";
            banyakbuah.style.display = "flex";
            banyaksayur.style.display = "flex";
            tidur.style.display = "flex";
            olahraga.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            banyakminum.style.display = "flex";
            banyakmakan.style.display = "flex";
            consultation.style.display = "flex";
        } else if (bmi >= 16 && bmi < 18.5) {
            banyakvitamin.style.display = "flex";
            banyakbuah.style.display = "flex";
            banyaksayur.style.display = "flex";
            tidur.style.display = "flex";
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            banyakmakan.style.display = "flex";
        } else if (bmi >= 18.5 && bmi < 25) {
            jagakesehatan.style.display = "flex";
        } else if (bmi >= 25 && bmi < 30) {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
        } else if (bmi >= 30 && bmi < 35) {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        } else if (bmi >= 35 && bmi < 40) {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        } else {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        }
    } else {
        if (bmi < 16) {
            banyakvitamin.style.display = "flex";
            banyakbuah.style.display = "flex";
            banyaksayur.style.display = "flex";
            tidur.style.display = "flex";
            olahraga.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            banyakminum.style.display = "flex";
            banyakmakan.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        } else if (bmi >= 16 && bmi < 17) {
            banyakvitamin.style.display = "flex";
            banyakbuah.style.display = "flex";
            banyaksayur.style.display = "flex";
            tidur.style.display = "flex";
            olahraga.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            banyakminum.style.display = "flex";
            banyakmakan.style.display = "flex";
            consultation.style.display = "flex";
        } else if (bmi >= 17 && bmi < 18.5) {
            banyakvitamin.style.display = "flex";
            banyakbuah.style.display = "flex";
            banyaksayur.style.display = "flex";
            tidur.style.display = "flex";
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            banyakmakan.style.display = "flex";
        } else if (bmi >= 18.5 && bmi < 25) {
            jagakesehatan.style.display = "flex";
        } else if (bmi >= 25 && bmi < 30) {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            consultation.style.display = "flex";
        } else if (bmi >= 30 && bmi < 35) {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        } else if (bmi >= 35 && bmi < 40) {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        } else {
            olahraga.style.display = "flex";
            banyakminum.style.display = "flex";
            pushup.style.display = "flex";
            bersepeda.style.display = "flex";
            checkdoctor.style.display = "flex";
            consultation.style.display = "flex";
        }
    }
}

$("#Sending").click(function(event) {
    event.preventDefault()
	// a = $("#weightinput").val();
	b = $("#heightinput").val();
	if (b === "") {
		event.preventDefault();
        $("#heightError").text("* Height Required");
	}
    else if( b == 0 ){
        event.preventDefault()
        $("#heightError").text("* Height cannot be 0");
    } 
    else if(b > 250){
        event.preventDefault()
        $("#heightError").text("* Height cannot be more than 250 cm");
    }
    else if(b <= 0){
        event.preventDefault()
        $("#heightError").text("* Height cannot be under than 0 cm");
    }
    else{
        event.preventDefault();
        $("#heightError").text("");
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
            weightIdeal(height, weight, age, bmi);
            recommendation(bmi, age);
            displayResult(bmi, age, gender);
            document.getElementById("total-results").style.display = "block";
        } catch (error) {
           console.log(error) 
        }
    }
    })
    
});