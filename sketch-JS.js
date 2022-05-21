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


let button = document.createElement("button");
button.setAttribute(
  "style",
  "height: 50px; width: 50px; text-align: center; "
);


button.addEventListener("click", function () {
  gridSize = parseInt(prompt("Grid Size: "));
  removeAllChildNodes(container);
  makeGrid(gridSize, gridSize);
});

document.body.appendChild(button);

