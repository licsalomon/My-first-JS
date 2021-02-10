function validFirstName(){
	var fname = document.getElementById("firstname").value;
	var reg1 = /^[a-zA-Z\s\'\-]{2,15}$/;  
	
	if (fname == ""){    //check if name field is empty
		document.getElementById("fnameprompt").style.color = "red";
		document.getElementById("fnameprompt").innerHTML = "<em><b>First name field should not be empty</b></em>";
	} 
	
	else if (reg1.test(fname)) {   //to test if value of first name is 2-15 characters long of letters A-Z
		document.getElementById("fnameprompt").style.color = "lime";
		document.getElementById("fnameprompt").innerHTML = "<em><b>Name is valid</b></em>";
		return true;
	}
	else {
		document.getElementById("fnameprompt").style.color = "red";
		document.getElementById("fnameprompt").innerHTML = "<em><b>Please name should be 2-15 letters long</b></em>";
		return false;
	}
}

function validLastName(){
	var lname = document.getElementById("lastname").value;
	var reg2 = /^[a-zA-Z\s\'\-]{3,20}$/;
	
	if (lname == ""){    //check if name field is empty
		document.getElementById("lnameprompt").style.color = "red";
		document.getElementById("lnameprompt").innerHTML = "<em><b>Last name field should not be empty</b></em>";
	}
	
	else if (reg2.test(lname)) {   //to test if value of last name is 3-20 characters long of letters A-Z
		document.getElementById("lnameprompt").style.color = "lime";
		document.getElementById("lnameprompt").innerHTML = "<em><b>Name is valid</b></em>";
		return true;
	}
	else {
		document.getElementById("lnameprompt").style.color = "red";
		document.getElementById("lnameprompt").innerHTML = "<em><b>Please name should be 2-15 letters long</b></em>";
		return false;
	}
}


function validPassword(){
	var passcode = document.getElementById("password").value;
	var rex = /^[a-zA-z0-9]{6,20}$/;
	
	if (passcode == ""){    //check if password field is empty
		alert("Password field must not be empty.");
	} 
	
	else if (rex.test(passcode)){   //to test if value of password is 6-20 characters long 
		document.getElementById("passwordprompt").style.color = "lime";
		document.getElementById("passwordprompt").innerHTML = "<b>Password is valid</b>";
		return true;		
	}
	else{
		document.getElementById("passwordprompt").style.color = "red";
		document.getElementById("passwordprompt").innerHTML = "<em><b>Password should be 6-20 characters long</b></em>";
		return false;		
	}
}

function confirmPassword(){
	var passcode = document.getElementById("password").value;
	var confirmpasscode = document.getElementById("confirmpassword").value;
	
	if (confirmpasscode == passcode){   //to check if passwords are the same
		document.getElementById("passwordconfirmprompt").style.color = "lime";
		document.getElementById("passwordconfirmprompt").innerHTML = "<b>Passwords are equal</b>";
	} 
	else{
			alert("Passwords are not the same. Please check if they are the same.");
	}
}