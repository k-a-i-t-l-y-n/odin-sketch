const container = document.getElementById("flex-container");

/**
 * This function make a grid using the rows and columns. 
 * A div element is created and appended to the flex container.
 * @param {This parameter represents the amount of rows in the grid} rows 
 * @param {This parameter represents the amount of columns in the grid} cols 
 */
function makeGrid(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "flex-item";
  }
};


makeGrid(16, 16);