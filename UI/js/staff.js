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

/***Transaction *********/
//Function To Display User acct details
function div_showtransact() {
  document.getElementById("transactdiv").style.display = "block";
}
//Function to Hide user acct details
function div_hidetransact() {
  document.getElementById("transactdiv").style.display = "none";
}

/***Staff Account *********/
//Function To Display/Edit Staff acct
function div_showstaff() {
  document.getElementById("staffdiv").style.display = "block";
}
//Function to Hide staff acct
function div_hidestaff() {
  document.getElementById("staffdiv").style.display = "none";
}

/***EditStaff *********/
//Function To Display User acct details
function show_EditStaff() {
  document.getElementById("editdiv").style.display = "block";
}
//Function to Hide user acct details
function hide_EditStaff() {
  document.getElementById("editdiv").style.display = "none";
}
