function validate(){
	var f = document.signupform.fname.value;
	var l = document.signupform.lname.value;
	var alphabets =/^[a-zA-Z]+$/;
	//alert("me");
	if(f.match(alphabets) &&  l.match(alphabets)) {}
	else{
		alert("Enter proper name");
		document.signupform.fname.focus();
		document.signupform.fname.style.border = '1px solid #ff0000';
		return false
	}

	var userNameField = document.signupform.uname;
	if(uname.value.length<8){
		alert("username should be greater than 8 characters!");
		userNameField.focus();
		userNameField.style.border = '1px solid #ff0000';

		//also check whether the username is available i.e unique among all users
	}

	return validatePhone(document.signupform.phno);
	
	
}
function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');
 
   if (fld.value == "") {
        error = "You didn't enter a phone number.\n";
        fld.focus();
        fld.style.border = "1px solid #ff0000";
        alert(error);
		return false;
 
    } else if (isNaN(parseInt(stripped))) {
        error = "The phone number contains illegal characters. Don't include dash (-)\n";
        fld.focus();
        fld.style.border = "1px solid #ff0000";
        alert(error);
        return false;
		
    } else if (!(stripped.length == 10)) {
        error = "The phone number is the wrong length. Make sure you included an area code. Don't include dash (-)\n";
        fld.focus();
        fld.style.border = "1px solid #ff0000";
        alert(error);
        return false;
		
    }
    return validatePassword(document.signupform.pass1, document.signupform.pass2);
}

function validatePassword(pass1,pass2){
	if(pass1.value.length <8 ){
		pass1.focus();
		pass1.style.border = "1px solid #ff0000";
		alert("The password must contain atleast 8 characters");
		return false;
	}
	if(pass1.value != pass2.value){
		pass1.focus();
		pass1.style.border = "1px solid #ff0000";
		alert('The passswords must match');
		return false;
	}
	return true;
}













