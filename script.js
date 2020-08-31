 document.querySelector(".hamburguer").addEventListener("click", () =>
     document.querySelector(".container").classList.toggle("show-menu")
 );


 function fecharSidebar(){
    let Sidebar =  document.querySelector(".container");
    Sidebar.className = Sidebar.className.replace(" show-menu", "");
 }
