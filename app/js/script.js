console.log("HELLO");

const test = () => {
  console.log("this is a test");
};
const namealert = document.getElementById("namealert");
const parent = document.getElementsByClassName("name")[0];
const lastNamealert = document.getElementById("lastnamealert");
const emailalert = document.getElementById("emailalert");
const passwordalert = document.getElementById("passwordalert");
function checkForms() {
  const name = document.getElementById("name");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (name.value == "") {
    name.parentElement.classList.add("show");
  } else {
    name.parentElement.classList.remove("show");
  }
  if (lastName.value == "") {
    lastName.parentElement.classList.add("show");
  } else {
    lastName.parentElement.classList.remove("show");
  }
  if (email.value == "") {
    email.parentElement.classList.add("show");
  } else {
    email.parentElement.classList.remove("show");
  }
  if (password.value == "") {
    password.parentElement.classList.add("show");
  } else {
    password.parentElement.classList.remove("show");
  }

  console.log(name, lastName, email, password);
}
