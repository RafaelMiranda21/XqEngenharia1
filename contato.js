
let AreaCheckbox = document.querySelector(".Area-Checkbox ");
let formTrabalho = document.querySelector(".formBoxTrabalho");
let form = document.querySelector(".formBox");


let checkbox = document.querySelector(".checkbox").addEventListener("click", ()=>{
    AreaCheckbox.classList.toggle("showCheckbox");
    formTrabalho.classList.toggle("showform");
    form.classList.toggle("showform");
})

function AreadeTrabalho(){
    
    AreaCheckbox.className = AreaCheckbox.className.replace(" showCheckbox","");
    formTrabalho.className = formTrabalho.className.replace(" showform",""); 
    form.className = form.className.replace(" showform",""); 

    AreaCheckbox.classList.toggle("showCheckbox");
    formTrabalho.classList.toggle("showform");
    form.classList.toggle("showform");
}



function AreadeContato(){
    AreaCheckbox.className = AreaCheckbox.className.replace(" showCheckbox","");
    formTrabalho.className = formTrabalho.className.replace(" showform",""); 
    form.className = form.className.replace(" showform","");  
}