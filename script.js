 
 window.addEventListener("load",()=>{
   let loader = document.querySelector(".loader");
   loader.className += " hidden";
   
 })
 
 

 
 let linkTopo = document.getElementById("link-topo");
 
 window.addEventListener("scroll" , function() {
  let value = window.scrollY;
  let tamanhoPag = window.outerHeight;
  if(value > tamanhoPag/2){
    linkTopo.style.display = "flex"
  }
   if(value == 0){
     linkTopo.style.display = "none";
   }

});
 
 
 
 let Hamburguer = document.querySelector(".menu-hamburguer");
 let Sidebar =  document.querySelector(".container");


 Hamburguer.addEventListener("click", () =>
    Sidebar.classList.toggle("show-menu")
 );


 function fecharSidebar(){
    Sidebar.className = Sidebar.className.replace(" show-menu", "");
 }


 $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });




