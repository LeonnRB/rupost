function checkForm(el) {
  
  var name = el.nick.value;
  var pass = el.pass.value;
  
  if(name == "" || pass == "") 
     document.getElementById('error').innerHTML = "Заполните все поля";
  else if(name != "" || pass != "")
     window.location.href = "main.html";
     
  return false;
}