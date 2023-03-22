const formulas = Array.from(document.getElementsByClassName("formula"));

function switch_content(target_id, source_id){
    
  let source_element = document.getElementById(source_id)
  let target_element = document.getElementById(target_id)
  
  target_element.innerHTML = source_element.innerHTML
  
}

document.querySelector(".x svg").style.height = Math.random() * 90 + 130;

document.addEventListener("DOMContentLoaded", () => {
  const _url = window.location.search;
  const params = new URLSearchParams(_url);
  const subject = params.get("subject");


  if (subject == "physics") {
    switch_content("canvas", "physics")
  } else if (subject == "math") {
    switch_content("canvas", "math")
  } else if (subject == "chemistry") {
    switch_content("canvas", "chemistry")
  }
});

