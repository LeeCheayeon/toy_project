function box (target, width, height,backgroundColor){
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backgroundColor;
}

const submenu = document.getElementById("submenu");
const submenus = submenu.children;
console.log(submenus);

// 변수 이름 지정 
// 이미지박스 생성 ==============================

const ImageBox = {
  "기본": ["base_기본.svg"],
  "눈": ["base_눈_1.svg","base_눈_2.svg"],
  "코입": ["base_코입.svg","이미지-2","이미지-3"],
  "눈썹": ["base_눈썹_1.svg","base_눈썹_2.svg"], 
  "뒷머리": ["base_뒷머리.svg","이미지-2"],
  "앞머리": ["base_앞머리.svg","이미지-2","이미지-3"],
  "귀": ["base_귀.svg","이미지-2"],
  "의상": ["base_의상.svg","이미지-2","이미지-3"],
  "장식1": ["base_장식1.svg","이미지-2"],
  "장식2": ["base_장식2.svg","이미지-2","이미지-3"],
  "뒷장식": ["base_뒷장식.svg","이미지-2"]
}

const imageboxArr = Object.values(ImageBox);
console.log(imageboxArr);
// 이미지 박스를 values()로 바꿨다.


// ==============================================

// newdiv 전용
function createnewdiv(parentDiv, innerHTMLValue, classIdDataName, Name){
  const newdiv= document.createElement("div");
  newdiv.innerHTML = innerHTMLValue;
  newdiv.setAttribute(classIdDataName, Name)
  parentDiv.appendChild(newdiv);
  newdiv.style.display="flex";
  if(newdiv.innerHTML === "undefined"){
    console.log("값이 없습니다.");
    newdiv.style.display="none";
  }else {
    console.log("값이 있습니다.")
    box( newdiv,'10vw','10vw', '#333');
    newdiv.innerHTML = "";
    //innerHTML 안의 내용을 없애줌 
  }
}

//-------------------------------------------------
function Deletediv(){
  const deletediv = document.getElementById("delete");
  // 변수 removediv는 문서의 아이디 중 "delete"를 가진 아이
  deletediv.remove();
}
//-------------------------------------------------

const menu = document.getElementById("menu");
const menus = menu.children;

let isstatus =true;
export const clickEvent = menu.addEventListener("click", function(event){
  // console.log("click")
  for(let i=0; i<submenus.length; i++){
    if(submenus[i].dataset.menus === event.target.dataset.menus){
      // console.log("같다")
      menus[i].style.color = "red";
      //메뉴의 색을 레드로 바꿔줘 > 나중에 두껍게 할까?
      submenus[i].style.display="block";
      if(isstatus === true){
        console.log(isstatus);
        for(let j=0; j<imageboxArr.length; j++){
          createnewdiv(submenu.children[i], ImageBox[event.target.dataset.menus][j], 'id', "delete");
          //newdiv 생성 및 undefined display = none이 들어간 함수 
      }
      isstatus = false;
      // console.log(isstatus);
    } 
    else {
        // console.log(isstatus);
        // 만약 isstatus !== true가 아니라면 
        const submenuschild = document.querySelectorAll("#submenu>article>div");
        // console.log(submenuschild);
        for(let i=0; i<submenuschild.length; i++){
          // 기존에 있던 newdiv 삭제
          Deletediv(submenuschild);
        }
        // 다시 newdiv 생성
        for(let j=0; j<imageboxArr.length; j++){
          createnewdiv(submenu.children[i], ImageBox[event.target.dataset.menus][j], 'id', "delete");
          //newdiv 생성 및 undefined display = none이 들어간 함수 
      }
        // true로 돌아가면 3번 클릭시 중복생성이 되므로 돌아가지 않는다. 
      }
    }else{
      // console.log("다르다")
      submenus[i].style.display="none";
      menus[i].style.color="black";
    }
  }
});