//console.log('hello world');

const form = document.querySelector('form') 
//console.log(button);

const container = document.querySelector('.container')

//- Al click del bottone genero una griglia quadrata con 10 caselle per ognuna delle 10 righe, ogni cella sarà numerata progressivamente
form.addEventListener('submit', function(e){

    e.preventDefault
    
    // console.log(`${markup}`);
    for (let i = 0; i < 100 ; i++) {

        const markup = `<div class="box">${i+1}</div>`
        container.insertAdjacentHTML('beforeend', `${markup}`)
        
    }

    //- Al click della cella quest'ultima cambiera colore
    
})




