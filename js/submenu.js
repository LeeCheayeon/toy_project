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
        noseMouth: [1],
        eyebrows: [1], 
        backHair: [1],
        bangs: [1],
        ears: [1],
        clothes: [1],
        deco1: [1],
        deco2: [1],
        backdeco: [1]
      }

      const menus = document.querySelectorAll("#menu>div");
      console.dir(menus);
      
      // 이미지 박스를 values()로 바꿨다.
      // 이제 이미지박스어레이의 값을 menu에 1대1로 하나씩 넣어서 
      // event.target을 클릭하면 해당하는 길이값에 맞게 clickbox를 생성하도록 하고 싶다.
      // 예를 들어 menu의 2번째 메뉴를 클릭하면 > 이미지박스어레이의 2번째친구의 길이값인 2에 맞게 박스를 2개 생성해주는걸 하고싶은데
      // 어떻게 해야할지 지금은 머리가 좀 아파서 잘 모르겠다...  
      let ImageBoxArr = Object.values(ImageBox);
      console.log(ImageBoxArr);
      console.dir(ImageBoxArr[1].length);
      // for(let i=0; i<ImageBoxArr.length; i++){
      //   menus[i] = ImageBoxArr[i];
      // }


//서브메뉴 클릭박스 생성
// 1. 이미지 박스의 길이값만큼 박스를 만들어줘-------------------------------
function newClickBox (pararentValue){
  const newClickBox = document.createElement("div"); 
  box(newClickBox, '50px', '50px', "#ff6666");
  pararentValue.appendChild(newClickBox);
}

// 만약에 imagebox의 [i]dhk eventtargetdml i가 같다면? 
// 박스를 imagebox[i].length 만큼 만들어줘...? 

// createSubElement (submenu);

//remove 라는 id를 가진 아이를 삭제 -------------------------------------
function Deletediv(){
  const reDiv = document.getElementById("remove");
  // 변수 removediv는 문서의 아이디 중 "remove"를 가진 아이
  reDiv.remove();
}

// data-name function ------------------------------------------------
function createDataset (pararentValue , ArrValue){
  pararentValue.setAttribute('data-name', ArrValue);
}

// 이부분은 회색박스 부분 clickbox의 부모 
let isstatus = true;
export const clickEvent =  menu.addEventListener("click", function(event){
  let getdataset = event.target.dataset.name;
  if(isstatus === true){
    createSubElement(submenu);
      const submenudiv = document.querySelector("#submenu>div");
      createDataset(submenudiv, getdataset);
          console.log(getdataset);
          isstatus = false;
        }else{
          Deletediv(submenu);
          console.log("false");
          createSubElement(submenu);
          const submenudiv = document.querySelector("#submenu>div");
          createDataset(submenudiv, getdataset);
        }
      })
      

      // 이부분이 click box 부분 나눠봤다. 
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