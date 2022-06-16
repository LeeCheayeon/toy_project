export const boxStyle = function boxStyle(target,width,height,backgroundColor){
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = backgroundColor;
  }
  
export const createDeletElem = function createDeletElem (tagName, innerHTMLValue, parentDiv, boxColor){
  const elem =document.createElement(tagName);
  elem.setAttribute("id", "delete")
  elem.setAttribute("data-menus", event.target.dataset.menus )
  elem.innerHTML = innerHTMLValue;
  parentDiv.appendChild(elem);
  if(elem.innerHTML === "undefined"){
  elem.style.display = "none";
  }else{
  boxStyle(elem, "10vw", "10vw", boxColor)
  //innerHTML 글씨 보여지는거 없애기... 
  }
  }

export const deleteEle = function deleteEle(idName,deletrValue){
  for(let i=0; i<deletrValue; i++){
  const deleteEle = document.getElementById(idName);
  deleteEle.remove();
  }
  }

export const createElement = function createElement (dataName, dataSubName, count, tagName, idName,childValue){
    // 매게변수의 타입체크
    idName = typeof idName === "string" ? idName : console.error(`${idName} : not string`);
    count = typeof count === "number" && Number.isNaN(count) !== true && Number.isInteger(count)
    ? count : console.error(`${count} : not number`);
    count = count >= 0 ? count : console.error(`${count} : 숫자의 값이 양수가 아니다.`);
    tagName = typeof tagName === "string" ? tagName : console.error(`${tagName} : not string`);
    // 배열
    let eleArr =[]; 
    let elementB = `<${tagName}>${idName}-${count}</${tagName}>`
    //조건식
    for(let i=0; i<count; i++){
    if(typeof dataSubName === "object"){
    // 데이터서브이름이 오브젝트일때
    if(tagName === "article"){
      //태그이름이 아티클일때
      elementB = `<${tagName} ${dataName}="${dataSubName[i]}">${childValue}</${tagName}>`
      eleArr.push(elementB);
    }else if(tagName === "img"){
      //태그이름이 img라면
      elementB = `<${tagName} ${dataName}="${dataSubName[i]}"></${tagName}>`
      eleArr.push(elementB);
    }else{
      //태그이름이 아티클이 아니라면
      elementB = `<${tagName} ${dataName}="${dataSubName[i]}">${dataSubName[i]}</${tagName}>`
      eleArr.push(elementB);
    }
    }else {
    // 오브젝트가 아닐때
    elementB = `<${tagName} ${dataName}="${dataSubName}">${dataSubName}</${tagName}>`
    eleArr.push(elementB);
    }
    }
    return eleArr.join("");
    }

export const loopNeweElem = function loopNeweElem (lengthValue, targetA, targetB, innerHTMLValue){
  for(let i=0; i<lengthValue; i++ ){
  if(targetA[i].dataset.menus === targetB.dataset.menus){
    // 타겟A와 타겟B의 데이터의 값이 같으면 
    console.log("same");
    targetA[i].style.display="block";
    for(let j=0; j<lengthValue; j++){
      createDeletElem("div", innerHTMLValue[j], targetA[i], "#333");
    }
  }else{
    // 데이터값이 같지 않으면 보여주지마
    targetA[i].style.display = "none";
  }
  }
  }