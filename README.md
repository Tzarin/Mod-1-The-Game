Rock Paper Scissors Game (HTML/CSS/JavaScript)

Player vs computer

there is Score: to count out score.

Game have three choices:
1-Rock
2-Paper
3-Scissors

game have 5 button:
1-Rock button
2-Paper button
3-Scissors button
4-Reset button
5-Start timer

For background color I use gray color
For score I use white color
Rock Paper Scissors button I use bule color
reset button I use red color


https://www.w3schools.com/jsref/met_element_addeventlistener.asp

Examples
Add a click event to a <button> element:

element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}


element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

let name1;
let name1 = value1;
let name1 = value1, name2 = value2;
let name1, name2 = value2;
let name1 = value1, name2, /* …, */ nameN = valueN;


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

JavaScript Demo: Statement - If...Else:
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"

The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result. 

The increment ( ++ ) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

The Math. random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.


https://www.w3schools.com/jsref/prop_node_innertext.asp

JavaScript Examples
let text = document.getElementById("myP").innerText;

let text = document.getElementById("myP").innerHTML;

let text = document.getElementById("demo").textContent;


https://www.w3schools.com/JSREF/met_form_reset.asp

Example
Reset a form:
document.getElementById("myForm").reset();



JavaScript function called startTimer(). This function starts a timer that increments the timerSeconds variable by 1 every second (1000 milliseconds). It also updates the content of an HTML element with the id 'timer' to display the current value of the timer in seconds.
Inside the arrow function, the timerSeconds variable is incremented by 1.
The document.getElementById('timer') retrieves the HTML element with the id 'timer'.

// Disable the Start Timer button once the timer starts
    document.getElementById('startTimer').disabled = true;
// Update the timer every second (1000 milliseconds)

https://www.w3schools.com/js/js_timing.asp
Example
Click a button. Wait 3 seconds, and the page will alert "Hello":

<!-- <button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script> -->