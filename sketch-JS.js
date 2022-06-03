const container = document.getElementById("grid-container");
const header = document.getElementById("header-container");
let dimensions = document.createElement("h2");
let gridSize = 16;

/**
 * This function make a grid using the rows and columns. 
 * A div element is created and appended to the grid container.
 * @param {This parameter represents the amount of rows in the grid} rows 
 * @param {This parameter represents the amount of columns in the grid} cols 
 */
function makeGrid(gridSize) {
  let totalDivs = gridSize * gridSize;
  dimensions.textContent = gridSize + "x" + gridSize;
  dimensions.style.fontFamily = "Roboto, sans-serif";
  dimensions.style.color = "#000";
  dimensions.style.padding = "5px";
  dimensions.style.border = "solid 10px #E8AEB7";
  dimensions.style.backgroundColor = "#fff";
  dimensions.style.fontSize = "2em";
  header.appendChild(dimensions);

  container.style.gridTemplateColumns = `repeat(${gridSize}, 30px)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 30px)`;

  for (let i = 0; i < totalDivs; i++) {
    let cell = document.createElement("div");
    // cell.innerText = (i + 1) % gridSize;
    container.appendChild(cell).className = "grid-item";

  }

};
makeGrid(gridSize);


//Adds event when the mouse over a flex item 
//and applies hover class styling in CSS
container.addEventListener("mouseover", function (e) {
  if (e.target.matches('.grid-item')) {
    e.target.style.backgroundColor = "#353935";
  }
});

//Adds event when the mouse clicks a flex item 
//and removes hover class styling in CSS
container.addEventListener("click", function (e) {
  if (e.target.matches('.grid-item')) {
    e.target.style.backgroundColor = "";
  }
});

//Adds event when the mouse clicks a flex item 
//and removes style attribute from it
container.addEventListener("click", function (e) {
  if (e.target.matches('.grid-item')) {
    console.log("Remove color");
    e.target.removeAttribute('style');
  }
});

/**
 * Removes all child nodes of the specified parent
 * @param {This parameter represents the parent element} parent 
 */
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}


//Gets grid button in HTML
let gridbutton = document.getElementById("grid-btn");

//Adds event to grid button and creates a new grid based on user input
gridbutton.addEventListener("click", function () {
  do {
    gridSize = parseInt(prompt("Grid Size: "));
  } while (gridSize > 100 || gridSize < 1 || !(Number.isInteger(gridSize)));
  header.removeChild(dimensions);
  removeAllChildNodes(container);
  makeGrid(gridSize, gridSize);
});

//Gets color button in HTML
let colorButton = document.getElementById("color-btn");

//Add event to color button and add random RGB value to grid item background
colorButton.addEventListener("click", function () {
  console.log("Color Button triggered");
  console.log(colorButton.style.backgroundColor);
  if (colorButton.style.backgroundColor == "rgb(169, 169, 169)") {
    console.log("Back to hover");
    container.addEventListener("mouseover", function (e) {


      colorButton.style.backgroundColor = "";

      if (e.target.matches('.grid-item')) {
        e.target.style.backgroundColor = "#353935";
      }
    });
  }
  else {
    container.addEventListener("mouseover", function (e) {
      console.log("Back to color");
      colorButton.style.backgroundColor = "#a9a9a9";

      if (e.target.matches('.grid-item')) {
        e.target.style.backgroundColor = randomRGBValue();
      }
    
  });
  }
});

//Gets clear button in HTML
let clearButton = document.getElementById("clear-btn");

//Add event to clear button and removes styling applied to grid items
clearButton.addEventListener("click", function () {
  children = container.childNodes;

  for (let i = 0; i < children.length; i++) {
    console.log("Clear");
    console.log(children[i]);
    children[i].style.removeProperty('background-color');
  }
});


/**
 * This function creates a random RGB value
 * @returns string
 */
function randomRGBValue() {
  let r, g, b;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  return "rgb(" + r + "," + g + "," + b + ")";
}



