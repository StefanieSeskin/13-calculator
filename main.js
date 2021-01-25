// enter number in each form input.  click button.
// perform function of button
// answer appears in bottom form input

// const calculator = document.querySelector(‘#calculator’)
/* <button class="divide">/</button> 
<button class="multiply">*</button>
<button class="subtract">-</button>
<button class="add">+</button> */

let num1 = document.getElementById("firstnumber").value;
let num2 = document.getElementById("secondnumber").value;

function divideInputs() {
  num1 = document.getElementById("firstnumber").value;
  num2 = document.getElementById("secondnumber").value;
  document.getElementById("result").innerHTML = num1 / num2;
}
console.log;
// function multiplyInputs (){
//         num1 = document.getElementById('firstnumber').value;
//         num2 = document.getElementById('secondnumber').value;
//         document.getElementById('result').innerHTML = num1 * num2;
// }

// function subtractInputs (){
//         num1 = document.getElementById('firstnumber').value;
//         num2 = document.getElementById('secondnumber').value;
//         document.getElementById('result').innerHTML = num1 - num2;
// }

// function addInputs (){
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById('secondnumber').value;
//         document.getElementById('result').innerHTML = num1 + num2;
// }

// inputTop = document.getElementById('firstnumber');
// inputBottom = document.getElementById('secondnumber');
// total = document.getElementById('result');

// const first = document.querySelector('#firstinput')
// const first = document.querySelector('#secondinput')

// document.querySelector('#form')
// .addEventListener('submit', function (e) {
//   e.preventDefault()
//   alert(first.value)
//   // reset...
//   first.value = ''
// })

// document.querySelector('#sub').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.submitter.id)
// })
