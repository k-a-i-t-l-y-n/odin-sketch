const container = document.getElementById("flex-container");
let gridSize = 16;

/**
 * This function make a grid using the rows and columns. 
 * A div element is created and appended to the flex container.
 * @param {This parameter represents the amount of rows in the grid} rows 
 * @param {This parameter represents the amount of columns in the grid} cols 
 */
function makeGrid(rows, columns) {
  for (c = 0; c < rows; c++) {
    for (let d = 0; d < columns; d++) {
      let cell = document.createElement("div");
      cell.innerText = (d + 1) % columns;
      container.appendChild(cell).className = "flex-item";
    }
  }
};
makeGrid(gridSize, gridSize);


//Adds event when the mouse over a flex item 
//and applies hover class styling in CSS
container.addEventListener("mouseover", function (e) {
  if (e.target.matches('.flex-item')) {
    e.target.classList.add('hover');
  }
});

//Adds event when the mouse clicks a flex item 
//and removes hover class styling in CSS
container.addEventListener("click", function (e) {
  if (e.target.matches('.flex-item')) {
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

