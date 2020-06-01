// 7 - Fill all uncolored cells with the currently selected color
function fillUncolored() {
    let cells = document.getElementsByTagName("td");
    let list = [...cells];

    // populates a list of the uncolored cells
    const uncoloredCells = list.filter(cell => {
        return cell.classList.contains("uncolored");
    });

    // sets the background color for each cell to the selected color
    uncoloredCells.forEach(cell => {
        cell.style.backgroundColor = currentColor;
    });

}
// 8 - Fill all cells with the currently selected color 
function fillAll() {
    let cells = document.getElementsByTagName("td");
    let list = [...cells];

    // sets the background color for each cell to the selected color
    list.forEach(cell => {
        cell.style.backgroundColor = currentColor;
    });
}
