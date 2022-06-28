import { subdata, subDataArr, menuArr, menuArrZ } from "./DataValue.js";
import menuClick from "./menu.js";
import { boxStyle, createDeletElem, deleteEle, createElement, loopNeweElem } from "./function.js";
import submenuEvent from "./submenu.js";


export const seletor = {
  root : document.querySelector("#root"),
  header :document.querySelector("#header"),
  main :document.querySelector("#main"),
  menu : document.getElementById("menu"),
  submenu : document.querySelector("#submenu"),
  imgBox : document.getElementById("imgBox")
  }
  // ===========================================================
  export const  rootDiv = root.innerHTML = `
  <header id="header"></header>
  <main id="main"></main>
  `;
  
  export const headerDiv = header.innerHTML =`
  <div></div>
  <ul id="menu">${createElement("data-menus", menuArr , menuArr.length, 'li' ,"none")}</ul>
  <section id="submenu">${createElement("data-menus", menuArr, menuArr.length, "div", "none")}</section>
  `;
  
  export const mainDiv = main.innerHTML =`
  <div></div>
  <section id="imgBox">${createElement("data-menus", menuArrZ, menuArr.length, "article", "none", createElement("", "", 1, "img", "dd", "none"))}</section>
  `;
  // ===========================================================
export const submenus = submenu.children;
  console.log(submenus);
  // 어디에 넣어야하지...? 
  for(let i =0; i<menuArr.length; i++){
  submenus[i].style.display = "none";
  }