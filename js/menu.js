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

let menuArr = ["기본", "눈", "코입", "눈썹", "뒷머리", "앞머리" , "귀", "의상","장식1","장식2","뒷장식"];

createMenu(menu, menuArr); // 메뉴생성 함수 호출 

//menu data-name="menusArr";
//** 이부분이 menu에 들어가는 dataset 제어 부분입니다. 
const menus = document.querySelectorAll("#menu>li");
console.dir(menus);
console.log(menus.length);

let menusArr = ['basic', 'eyes', 'noseMouth','eyebrows', 'backHair','bangs','ears','clothes', 'deco1','deco2','backdeco'];
for(let i =0; i<menus.length; i++){
  menus[i].setAttribute('data-name', menusArr[i]);
}