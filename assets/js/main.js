//console.log('hello world');

//attraverso una funziona e un ciclo for la riempiamo facendo attenzione che non ci siano due numeri uguali

const form = document.querySelector('form')
//console.log(button);

const container = document.querySelector('.container')

let numberCells = 100

//- Al click del bottone genero una griglia quadrata con 10 caselle per ognuna delle 10 righe, ogni cella sarà numerata progressivamente
form.addEventListener('submit', function (e) {

    e.preventDefault()

    container.innerHTML = ''


    //Creo un array vuota
    let mushroomList = []
    addNumbMushroomList(mushroomList, numberCells)
    console.log(mushroomList);

    generateBoxCell(numberCells)

    // // console.log(`${markup}`);
    // for (let i = 0; i < numberCells; i++) {

    //     const markup = `<div class="box">${i + 1}</div>`
    //     container.insertAdjacentHTML('beforeend', `${markup}`)

    // }
    //- Al click della cella quest'ultima cambiera colore


    const cells = document.querySelectorAll('.box')

    let clicks = 0

    //addClassElementCell(cells)
    /*Quando l'utente clicca su una cella
    - SE il numero che ha cliccato è presente nell'array facciamo colorare la cella di rosso (end game)
    - ALTRIMENTI la cella si colora di azzurro*/

    for (let i = 0; i < cells.length; i++) {

        const elementCell = cells[i];
        

        //console.log(elementCell);

        elementCell.addEventListener('click', function () {
            
            // elementCell.classList.toggle('skyblue')
            clicks++
            console.log(clicks);
            let numb = Number(elementCell.textContent)
            //console.log(numb);
            //console.log(mushroomList);
            //console.log(mushroomList.includes(numb));
            elementCell.classList.add('skyblue') 

            if (mushroomList.includes(numb)) {
                elementCell.classList.add('red')
                console.log('end game');
                elementCell.innerHTML = '🍄'
                
                container.insertAdjacentHTML('beforeend', '<h3>Mi dispiace hai perso</h3>')
                //elementCell.removeEventListener('click', getClassSky)
             } else if (clicks === numberCells - mushroomList.length) {
            //     console.log('you win');
                 container.insertAdjacentHTML('beforeend', '<h3>Congratulazioni hai vinto</h3>')
             } else {
                 elementCell.classList.add('skyblue') 
                 }
        })

        //elementCell.addEventListener('click', getClassBg)
        //elementCell.removeEventListener('click', getClassBg)


    }//container.insertAdjacentHTML('beforeend', `<div>hai provato ${clicks}</div>`)



    /*La partita termina 
    - Se il giocatore ha cliccato su tutte le celle esclusi i funghi e mostriamo il numero di volte che cliccato
    - Altrimenti se schiaccia un fungo*/



    //console.log(elementCell);

    //console.log(cells[0]);


})


/**
 * add number in array
 * @param {array} mushroomList 
 */
function addNumbMushroomList(mushroomList, numberCells) {


    let i = 0
    while (mushroomList.length < 16) {
        const randomNumber = getRandomNumber(1, numberCells)
        mushroomList.push(randomNumber)
        if (!mushroomList.includes(randomNumber)) {
            mushroomList.push(randomNumber)
        }
    }
}


/**
 * Add class at cell
 * @param {Array} cells 
 */
function addClassElementCell(cells) {
    //const cells = document.querySelectorAll('.box')

    for (let i = 0; i < cells.length; i++) {

        const elementCell = cells[i];
        //console.log(elementCell);

        elementCell.addEventListener('click', function () {
            elementCell.classList.add('skyblue')
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
    for (let i = 0; i < numberCells; i++) {

        const markup = `<div class="box">${i + 1}</div>`
        container.insertAdjacentHTML('beforeend', `${markup}`)

    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getClassBg(elementCell, mushroomList) {
    
}

function getClassSky() {
    elementCell.classList.add('skyblue')
}