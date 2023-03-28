console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
let root = document.getElementById("root");

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

var nodeOne = document.getElementById("node1");
nodeOne.textContent = "I used the getElementById method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
var nodeTwo = document.getElementsByClassName("node2")[0];
nodeTwo.textContent = "I used the getElementsByClassName method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3s = document.getElementsByTagName("h3");
for (let h3 of h3s) {
  h3.textContent =
    "I used the getElementsByTagName method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";
let parent2 = document.querySelector("#parent");

// TODO: Append the created node to the parent node using the element.appendChild() method
parent2.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let link = document.createElement("a");
link.textContent = "I am a <a> tag that goes to Buzzfeed";
link.href = "https://buzzfeed.com";
let exercise2 = document.querySelector("#parent");
exercise2.appendChild(link);
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent2.insertBefore(link, p);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// var n1 = document.getElementById("N1");
// n1.textContent = "New Child Node";

let child = document.createElement("p");
child.textContent = "New Child Node";

let parent3 = document.querySelector("#exercise-container3");
let replaceChild = document.querySelector("#N1");

parent3.replaceChild(child, replaceChild);
// TODO: Remove the "New Child Node"
setTimeout(() => {
  parent3.removeChild(child);
}, 5000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element

let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let item of list) {
  let li = document.createElement("li");
  li.textContent = item;
  // TODO: Append the new list items to the unordered list element
  ul.appendChild(li);
}

// TODO: Append the unordered list to the `div#container` under exercise 4
let parent4 = document.querySelector("#container");
parent4.appendChild(ul);
/*----------- Exercise #5: DOM EVENTS --------------*/

function handleEsc(event) {
  if (event.key == "Escape") {
    document.body.removeChild(document.querySelector("#modal"));
  }
}

function show(event) {
  window.addEventListener("keyup", handleEsc);

  let modalContainer = document.createElement("div");
  let modalBody = document.createElement("div");
  let title = document.createElement("h2");
  let content = document.createElement("p");
  let closeButton = document.createElement("button");

  title.textContent = "Action Required";
  content.textContent = "You need to ...";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", (event) => {
    document.body.removeChild(modalContainer);
    window.removeEventListener("keyup", handleEsc);
  });

  modalContainer.id = "modal";
  modalBody.classList.add("modal-card");

  modalContainer.addEventListener("click", (event) => {
    console.log(event);
    if (event.target == modalContainer) {
      document.body.removeChild(modalContainer);
      window.removeEventListener("keyup", handleEsc);
    }
  });

  modalBody.append(title, content, closeButton);
  modalContainer.appendChild(modalBody);
  document.body.appendChild(modalContainer);
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", show);

let button = document.querySelector("#btn");
button.addEventListener("click", show);

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
