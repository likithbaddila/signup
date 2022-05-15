function invalid()
{
  var usname = document.getElementById("floatingPassword");
  var pass = document.getElementById("floatingInput");
  if(usname.value.length==0)
  {
    alert("username is mandatory");
  }
  else if(pass.value.length < 8)
  {
    alert("enter correct format of password");
  }
  else if(pass.value.length > 12)
  {
    alert("enter correct format of password");
  }
  else
  {
    alert("signup successful");
    window.location.href = "signin.html";
  }

}
