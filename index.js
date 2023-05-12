var nDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < nDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var bHTML = this.innerHTML;
        makeSound(bHTML);
        bAnimation(bHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    bAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
      case "A":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "B":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "C":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "D":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "E":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "F":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "G":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }
  
  
  function bAnimation(currentKey) {
  
    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  