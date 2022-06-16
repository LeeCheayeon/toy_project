let isStatus = true;
export const menuEvent = menu.addEventListener("click", function(event){
if(isStatus === true){
console.log(isStatus);
loopNeweElem(menuArr.length, submenus, event.target, subData[event.target.dataset.menus] )
isStatus =false;
}else{
deleteEle("delete", submenus.length);
loopNeweElem(menuArr.length, submenus, event.target, subData[event.target.dataset.menus] )
console.log(isStatus);
}
});