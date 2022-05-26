function box (target, width, height,backgroundColor){
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backgroundColor;
}

const ImageBox = {
  basic : ["./images/base_BASE.svg"],
  eyes : ["./images/eyes/base_눈_1.svg", "./images/eyes/base_눈_2.svg"],
  noseMouth : [],
  eyebrows : [], 
  backHair: [],
  bangs :[],
  ears:[],
  clothes:[],
  deco1:[],
  deco2:[],
  backdeco: []
} 
let ImageBoxArr = Object.values(ImageBox);
console.log(ImageBoxArr);
console.log(ImageBoxArr[0].length);

function createSubElement (parentdiv){
  const newElement = document.createElement("div");
  newElement.id = "remove"
  box(newElement, '300px','300px','#c4c4c4');
  const newClickBox = document.createElement("div"); 
  box(newClickBox, '50px', '50px', "#ff6666");
  newElement.appendChild(newClickBox);
  parentdiv.appendChild(newElement);
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
  // console.log(getdataset);
    if(isstatus === true){
      createSubElement(submenu);
      const submenudiv = document.querySelector("#submenu>div");
      createDataset(submenudiv, getdataset);
      // console.dir(submenudiv.dataset.name);
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

// console.log(event.target.dataset.name);
// console.log(submenudiv.dataset.name); // basic
// if(target.dataset.name === submenudiv.dataset.neme){
  // }
  
  menu.addEventListener("click", function(evnet){
    let getdataset = evnet.target.dataset.name;
    const submenudiv = document.querySelector("#submenu>div");
    let submenuDataset = submenudiv.dataset.name;
    console.log(getdataset);
    console.log(submenudiv.dataset.name);
    if(getdataset === submenuDataset){
      // 만약 getdataset === submenuDataset 같다면
      submenudiv.style.backgroundColor = "green";
      // 클릭 박스를 imagebox의 [i].length 값만큼 만들어줘.
    }

  })