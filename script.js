/* Feature #1: add rows to the grid */
let amountofRows = 1;
let amountofColumns = 2;

function addRow() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)

        cell.classList.add("uncolored");

        newRow.appendChild(cell);
    }
    mainGrid.appendChild(newRow);
    amountofRows++;
}

/* Feature #2: add columns to the grid */
function addColumn() {

    let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        allRows[rowCounter].appendChild(cell);
        rowCounter++;
    }
    amountofColumns++;
}

/* Feature #3: remove rows from the grid */
function removeRow() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    mainGrid.deleteRow(amountofRows-1);
    amountofRows--;
}

/* Feature #4: remove columns from the grid */
function removeColumn() {

    let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);
        rowCounter++;
    }
    amountofColumns--;
}



// sets up new cell: sets event handlers and sets class to "uncolored"
function initializeCell(cell) {
    // change color on click
    cell.addEventListener("click", changeColor);
    // give cell as class called "uncolored"
    cell.classList.add("uncolored");

}



/* Feature #6: click on a single cell, changing its color to the currently selected color */
let currentColor = `${document.getElementById("color-select").value}`

function initializeCell(cell) {
    cell.addEventListener("click", changeColor);
    cell.classList.add("uncolored");
}
