
var yo = " @SupplelyBasil36 ";
document.getElementById("header__aside-p2").innerHTML = yo;

function downTo() {
  window.scrollBy(0, 680);
}
function upTo() {
  window.scrollBy(0, -690);
}

window.addEventListener('scroll', function(){
  let animation = document.getElementById('animation');
  let positionObj = animation.getBoundingClientRect().top;
  console.log(positionObj);
  let sizeScreen = window.innerHeight/3;
  if (positionObj < sizeScreen) {
    animation.style.animation = 'scroll 1s ease-out';
  }
})