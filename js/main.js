
var input = document.querySelector(".input")
var form = document.querySelector(".form")
var text = document.querySelector(".text")
var refizz = document.querySelector(".refizz")
var rebuzz = document.querySelector(".rebuzz")
var refizzbuzz = document.querySelector(".refizzbuzz")



var fizz =[]
var buzz =[]
var fizzbuzz =[]


form.addEventListener("submit", function (evt) {
  evt.preventDefault()

  var inputValue = Number(input.value)

  if (inputValue % 5 == 0 && inputValue % 3 == 0) {
    text.textContent = "FizzBuzz"
    if (inputValue == "") {
      fizzbuzz.push()
    } else {
      fizzbuzz.push(inputValue)
    }
  } else if (inputValue % 5 == 0) {
    text.textContent = "Fizz"
    if (inputValue == "") {
      fizz.push()
    } else {
      fizz.push(inputValue)
    }
  
  } else if (inputValue % 3 == 0) {
    text.textContent = "Buzz"
    if (inputValue == "") {
      buzz.push()
    } else {
      buzz.push(inputValue)
    }
  } else {
    text.textContent = "This number is not divisible by 3 or 5 !"
  }
  rebuzz.textContent = buzz
  refizz.textContent = fizz
  refizzbuzz.textContent = fizzbuzz



  
})  