//creo le variabili prendendo in input gli elementi in html
let elDistance = document.getElementById('distanzaInput')
let elAge = document.getElementById('etaInput')
let buttonSubmit = document.getElementById('btnSubmit')
let result = document.getElementById('resultPrice')

//creo un evento 
buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault()

    const distance = Number(elDistance.value);
    const age = Number(elAge.value);
    
    const ticketPriceKm = 0.21;
    const normalTicket = distance * ticketPriceKm;
    
    let discount = 0;
    if (age <= 18) {
        discount = normalTicket * 0.20;
    } else if (age >= 65){
        discount = normalTicket * 0.40;
    }
   
    let ticketDiscount = normalTicket - discount;
    console.log(ticketDiscount.toFixed(2))
    result.innerText = (`Il totale del tuo biglietto è: € ${ticketDiscount.toFixed(2)}`)
    
})