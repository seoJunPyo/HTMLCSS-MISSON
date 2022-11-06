let round = document.getElementsByClassName("round");
let carousel = document.getElementsByClassName("carousel");

console.log(round);
console.log(carousel);

round[1].addEventListener("click", () => {
  carousel[0].style.transform = `translateX(-323px)`;
  round[0].classList.remove("bgc-grey-700");
  round[0].classList.add("bgc-grey-600");
  round[1].classList.remove("bgc-grey-600");
  round[1].classList.add("bgc-grey-700");
});

round[0].addEventListener("click", () => {
  carousel[0].style.transform = `translateX(0px)`;
  round[1].classList.remove("bgc-grey-700");
  round[1].classList.add("bgc-grey-600");
  round[0].classList.remove("bgc-grey-600");
  round[0].classList.add("bgc-grey-700");
});

round[3].addEventListener("click", () => {
  carousel[1].style.transform = `translateX(-323px)`;
  round[2].classList.remove("bgc-grey-700");
  round[2].classList.add("bgc-grey-600");
  round[3].classList.remove("bgc-grey-600");
  round[3].classList.add("bgc-grey-700");
});

round[2].addEventListener("click", () => {
  carousel[1].style.transform = `translateX(0px)`;
  round[3].classList.remove("bgc-grey-700");
  round[3].classList.add("bgc-grey-600");
  round[2].classList.remove("bgc-grey-600");
  round[2].classList.add("bgc-grey-700");
});
