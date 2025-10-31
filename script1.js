const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {
  if(window.scrollY>200){
    btnArriba.style.display = "block";
  }else{
    btnArriba.style.display = "none";
  }
});