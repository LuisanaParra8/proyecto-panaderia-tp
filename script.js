window.onload = function() {
    alert("¡Bienvenido/a a Le Croissant! 🥐 Esperamos que disfrutes nuestros productos.");
    const btnPanaderia = document.getElementById("btn-panaderia");
    if (btnPanaderia) {
    btnPanaderia.addEventListener("click", function(){
     const extraPanaderia = document.querySelector(".extra-productos");
    if (extraPanaderia.style.display === "grid") {
        extraPanaderia.style.display = "none";
        this.textContent = "Ver todos nuestros productos";
    } else {
        extraPanaderia.style.display = "grid";
        this.textContent = "Ver menos";
      }
    });
        
  }
};

 const btnPasteleria = document.getElementById("btn-pasteleria");
 if (btnPasteleria) {
    btnPasteleria.addEventListener("click", function() {
        
    });
  }
