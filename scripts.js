// Feature #9: clear all cells/restore all cells to their original/initial color 

function clearAll(){
    let cells = document.getElementsByTagName('td');
    let listOfCells = [...cells];

    listOfCells.forEach(cell=>{
        cell.style.backgroundColor = 'red';
        cell.classList.add('uncolored');
    })
}

