import { divArr } from "./DataValue.js";
import divMaker from "./divMaker.js";

function pageMaker(arr,tagname,idname, tagnameT){
  let pageM ='';
  arr.forEach((value,index) => {
    pageM += `
    <${tagname} id="${value}">
    <a href="#${value}">${value}</a>
    <${tagnameT} id="${value}"></${tagnameT}>
    </${tagname}>`;
  });
  
  return pageM;
}

export default pageMaker;