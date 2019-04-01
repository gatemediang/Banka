// Validating Empty Field
function check_empty() {
  if (
    document.getElementById("name").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("msg").value == ""
  ) {
    alert("Fill All Fields !");
  } else {
    document.getElementById("form").submit();
    alert("Form Submitted Successfully...");
  }
}

/***Signup Form *********/
//Function To Display Signup Popup
function div_showsignup() {
  document.getElementById("signupdiv").style.display = "block";
}
//Function to Hide signup Popup
function div_hidesignup() {
  document.getElementById("signupdiv").style.display = "none";
}

/***Login Form******* */
//Function To Display Login Popup
function div_showlogin() {
  document.getElementById("logindiv").style.display = "block";
}
//Function to Hide Login Popup
function div_hidelogin() {
  document.getElementById("logindiv").style.display = "none";
}

/***Admin Form *****/
//Function To Display Admin Login Popup
function div_showadmin() {
  document.getElementById("admindiv").style.display = "block";
}
//Function to Hide Admin Login Popup
function div_hideadmin() {
  document.getElementById("admindiv").style.display = "none";
}

/***Account Form *****/
//Function To Display Admin Login Popup
function div_showaccount() {
  document.getElementById("accountdiv").style.display = "block";
}
//Function to Hide Admin Login Popup
function div_hideaccount() {
  document.getElementById("accountdiv").style.display = "none";
}
