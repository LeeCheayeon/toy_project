const submenu = document.getElementById("submenu");
const submenus = submenu.children;
console.log(submenus);
const submenuschild = document.querySelectorAll("#submenu>article>div");
console.log(submenuschild);

//==================================================
const main = document.querySelector("main");
console.log(main);
//==================================================


export const imageMain = 
submenus.addEaddEventListener("click", function(){
  console.log("click");

});