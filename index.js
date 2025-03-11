// Inputs
const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");

// Tips
const tip5 = document.getElementById("tipA");
const tip10 = document.getElementById("tipB");
const tip15 = document.getElementById("tipC");
const tip25 = document.getElementById("tipD");
const tip50 = document.getElementById("tipE");
const tipCustom = document.getElementById("tipF");

// Displayer
const tipCostDisplayer = document.getElementById("tip-cost");
const totalCostDisplayer = document.getElementById("total-cost");

// Reset
const reset = document.getElementById("reset");

////////////

let tipValue = 0;

function calculateTip() {
	let rawBill = parseInt(billInput.value) || 0;
	let peopleNumber = parseInt(peopleInput.value) || 1;

	let tipAmount = (rawBill * tipValue) / 100;
	let totalAmount = rawBill + tipAmount;

	console.log(tipAmount);

	tipCostDisplayer.textContent = (tipAmount / peopleNumber).toFixed(2);
	totalCostDisplayer.textContent = (totalAmount / peopleNumber).toFixed(2);
}

tip5.addEventListener("click", () => {
	tipValue = 5;
	calculateTip();
});
tip10.addEventListener("click", () => {
	tipValue = 10;
	calculateTip();
});
tip15.addEventListener("click", () => {
	tipValue = 15;
	calculateTip();
});
tip25.addEventListener("click", () => {
	tipValue = 25;
	calculateTip();
});
tip50.addEventListener("click", () => {
	tipValue = 50;
	calculateTip();
});
tipCustom.addEventListener("input", () => {
	tipValue = Number(tipCustom.value);

	if (tipCustom.value < 0) {
		tipValue = Math.abs(tipCustom.value);
	}
	calculateTip();
});
billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

reset.addEventListener("click", () => {
	billInput.value = "";
	peopleInput.value = "";
	tipValue = 0;
	tipCostDisplayer.textContent = "0.00";
	totalCostDisplayer.textContent = "0.00";
});
