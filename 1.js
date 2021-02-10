function validateFirstName()
{ // test input for 2 to 20 allowed characters 
 var fName = document.getElementById("firstName").value;
 var re1 = /^[a-zA-Z\s]{2,20}$/;
 
 if (re1.test(fName))
 {
   document.getElementById("firstNamePrompt").style.color = "green";
   document.getElementById("firstNamePrompt").innerHTML="valid";
   return true;
 }
 else 
 {
   document.getElementById("firstNamePrompt").style.color="red";
   document.getElementById("firstNamePrompt").innerHTML="entr 2-20 characters";
   return false;
 }
}

function validateLastName()
{ // test input for 2 to 25 allowed characters 
 var lName=document.getElementById("lastName").value;
 var re2 = /^[a-zA-Z\s] {2,25}$/;
 
 if(re2.test(lName))
 {
   document.getElementById("lastNamePrompt").style.color="green";
   document.getElementById("lastNamePrompt").innerHTML="valid";
   return true;
 }
 else
 {
   document.getElementById("lastNamePrompt").style.color="red";
   document.getElementById("kastNamePrompt").innerHTML="Enter 2-25 characters";
   return false;
 }
}

function validatePhone()
{ // test xxx-xxx-xxxx
 var  phoneNumber=document.getElementById("phone").value;
 var re3= /^ \d{3}-\d{3}-\d{4} $/;
 
 if(re3.test(phoneNumber))
 {
   document.getElementById("phonePrompt").style.color="green";
   document.getElementById("phonePrompt").innerHTML="valid";
   return true;
 }
 else
 {
   document.getElementById("phonePrompt").style .color="Red";
   document.getElementById("phonePrompt").innerHTML="use format xxx-xxx-xxxx";
   document.getElementById("phonePrompt").innerHTML="use format xxx-xxx-xxxx";
   return false;
 }
}