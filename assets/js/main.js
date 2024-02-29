//console.log('hello world');

/*



- Quando l'utente clicca su una cella
    - SE il numero che ha cliccato è presente nell'array facciamo colorare la cella di rosso (end game)
    - ALTRIMENTI la cella si colora di azzurro

- La partita termina 
    - Se il giocatore ha cliccato su tutte le celle esclusi i funghi e mostriamo il numero di volte che cliccato
    - Altrimenti se schiaccia un fungo

*/

//Creo un array vuota
let mushroomList =[]
//attraverso una funziona e un ciclo for la riempiamo facendo attenzione che non ci siano due numeri uguali

const form = document.querySelector('form')
//console.log(button);

const container = document.querySelector('.container')

//- Al click del bottone genero una griglia quadrata con 10 caselle per ognuna delle 10 righe, ogni cella sarà numerata progressivamente
form.addEventListener('submit', function (e) {

    e.preventDefault()

    container.innerHTML = ''

    let numberCells = 100

    generateBoxCell(numberCells)

    // // console.log(`${markup}`);
    // for (let i = 0; i < numberCells ; i++) {

    //     const markup = `<div class="box">${i + 1}</div>`
    //     container.insertAdjacentHTML('beforeend', `${markup}`)

    // }
    // //- Al click della cella quest'ultima cambiera colore
    

     const cells = document.querySelectorAll('.box')

    addClassElementCell(cells)

    // for(let i = 0; i < cells.length; i++) {

    //     const elementCell = cells[i];
    //     //console.log(elementCell);

    //     elementCell.addEventListener('click', function () {
    //         elementCell.classList.toggle('skyblue')
    //         let numb = elementCell.textContent
    //         console.log(numb);
    //      })
        
    //}

    //console.log(elementCell);

    //console.log(cells[0]);
})



/**
 * Add class at cell
 * @param {Array} cells 
 */
function addClassElementCell(cells) {
    //const cells = document.querySelectorAll('.box')

    for(let i = 0; i < cells.length; i++) {

        const elementCell = cells[i];
        //console.log(elementCell);

        elementCell.addEventListener('click', function () {
            elementCell.classList.toggle('skyblue')
            let numb = elementCell.textContent
            console.log(numb);
         })
        
    }
}

/**
 * create a cells
 * @param {number} numberCells 
 */
function generateBoxCell(numberCells) {
    for (let i = 0; i < numberCells ; i++) {

        const markup = `<div class="box">${i + 1}</div>`
        container.insertAdjacentHTML('beforeend', `${markup}`)

    }
}