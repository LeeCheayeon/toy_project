import {divData} from "./DataValue.js";

function divMaker(arr,tagname){
  let divM = "";
  // console.log(Object.values(divData))
  arr.forEach((value) => {
    divM += `
    <${tagname}>${value}</${tagname}>
    `;
    // if(arr === "one"){
    //   console.log("one")
    // }
  });
}

export default divMaker;

// console.log(divMaker("one", "div")); 