//inputs

const rawBill = document.getElementById('bill-input');
const peopleNumber =document.getElementById('people-input');

//tips

const tip5 = document.getElementById('tipA');
const tip10 = document.getElementById('tipB');
const tip15 = document.getElementById('tipC');
const tip25 = document.getElementById('tipD');
const tip50 = document.getElementById('tipE');
const tipC = document.getElementById('tipF');

//displayer

const tipCostDisplayer = document.getElementById('tip-cost');
const totalCostDisplayer = document.getElementById('total-cost');

//reset

const reset = document.getElementById('reset');

//////////////////////

let tipValue = 0;

tip5.addEventListener('click', () => {
    tipValue = 5;
})

tip10.addEventListener('click', () => {
    tipValue = 10;
})

tip15.addEventListener('click', () => {
    tipValue = 15;
})

tip25.addEventListener('click', () => {
    tipValue = 25;
})

tip50.addEventListener('click', () => {
    tipValue = 50;
    console.log(tipAmount);

})

let tipAmount = rawBill.value * tipValue ;

