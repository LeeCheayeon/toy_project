import pageMaker from "./pageMaker.js";
import {pageArr, divArr} from "./DataValue.js";
import { boxStyle } from "./function.js";
import oneEvnet from "./one.js";

//===========================================================

const root = document.getElementById("root");
console.log(root);

root.innerHTML = pageMaker(pageArr,"section", "page", "div");

window.addEventListener("load",()=>{
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  const pages = Array.from(document.getElementsByTagName('section'));
  console.log(pages[0]);

  pages.forEach((value) => {
    boxStyle(value, '100vw', '100vh', "none")
    // console.dir(value.childNodes[0].innerHTML);
    if(value.id !== "one"){
      value.style.display = "none";
    }
    oneEvnet(pages[0]);

  root.addEventListener("click", function(event){
    console.log("clcik");
    console.log(event.target.id);
    if(event.target.id === "two"){
      console.log(event.target.id);
      pages[0].style.display = "none";
    }
  });
});  

});
