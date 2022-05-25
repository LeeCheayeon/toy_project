function box (target, width, height,backgroundColor){
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backgroundColor;
}

export const createElement = function createSubElement (parentdiv){
  const newElement = document.createElement("div");
  const newClickBox = document.createElement("div"); 
  box(newElement, '300px','300px','#c4c4c4');
  box(newClickBox, '50px', '50px', "#ff6666");

  newElement.appendChild(newClickBox);
  parentdiv.appendChild(newElement);
  newElement.id = "remove"
};

createElement (submenu);