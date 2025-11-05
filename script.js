window.onload = function() {
    
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

 const btnPasteleria = document.getElementById("btn-pasteleria");
 if (btnPasteleria) {
    btnPasteleria.addEventListener("click", function (){
        const extraPasteleria = document.querySelector(".extra-productos-pasteleria");
        if (extraPasteleria.style.display === "grid") {
        extraPasteleria.style.display = "none";
        this.textContent = "Ver todos nuestros productos";
      } else {
        extraPasteleria.style.display = "grid";
        this.textContent = "Ver menos";
      }
    });
  }
};
const btnArriba = document.getElementById("btnArriba");
window.addEventListener("scroll", () => {
  if(window.scrollY>200){
    btnArriba.style.display = "block";
  }else{
    btnArriba.style.display = "none";
  }
});
btnArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});