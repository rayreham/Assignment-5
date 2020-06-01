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

