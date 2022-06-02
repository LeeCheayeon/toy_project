//Q. 그다음 해당 클릭박스를 누르면 main에 이미지가 보이도록 하는 작업도 실행 (생각해보기/검색
// 1. newdiv 를 클릭하면 main에 이미지가 보이도록해줘 or 새로운 요소를 생성해줘. 
// 2. newdiv 를 클릭하면 빨강 / 클릭 안 한것은 검정 (event.target)
// 3. main>section(11)>div(image)
// main이라는 요소는 id도 main (지정하는데 필요하다면 id 추가)
// section(11개) id 또는 dataset에 menuArr값처럼 넣기
// div 생성 : newdiv를 클릭하면 새로운 div 생성
// submenus에 클릭 이벤트 추가 > event.target(newdiv)를 클릭하면 색상변화 (추후 디자인


const submenu = document.getElementById("submenu");
const submenus = submenu.children;
console.log(submenus);
const submenuschild = document.querySelectorAll("#submenu>article>div");
console.log(submenuschild);

export const imageMain = submenus.addEaddEventListener("click", function(event){
  
});