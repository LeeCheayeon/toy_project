function box (target, width, height,backgroundColor){
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backgroundColor;
}

function createSubElement (parentdiv){
  const newElement = document.createElement("div");
  const newClickBox = document.createElement("div"); 
  box(newElement, '300px','300px','#c4c4c4');
  box(newClickBox, '50px', '50px', "#ff6666");

  newElement.appendChild(newClickBox);
  parentdiv.appendChild(newElement);
  newElement.id = "remove"
};

// createSubElement (submenu);

export const clickEvent =  menu.addEventListener("click", function(event){
  let isstatus = true;
  console.log(isstatus);
  let getdataset = event.target.dataset.name;
  console.log(getdataset);
  if(isstatus === true){
    console.log("true");
    createSubElement(submenu);
  }
  //   // menu.addEventListener("click",function(event){
  //     let getdataset = event.target.dataset.name;
  //     //변수 getdataset은 이벤트 타겟의 데이터셋의 네임이다. 
  //     console.log(getdataset);
  //     for(let i =0; i<menus.length; i++){
  //       if(menus[i].dataset.name === getdataset){
  //         // 가리키는 이름이 같다면 
  //         if(isstatus === true){
  //           //true일때
  //           createSubElement(submenu);
  //           console.log("true");
            
  //           //**새로 만든 함수에 dataset 추가 --------------------------
  //           const submenudiv = document.querySelector("#submenu>div");
  //           createDataset(submenudiv, getdataset);
            
  //           console.log(isstatus);
  //           isstatus=false;
  //         }
  //         else {
  //           //true가 아닐때
  //           //** 기존 div를 삭제하고 > 새로운 div 생성 --------------------
  //           Deletediv();
  //           console.log("false")
  //           createSubElement(submenu);
            
  //           //** 새로 만든 함수에 dataset 추가 ----------------------------
  //           const submenudiv = document.querySelector("#submenu>div");
  //           createDataset(submenudiv, getdataset);
  //         }
  //       }
  //     }
    // })
})

// clickEvent(menu);