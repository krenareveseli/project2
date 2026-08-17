// OPEN FORM
function openForm() {
  document.getElementById("formModal").style.display = "flex";
}

// CLOSE FORM
function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

// REGISTER USER
function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !age || !password) {
    alert("Please fill all fields!");
    return;
  }

  const user = {
    name,
    email,
    age,
    password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created 🚀");

  closeForm();
}