// function revealMyInfo(myName, className) {
//   let htmlElement = document.querySelector(className);

//   // console.log(span[0].innerHTML);

//   console.log(htmlElement);
// }

// function revealMyJob(myJob) {
//   let span = document.getElementsByTagName("span");

//   // console.log(span[0].innerHTML);

//   span[1].innerHTML = myJob;

// }

function revealMyInfo(myInfo, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;
  document.getElementById("greeting");
}
