// used to track if mouse is down
let activeColoring = false;

// sets up new cell: sets event handlers and sets class to "uncolored"
function initializeCell(cell) {
    // change color on click
    cell.addEventListener("click", changeColor);
    // give cell as class called "uncolored"
    cell.classList.add("uncolored");

    
/* Feature #10:
    click and hold (mouseover) from a single cell (start) to a different cell (end) 
    such that all affected/hovered-over cells from start to end change to the 
    currently selected color
*/

//cells will start to change color once mousedown
    let activeColoring = fasle;
    cell.addEventListener("mousedown", e => {
        coloring = true;
    });

    cell.addEventListener("mousemove", e=> {
        if(activeColoring){
        cell.style.backgroundColor =  currentColor;
        cell.classList.remove("uncolored");
        }
    });
}