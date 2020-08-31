 
 let Hamburguer = document.querySelector(".hamburguer");
 let Sidebar =  document.querySelector(".container");


 Hamburguer.addEventListener("click", () =>
    Sidebar.classList.toggle("show-menu")
 );


 function fecharSidebar(){
    Sidebar.className = Sidebar.className.replace(" show-menu", "");
 }
