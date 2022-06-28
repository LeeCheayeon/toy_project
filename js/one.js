import { boxStyle } from "./function.js";

function oneEvnet(target){
  const onepage = document.querySelector("#one>div");
  console.log(onepage);
  onepage.innerHTML = `
  <div> logo </div>
  <div id="two"></div>
  `;

  onepage.children[2]
  console.dir(onepage.children[1]);
  boxStyle(onepage.children[1], "5vw", "5vw", "#333");
}

export default oneEvnet;