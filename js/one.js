import { boxStyle } from "./function.js";

function oneEvnet(target){
  const onepage = document.querySelector("#one>div");
  // console.log(onepage);
  onepage.innerHTML = `
  <div> logo </div>
  <div id="two"></div>
  `;

  // onepage.children[2]
  // console.dir(onepage.children[1]);
  boxStyle(onepage.children[1], "5vw", "5vw", "#333");

  // onepage.children[1].addEventListener("click", function(e){
  //   const elem = document.getElementById(`${e.target.id}`);
  //   console.log(elem);
  //   console.dir(e.target)
  //   if(e.target.id === elem.id ){
  //     const Eparent = e.target.parentNode.parentNode;
  //     Eparent.style.display = "none";
  //     elem.style.display = "block";

  //     console.log("rk")
  //   }
  // })
}

export default oneEvnet;