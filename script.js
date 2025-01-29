let username;
document.getElementById("mySubmit").onclick = function() {
  
  username = document.getElementById("myText").value;
  username = username.toLowerCase();
  
  if (username == "glitchmeister b-45"){
    document.getElementById("myh1").style.color = "red";
    document.getElementById("myh1").textContent = "Y29tbWFuZC5wcm9tdC9yZXNldA==";
  } else if (username == ""){
    document.getElementById("myh1").textContent = `Please enter a password.`;
  }
  else {
    document.getElementById("myh1").textContent = `Invalid password.`;
  }
}