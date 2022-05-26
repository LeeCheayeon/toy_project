function box (target, width, height,backgroundColor){
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backgroundColor;
}



//서브메뉴 겉박스
function createSubElement (parentdiv){
  const newElement = document.createElement("div");
  newElement.id = "remove"
  box(newElement, '300px','300px','#c4c4c4');
  parentdiv.appendChild(newElement);
};

      const ImageBox = {
        basic : [1],
        eyes: [1,2],
        noseMouth: [],
        eyebrows: [], 
        backHair: [],
        bangs: [],
        ears: [],
        clothes: [],
        deco1: [],
        deco2: [],
        backdeco: []
      }

      const menus = document.querySelectorAll("#menu>div");
      console.dir(menus);

      let ImageBoxArr = Object.values(ImageBox);
      console.dir(ImageBoxArr);
      console.dir(ImageBoxArr[1].length);
      // for(let i=0; i<ImageBoxArr.length; i++){
      //   menus[i] = ImageBoxArr[i];
      // }


//서브메뉴 클릭박스 생성
// 1. 이미지 박스의 길이값만큼 박스를 만들어줘
function newClickBox (pararentValue){
      const newClickBox = document.createElement("div"); 
      box(newClickBox, '50px', '50px', "#ff6666");
      pararentValue.appendChild(newClickBox);
}

// 만약에 imagebox의 [i]dhk eventtargetdml i가 같다면? 
// 박스를 imagebox[i].length 만큼 만들어줘...? 

// createSubElement (submenu);

//remove 라는 id를 가진 아이를 삭제 
function Deletediv(){
  const reDiv = document.getElementById("remove");
  // 변수 removediv는 문서의 아이디 중 "remove"를 가진 아이
  reDiv.remove();
}

// data-name function
function createDataset (pararentValue , ArrValue){
  pararentValue.setAttribute('data-name', ArrValue);
}

let isstatus = true;
export const clickEvent =  menu.addEventListener("click", function(event){
  let getdataset = event.target.dataset.name;
  // console.log(getdataset);
  if(isstatus === true){
    createSubElement(submenu);
      const submenudiv = document.querySelector("#submenu>div");
      createDataset(submenudiv, getdataset);
      // for(let index =0; index<ImageBoxArr[index].length; index++){
        // if(ImageBoxArr[index] === event.target.length){
          //     newElement.appendChild(newClickBox);
          //   }
          // }
          // console.dir(submenudiv.dataset.name);
          console.log(getdataset);
          isstatus = false;
        }else{
          // isstatus === false;
          // console.dir(event.target.childElementCount);
          Deletediv(submenu);
          console.log("false");
          createSubElement(submenu);
          const submenudiv = document.querySelector("#submenu>div");
          createDataset(submenudiv, getdataset);
        }
      })
      
      // 의사코드 
      //1. clickBox.dataset.name 


      menu.addEventListener("click", function(evnet){
        let getdataset = evnet.target.dataset.name;
        const submenudiv = document.querySelector("#submenu>div");
        let submenuDataset = submenudiv.dataset.name;
        console.log(getdataset);
        console.log(submenudiv.dataset.name);
        console.dir(evnet.target);
        console.dir(ImageBoxArr[0]);
        if(getdataset === submenuDataset){
          // 만약 getdataset === submenuDataset 같다면
          // 새로만든 클릭박스의 데이터셋 이름을 타켓인 디이터셋 이름과 같은걸로 달아줘. 
          newClickBox(submenudiv);
          let clickBox = document.querySelector("#submenu>div>div");
          createDataset(clickBox, getdataset);
          console.dir(clickBox.dataset.name);
          // 클릭후 dataname이 들어가긴함. 
          for(let i=0; i<ImageBoxArr.length; i++){
            
            console.dir(ImageBoxArr[i].length);
            if(clickBox.dataset.name === ImageBoxArr[i]){
        console.log('true');
        console.log(ImageBoxArr[i]);
        newClickBox(submenudiv);
      }
      }
      // 만약 데이터 클릭박스의 이름이 메뉴 어레이의 값과 같다면 
    }
    
  })