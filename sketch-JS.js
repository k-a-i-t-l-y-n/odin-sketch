const container = document.getElementById("grid-container");
let gridSize = 16;

/**
 * This function make a grid using the rows and columns. 
 * A div element is created and appended to the grid container.
 * @param {This parameter represents the amount of rows in the grid} rows 
 * @param {This parameter represents the amount of columns in the grid} cols 
 */
function makeGrid(gridSize) {
  let totalDivs = gridSize * gridSize;

  container.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 50px)`;

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
    e.target.classList.add('hover');
  }
});

//Adds event when the mouse clicks a flex item 
//and removes hover class styling in CSS
container.addEventListener("click", function (e) {
  if (e.target.matches('.grid-item')) {
    e.target.classList.remove('hover');
  }
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}


let gridbutton = document.getElementById("grid-btn");

gridbutton.addEventListener("click", function () {
  do{
    gridSize = parseInt(prompt("Grid Size: "));
  }while(gridSize > 100);

  removeAllChildNodes(container);
  makeGrid(gridSize, gridSize);
});


let colorButton = document.getElementById("color-btn");

colorButton.addEventListener("click", function () {
  console.log("Color Event");
  container.addEventListener("mouseover", function (e) {
    console.log("Hover Event");
    if (e.target.matches('.grid-item')) {
      console.log("Target Matched");
      e.target.style.backgroundColor = randomRGBValue();
    }
    console.log("Color Change");
  });
});

let clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", removeChildrenProperty(container, backgroundColor));

function randomRGBValue(){
  let r, g, b;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  return "rgb(" + r + "," + g + ","+ b + ")";
}

function removeChildrenProperty(parent, styleProperty){
  children = parent.childNodes;

  for(let i = 0; i < children.legnth; i++)
  {
    children[i].style.styleProperty = null;
  }
}

