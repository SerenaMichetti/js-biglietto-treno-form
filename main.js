let buttonSubmit = document.getElementById('btnSubmit')
let buttontReset = document.getElementById('btnReset')

/**
 *  Calcola il prezzo del biglietto 
 * @param {*} distance distanza da percorrere
 * @param {*} age età passeggero
 * @returns prezzo del biglietto
 */
function calculateTicketDiscount(distance, age) {

    // - definisco il prezzo al km
    const ticketPriceKm = 0.21

    // - calcolo il prezzo del normal ticket
    const normalTicket = distance * ticketPriceKm

    // - calcolo l'eventuale sconto
    let discount = 0
    if (age <= 18) {
        discount = normalTicket * 0.20
    } else if (age >= 65) {
        discount = normalTicket * 0.40
    }

    // - calcolo il prezzo del biglietto meno l'eventuale sconto
    let ticketDiscount = normalTicket - discount

    // - lo mostro in console
    console.log(ticketDiscount.toFixed(2))

    // - lo ritorno
    return ticketDiscount
}


//creo un evento sul Click del button Invia Dati
buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault()

    // creo le variabili prendendo in input gli elementi in html
    let elDistance = document.getElementById('distanzaInput')
    let elAge = document.getElementById('etaInput')
    let elNameSurnameInput = document.getElementById('nameSurnameInput')
    
    // variabili di output del biglietto creato
    let elBiglietto = document.getElementById('ticket')
    let elTicketPrice = document.getElementById('ticketPrice')
    let elNameSurnameOutput = document.getElementById('nameSurnameOutput')

    // calcola il biglietto scontato
    const distance = Number(elDistance.value)
    const age = Number(elAge.value)
    let ticketDiscount = calculateTicketDiscount(distance, age)

    // mostro dati del biglietto 
    elBiglietto.style.display = 'block';
    elTicketPrice.innerText = ticketDiscount.toFixed(2);
    elNameSurnameOutput.innerText = elNameSurnameInput.value
})

//creo un evento sul Click del button Reset
buttontReset.addEventListener('click', function (event) {
    
    event.preventDefault()

    // nascondo il biglietto 
    let elBiglietto = document.getElementById('ticket')
    elBiglietto.style.display = 'none';

})
