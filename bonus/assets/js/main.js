//console.log('hello world');

const form = document.querySelector('form')
//console.log(button);

const container = document.querySelector('.container')

//- Al click del bottone genero una griglia quadrata con 10 caselle per ognuna delle 10 righe, ogni cella sarà numerata progressivamente
form.addEventListener('submit', function (e) {

    e.preventDefault()

    container.innerHTML = ''

    const select = document.getElementById('difficoult').value
    console.log(select);

    if (select === 'difficoult 1') {
        // console.log(`${markup}`);
        for (let i = 0; i < 100; i++) {

            const markup = `<div class="box">${i + 1}</div>`
            container.insertAdjacentHTML('beforeend', `${markup}`)

        }
        //- Al click della cella quest'ultima cambiera colore
        const cells = document.querySelectorAll('.box')



        for (let i = 0; i < cells.length; i++) {

            const elementCell = cells[i];
            //console.log(elementCell);

            elementCell.addEventListener('click', function () {
                elementCell.classList.toggle('skyblue')
                let numb = elementCell.textContent
                console.log(numb)
            })

        }


    } else if (select === 'difficoult 2') {


        for (let i = 0; i < 81; i++) {

            const markup = `<div class="box-xl">${i + 1}</div>`
            container.insertAdjacentHTML('beforeend', `${markup}`)

        }
        //- Al click della cella quest'ultima cambiera colore
        const cells = document.querySelectorAll('.box-xl')



        for (let i = 0; i < cells.length; i++) {

            const elementCell = cells[i];

            elementCell.addEventListener('click', function () {
                elementCell.classList.toggle('skyblue')
                let numb = elementCell.textContent
                console.log(numb)
            })

        }
    } else if (select === 'difficoult 3') {
        for (let i = 0; i < 49; i++) {

            const markup = `<div class="box-xxl">${i + 1}</div>`
            container.insertAdjacentHTML('beforeend', `${markup}`)

        }
        //- Al click della cella quest'ultima cambiera colore
        const cells = document.querySelectorAll('.box-xxl')



        for (let i = 0; i < cells.length; i++) {

            const elementCell = cells[i];

           

            elementCell.addEventListener('click', function () {
                elementCell.classList.toggle('skyblue')
                let numb = elementCell.textContent
                console.log(numb)
            })

        }
    }

})




