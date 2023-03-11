const btn = document.getElementById("x");
const inp = document.getElementById("w");
const o = document.getElementById("mathml_view");

btn.addEventListener("click", () => {
  console.log(o.innerHTML);
  console.log(inp.innerHTML);
  o.innerHTML = inp.value;
});
