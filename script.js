console.log("House building Department");
console.log("Site is under construction");

const btn = document.querySelector('.fa-align-justify');
const menu = document.querySelector('.mobile_menu_icons');
menu.style.display = "none"; 
btn.onclick = () => {
    if(menu.style.display === "none"){
        menu.style.display = "flex";
    } else if(menu.style.display === "flex"){
        menu.style.display = "none";
    }
    btn.classList.toggle("fa-align-justify");
    btn.classList.toggle("fa-xmark");
};
 
document.addEventListener('click', (event) => { 
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.style.display = "none";
        btn.classList.add("fa-align-justify");
        btn.classList.remove("fa-xmark");
    }
});

 
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function () {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > lastScrollTop) { 
        navbar.classList.add('hidden');
      } else { 
        navbar.classList.remove('hidden');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  });
  