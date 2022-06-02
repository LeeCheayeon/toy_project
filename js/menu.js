export const createMenu = function createMenu(){
  // 메뉴 생성 함수 
  for(let i = 0; i<menuArr.length; i++){
    //반복문
    const li = document.createElement("li");
    li.textContent = menuArr[i];
    li.setAttribute("data-menus", menuArr[i]);
    menu.appendChild(li);
  }
}

// --------------------------------------------
const menuArr = ["기본", "눈", "코입", "눈썹", "뒷머리", "앞머리" , "귀", "의상","장식1","장식2","뒷장식"];
// for(let i=0; i<menuArr.length; i++){
//   const li = document.createElement("li");
//   li.textContent=menuArr[i];
//   li.setAttribute("data-menus", menuArr[i]);
//   menu.appendChild(li);
// }

const menu = document.getElementById("menu");
// console.log(menu);
menu.style.listStyleType="none"

    for(let i =0; i<menuArr.length; i++){
      const clickContainer = document.createElement('article');
      clickContainer.setAttribute("data-menus", menuArr[i]);
      clickContainer.textContent=menuArr[i];
      // clickContainer.textContent="";
      // textcontent 없애주는 애 
      submenu.appendChild(clickContainer);
      clickContainer.style.display="none";
      // console.log(clickContainer);
    }
// --------------------------------------------

createMenu(menu, menuArr); // 메뉴생성 함수 호출 