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
  const facebook = document.getElementById("facebook");
  facebook.addEventListener("mouseenter", () => {
    facebook.style.color = "#1877f2"; 
  });
  facebook.addEventListener("mouseleave", () => {
    facebook.style.color = "#000"; 
  });
  
  const instagram = document.getElementById("instagram");
  instagram.addEventListener("mouseenter", () => {
    instagram.style.color = "#e1306c"; 
  });
  instagram.addEventListener("mouseleave", () => {
    instagram.style.color = "#000";
  });
});