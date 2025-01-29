let username;
let password;

document.getElementById("mySubmit").onclick = function() {
  username = document.getElementById("username_input").value;
  username = username.toLowerCase();

  password = document.getElementById("password_input").value;
  
  if (username == "glitchmeister b-45" && password == "YourMom69"){
    document.getElementById("myh1").style.color = "red";
    document.getElementById("myh1").textContent = "Y29tbWFuZC5wcm9tdC9yZXNldA==";
  } else if (username == "" && password == ""){
    document.getElementById("myh1").textContent = `Please enter a username and password.`;
  } else if (username == ""){
    document.getElementById("myh1").textContent = `Please enter a username.`;
  } else if (password == ""){
    document.getElementById("myh1").textContent = `Please enter a password.`;
  }
  else {
    document.getElementById("myh1").textContent = `Invalid username or password.`;
  }
}
