for(let i=0; i<submenus.length; i++){
  imgBox.children[i].style.position="absolute";
  boxStyle(imgBox.children[i], "500px", '500px');
  }
  // 잘 나오는지 확인용 새로 함수로 줄여서 다시 작성해야함. 
  export const submenuEvent = submenu.addEventListener("click",function(event){
    for(let i=0; i<submenus.length; i++){
    for(let j=0; j<1; j++){
    if(event.target.dataset.menus === imgBox.children[i].dataset.menus){
      const imgText = event.target.innerHTML;
      imgBox.children[i].children[j].src = `./images/${imgText}`;
    }
  }
  }
  });