function box (target, width, height,backgroundColor){
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backgroundColor;
}



//서브메뉴 겉박스
// function createSubElement (parentdiv){
//   const newElement = document.createElement("section");
//   newElement.setAttribute("id", 'submenu')
//   box(newElement, '300px','300px','#c4c4c4');
//   parentdiv.appendChild(newElement);
// };

const submenu = document.getElementById("submenu");
const submenus = submenu.children;
console.log(submenus);

// 변수 이름 지정 
// 이미지박스 생성 ==============================

const ImageBox = {
  "기본": ["이미지-1","이미지-2"],
  "눈": ["이미지-1","이미지-2","이미지-3"],
  "코입": ["이미지-1","이미지-2","이미지-3"],
  "눈썹": ["이미지-1","이미지-2"], 
  "뒷머리": ["이미지-1","이미지-2"],
  "앞머리": ["이미지-1","이미지-2","이미지-3"],
  "귀": ["이미지-1","이미지-2"],
  "의상": ["이미지-1","이미지-2","이미지-3"],
  "장식1": ["이미지-1","이미지-2"],
  "장식2": ["이미지-1","이미지-2","이미지-3"],
  "뒷장식": ["이미지-1","이미지-2"]
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

// // 이부분은 회색박스 부분 clickbox의 부모 
// let isstatus = true;
// export const clickEvent =  menu.addEventListener("click", function(event){
//   let getdataset = event.target.dataset.name;
//   if(isstatus === true){
//     createSubElement(submenu);
//       const submenudiv = document.querySelector("#submenu>div");
//       createDataset(submenudiv, getdataset);
//           console.log(getdataset);
//           isstatus = false;
//         }else{
//           Deletediv(submenu);
//           console.log("false");
//           createSubElement(submenu);
//           const submenudiv = document.querySelector("#submenu>div");
//           createDataset(submenudiv, getdataset);
//         }
//       })
      

//       // 이부분이 click box 부분 나눠봤다. 
//       menu.addEventListener("click", function(evnet){
//         let getdataset = evnet.target.dataset.name;
//         const submenudiv = document.querySelector("#submenu>div");
//         let submenuDataset = submenudiv.dataset.name;
//         console.log(getdataset);
//         console.log(submenudiv.dataset.name);
//         console.dir(evnet.target);
//         console.dir(ImageBoxArr[0]);
//         if(getdataset === submenuDataset){
//           // 만약 getdataset === submenuDataset 같다면
//           // 새로만든 클릭박스의 데이터셋 이름을 타켓인 디이터셋 이름과 같은걸로 달아줘. 
//           newClickBox(submenudiv);
//           let clickBox = document.querySelector("#submenu>div>div");
//           createDataset(clickBox, getdataset);
//           console.dir(clickBox.dataset.name);
//           // 클릭후 dataname이 들어가긴함. 
//           for(let i=0; i<ImageBoxArr.length; i++){
            
//             console.dir(ImageBoxArr[i].length);
//             if(clickBox.dataset.name === ImageBoxArr[i]){
//         console.log('true');
//         console.log(ImageBoxArr[i]);
//         newClickBox(submenudiv);
//       }
//       }
//       // 만약 데이터 클릭박스의 이름이 메뉴 어레이의 값과 같다면 
//     }
    
//   })

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
          Deletediv(submenuschild);
        }
        // 기존에 있던 newdiv 삭제
        // 다시 newdiv 생성
        for(let j=0; j<imageboxArr.length; j++){
          createnewdiv(submenu.children[i], ImageBox[event.target.dataset.menus][j], 'id', "delete");
          //newdiv 생성 및 undefined display = none이 들어간 함수 
      }
        // isstatus = true;
        // true로 돌아가면 3번 클릭시 중복생성이 되므로 돌아가지 않는다. 
      }
    }else{
      // console.log("다르다")
      submenus[i].style.display="none";
      menus[i].style.color="black";
    }
  }
});