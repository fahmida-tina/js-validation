<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JS VALIDATION</title>
	<script>
function isvalid() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var Gender = document.getElementById("Gender").value;
  var Email = document.getElementById("Email").value;
  var Religion = document.getElementById("Religion").value;
  var Phone = document.getElementById("Phone").value;
  var PresentAddress = document.getElementById("PresentAddress").value;
  var ParmanentAddress = document.getElementById("ParmanentAddress").value;
  if (firstName == "" || lastName == "" || Gender =="" || Email =="" || Religion=="" || Phone=="" || PresentAddress=="" || ParmanentAddress== "") {
    alert("Must be filled out");
    return false;
  }
}

</script>
</head>
</html>


