console.log("HELLO");

const test = () => {
  console.log("this is a test");
};

const emailalert = document.getElementById("emailalert");
const img = document.getElementsByClassName("email")[0].children[2];

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



function checkemail() {
  var re = /\S+@\S+\.\S+/;
  console.log("email finction is being called");

  if (re.test(email.value)) {
    emailalert.innerHTML = "valid eamil";
    emailalert.style.color = "green";
    img.style.opacity = 0;
  } else {
    emailalert.innerHTML = "email is not valid";
    emailalert.style.opacity = 1;
    img.style.opacity = 1;
  }
}
