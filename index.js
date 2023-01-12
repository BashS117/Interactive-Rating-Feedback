const button = document.querySelector(".button");
const thanksState = document.querySelector(".thanksState")
const parent = document.querySelector('.list');
const span = document.querySelector('#user_rate');
let currentColor = "hsl(217, 12%, 63%)"

button.addEventListener ('click', showThanksState);
function showThanksState(){
    thanksState.classList.toggle('inactive');
}

parent.addEventListener("click", function(event){
    if(event.target.classList.contains('circle')){
        if(currentColor === "hsl(217, 12%, 63%)" ){
            event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
            currentColor = "hsl(25, 97%, 53%)"
        } else {
            event.target.stayle.backgroundColor = "hsl(213, 19%, 18%)";
            currentColor = "hsl(213, 19%, 18%)";
        }
    }
})

parent.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
      span.innerHTML = event.target.innerHTML;
    }
  });