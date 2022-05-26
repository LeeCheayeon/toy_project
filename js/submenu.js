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
    if(isstatus === true){
      createSubElement(submenu);
      const submenudiv = document.querySelector("#submenu>div");
      createDataset(submenudiv, getdataset);
      console.log(getdataset);
      isstatus = false;
  }else{
    // isstatus === false;
    Deletediv(submenu);
    console.log("false");
    createSubElement(submenu);
    const submenudiv = document.querySelector("#submenu>div");
    createDataset(submenudiv, getdataset);
  }
})