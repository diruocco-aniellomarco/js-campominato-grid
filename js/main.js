const button = document.getElementById('bottone_html');
console.log(button);

const grid = document.getElementById('griglia');
console.log(grid);

let numCel = 100;


button.addEventListener ('click' , function(){
    grid.innerHTML = '';
    generaCell ();
})

function generaCell () {
    for (let index= 1; index <= numCel; index++) {
        const cell = document.createElement('div');
        cell.innerText = index;
        cell.classList.add('cell');
        
        cell.addEventListener ('click', function() {
            cell.classList.add('skyblue');
            console.log(index);
        })
        grid.append(cell);
    }
}