export const subdata = {
  "기본": ["base_기본.svg"],
  "눈": ["base_눈_1.svg","base_눈_2.svg"],
  "코입": ["base_코입.svg","이미지-2","이미지-3"],
  "눈썹": ["base_눈썹_1.svg","base_눈썹_2.svg"], 
  "뒷머리": ["base_뒷머리.svg","이미지-2"],
  "앞머리": ["base_앞머리.svg","이미지-2","이미지-3"],
  "귀": ["base_귀.svg","이미지-2"],
  "의상": ["base_의상.svg","이미지-2","이미지-3"],
  "장식1": ["base_장식1.svg","이미지-2"],
  "장식2": ["base_장식2.svg","이미지-2","이미지-3"],
  "뒷장식": ["base_뒷장식.svg","이미지-2"]
}

export const subDataArr = Object.values(subData);
console.log(subDataArr.length);

export const menuArr = Object.keys(subData);
console.log(menuArr);

export const menuArrZ = Object.keys(subData);
menuArrZ.reverse();
let a =menuArrZ[1];
let b =menuArrZ[2];
let c =menuArrZ[6];
let d =menuArrZ[10];
menuArrZ.pop();
menuArrZ.splice(1,2,c,d);
menuArrZ.splice(6,1,b);
menuArrZ.push(a);
console.log(menuArrZ);

// export const submenus = submenu.children;
