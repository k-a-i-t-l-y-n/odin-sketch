const container = document.getElementById("flex-container");

function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "flex-item";
  }
};


makeRows(16, 16);