'use strict'

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/
///////////////////////////////////////////////

sendValues.onclick = function() {
	var input1 = document.getElementById('input1').value;
	var input2 = document.getElementById('input2').value;
	var input3 = document.getElementById('input3').value;

	if (isNaN(input1) == true &&
			isNaN(input2) == true &&
			isNaN(input3) == true) {
		document.getElementById('result').innerHTML="";
		alert('Невірно вказані сторони трикутника');
	}
	else if (isNaN(input1) == true) {
		document.getElementById('result').innerHTML="";
		alert('Помилка у текстовому полі №1. Повинне бути записане число');
	}
	else if (isNaN(input2) == true) {
		document.getElementById('result').innerHTML="";
		alert('Помилка у текстовому полі №2. Повинне бути записане число');
	}
	else if (isNaN(input3) == true) {
		document.getElementById('result').innerHTML="";		
		alert('Помилка у текстовому полі №3. Повинне бути записане число');
	}
	else {
		if (Math.sign(input1) == -1) {
			document.getElementById('result').innerHTML="";			
			alert('Error');
		}
		else if (Math.sign(input2) == -1) {
			document.getElementById('result').innerHTML="";
			alert('Error');
		}
/*		else if (Math.sign(input3) === -1){
			alert('Error');
		} */
		else {

			input1 = parseInt(input1);
			input2 = parseInt(input2);
			input3 = parseInt(input3);

			if ((input1 + input2) < input3 ||
					(input2 + input3) < input1 || 
					(input3 + input1) < input2 ) {
				document.getElementById('result').innerHTML="";
				alert('Правило існування трикутника не виконується');
			}
			else {
				if (input1 != input2 &&
						input2 != input3 &&
						input3 != input1 ) {
					document.getElementById('result').innerHTML="<p> Даний трикутник є різностороннім! </p>";
			}
			else if ( input1 == input2 &&
								input2 == input3 &&
							 	input3 == input1 ) {
				document.getElementById('result').innerHTML="<p> Даний трикутник є рівностороннім! </p>";
		}
		else {
			document.getElementById('result').innerHTML="<p> Даний трикутник є рівнобедреним! </p>";
		}
	}
}
}
};