const button = document.getElementById('bottone_html');


const grid = document.getElementById('griglia');

let selectBarr = document.getElementById('select').value;
    
let numCel = 0;


button.addEventListener ('click' , function(){
     
        grid.innerHTML = '';
        
        selectBarr = document.getElementById('select').value;
        
        if (selectBarr == 0){
            numCel = 0;
            alert("Attenzione, inserire livello di difficoltà");            
        } else if (selectBarr == 1) {
            numCel = 100;
        } else if (selectBarr == 2) {
            numCel = 81;
        } else {
            numCel = 49;
        }

        
        
        generaCell(numCel, selectBarr);
    
})

function generaCell () {
    for (let index= 1; index <= numCel; index++) {
        
        const cell = document.createElement('div');
        cell.innerText = index;
        cell.classList.add('cell');

        if (selectBarr == 1) {
            cell.classList.add('cell10');
        } else if (selectBarr == 2) {
            cell.classList.add('cell9');
        } else {
            cell.classList.add('cell7');
        }
        
        cell.addEventListener ('click', function() {
            cell.classList.add('skyblue');
            console.log(index);
        })
        grid.append(cell);
    }
}