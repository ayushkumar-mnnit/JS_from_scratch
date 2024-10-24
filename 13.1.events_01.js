
/*      EVENTS IN JAVASCRIPT

Event is an action or occurrence that happens in the browser, such as a user clicking a button, a page finishing loading, or an error occurring.

Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. There are many different types of events that can occur.

for ex-

1.The user selects, clicks, or hovers the cursor over a certain element.
2.The user chooses a key on the keyboard.

some common events--> click, mouseover,mouseout,mousedown,mouseup, keydown, keyup, dblclick

1. click- something happen on button click. ex-The color changes when the button is clicked.
2. dblclick — something happen on button double-click.ex- The color changes only when the button is double-clicked.
3. mouseover and mouseout — something happen on mouse hover.ex- The color changes when the mouse pointer hovers over the button, or when  pointer moves off the button, respectively.
4. mousedown and mouseup- something happen on mouse click.ex- The color changes when the mouse pointer is clicked on the button, or when the mouse pointer is released from the button, respectively.
5. keydown and keyup — something happen on key press.When you press a key on the keyboard, keydown fires, and it fires again as you hold the key down.When you release a key on the keyboard, keyup fires.ex- The color changes when the user presses a key on the keyboard.



Some events, such as click, are available on nearly any element. Others are more specific and only useful in certain situations: for example, the play event is only available on some elements, such as <video>.


To respond to an event we use "event listeners"

.addEventListener('click',()=>{        this is syntax of using addEventListener with event name and a callback function

    // code to be executed
})


there is another way to respond to an event in JS- "event handler properties" like onclick, onmouseover, onmouseout, onchange etc. means its simlar just starts with "on" keyword and ends with the name of the event.


.onclick=()=>{
    // code to be executed
}


// main diff bw using event listener and event handler properties is that - with event handler properties, you can't add more than one handler (the function which fires when the event occurs i.e. callback) for a single event while we can assign more than one handler for a single event using event listener.

element.addEventListener("click", function1)
element.addEventListener("click", function2)

both function1 and function2 will be called when the element is clicked but if we do like this

element.onclick=function1(){
}
element.onclick=function2(){
}

then both function1 and function2 will not be called but later one will overwrite former.



just like we add listeners, we can remove them also -  btn.removeEventListener("click", changeBackground)


For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. 



Sometimes, inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. This is called an 
"event object", and it is automatically passed to event handlers to provide extra features and information.

const btn = document.querySelector("button")

function random(number) {
  return Math.floor(Math.random() * (number + 1))
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`
  e.target.style.backgroundColor = rndCol
  console.log(e)
}

btn.addEventListener("click", bgChange)


"The target property of the event object is always a reference to the element on which event occurred upon."
Like here background color style on e.target — which is the button itself. 



 for the submit event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. If they are, we call the preventDefault() function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong


 const form = document.querySelector("form")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const para = document.querySelector("p")

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault()    // so it prevents default submission of the form which can occur on submit
    para.textContent = "You need to fill in both names!"
  }
})




*/