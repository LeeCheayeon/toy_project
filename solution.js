  // Q. 자식이 하나일때 하나 이상일때를 작성을 하고싶은데 이렇게 작성하는게 맞는지 잘 모르겠습니다. '-`;;

  /*

  A. 답은 근처에 있는데 이놈의 문서 만드는 것 때문에 혼동이 오는 모양입니다 :) 동적으로 만든 요소를 또한번 식별하고 하는 것들은 유심히 생각해보지 않으면 참 어려운 일인데, 코드를 보고 재미나게 하고 있는걸 구구절절 확인합니다!

  의사코드로 접근해보도록 하죠!
  1. 자식이 하나 이상이면 참 -> if(자식 > 1) { 참 실행구문하기 }
  2. 자식이 하나 이상이면 자식들에게 속성 부여
  3. 질문 : 속성을 부여한 뒤 이미지 요소를 넣고싶은 거예요? 

  */

  function setDesign(type, value) {
    console.log(type, value);
  }


  let children = 100;
  if(children > 1) {
    setDesign();// 의미 없는 함수 입니다. 여기에 무언가를 한다는 의미
  }


  // Q. 이제 여기에서 더 나아간다면 해당 파츠의 image 파일의 갯수만큼 box의 갯수를 늘리고(1)
  //박스하나에 해당 이미지를 순서대로 넣고 싶은데 가능한지 궁금합니다. 가능하다면 이것은 맨 마지막에 하는 것이 좋을까요? 

  let datasetName = ["나는", "날개달린", "호랑이다", "코딩", "쯤이야", "껌이지"];
  let imageName = ["a", "b", "c", "b", "e", "f"];

  datasetName.forEach((value, index) => {
    console.log("data-name", `value-${index}`);
  });
  
  // A. 얼마든지 가능합니다!!!!


  // 아니면 박스 클릭시 메인에 상자가 나타나는 것을 먼저 만드는것이 좋을까요?? 