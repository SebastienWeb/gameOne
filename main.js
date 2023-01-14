const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = document.getElementById("first").value;
  const display = document.getElementById("display");
  display.innerText = firstname;
});
