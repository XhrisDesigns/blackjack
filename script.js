let numEl1 = document.getElementById("card1")
let numEl2 = document.getElementById("card2")
let checkEl = document.getElementById("check-el")


function check(){
  const value = Number(numEl1.value) + Number(numEl2.value);
  if(value === 21 ){
    checkEl.innerHTML = "<p class='bg-light text-success w-25 m-auto rounded-pill fw-bold'> You win </p>"
  } else if(value === 0) {
    checkEl.innerHTML = "<p class='bg-dark text-warning w-25 m-auto rounded-pill'> Empty Box </p>"
  }  else if(value < 0) {
  checkEl.innerHTML = "<p class='bg-danger text-light w-25 m-auto rounded-pill'> Wrong Input </p>"
}
  else{
    checkEl.innerHTML = "<p class='bg-danger text-light w-25 m-auto rounded-pill'> You Lost </p>"  
  }
}
