import { rootDiv, headerDiv,mainDiv, seletor,submenus } from "./main.js";
import { subdata, subDataArr, menuArr, menuArrZ } from "./DataValue.js";
import { boxStyle, createDeletElem, deleteEle, createElement, loopNeweElem } from "./function.js";

let isStatus = true;
function menuClick(target){
  target.addEventListener("click", function(event){
  if(isStatus === true){
  console.log(isStatus);
  loopNeweElem(menuArr.length, submenus, event.target, subdata[event.target.dataset.menus] )
  isStatus =false;
  }else{
  deleteEle("delete", submenus.length);
  loopNeweElem(menuArr.length, submenus, event.target, subdata[event.target.dataset.menus] )
  console.log(isStatus);
  }
  });
} 

export default menuClick;