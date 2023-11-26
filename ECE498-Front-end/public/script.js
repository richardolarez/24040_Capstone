function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // If login is successful, redirect to menu.html
    if (username === "example" && password === "password") {
      console.log("Login Good");
      window.location.href = 'menu.html';
    }
  else {
    window.alert("Login bad");
  }
}