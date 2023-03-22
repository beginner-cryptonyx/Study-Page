
console.log("util init")

function _toggle(id){
    let node = document.getElementById(id)
    node.classList.toggle('hidden')
}

export default function switch_content(target_id, source_id){
    
    let source_element = document.getElementById(source_id)
    let target_element = document.getElementById(target_id)
    
    target_element.innerHTML = source_element.innerHTML
    
}

function redirect(href){
    window.location = href
}