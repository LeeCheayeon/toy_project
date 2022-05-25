export const createMenu = function createMenu(parentdiv, divArr){
  // 메뉴 생성 함수 
  for(let i = 0; i<divArr.length; i++){
    //반복문
    const newMenu = document.createElement("li");
    const newMenuText = document.createTextNode(divArr[i]);
    newMenu.appendChild(newMenuText);
    parentdiv.appendChild(newMenu);
  }
}

createMenu(menu, menuArr); // 메뉴생성 함수 호출 
