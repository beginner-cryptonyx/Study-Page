const formulas = Array.from(document.getElementsByClassName("formula"));

for (i = 0; i < formulas.length; i++) {
  formulas[i].addEventListener("click", () => {
    // alert(formulas[i].innerHTML);
    console.log(".");
  });
}

document.querySelector(".x svg").style.height = Math.random() * 90 + 130;
