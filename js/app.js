// declared state of form 
let state = {
  price : getNumber(document.querySelectorAll('[name="price"]')[0].value),
  loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
  down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
  interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
  property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
  home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
  hoa: document.querySelectorAll('[name="hoa"]')[0].value,
}

// declared variables 
let totalLoan,
totalMonths,
monthlyInterest,
monthlyPrincipalInterest,
monthlyPropertyTaxes,
monthlyHomeInsurance,
monthlyHOA,
labels = ["Principal & Interest", "Property Tax", "Home Insurance", "HOA"],
backgroundColor = [
  "rgba(255, 0, 0, 1)",
  "rgba(0, 0, 205, 1)",
  "rgba(252, 247, 94, 1)",
  "rgba(0, 128, 0, 1)",
  "rgba(128, 0, 128, 1)",
  "rgba(255, 165, 0, 1)"
];
borderColor = [
  "rgba(255, 0, 0, 1)",
  "rgba(0, 0, 205, 1)",
  "rgba(252, 247, 94, 1)",
  "rgba(0, 128, 0, 1)",
  "rgba(128, 0, 128, 1)",
  "rgba(255, 165, 0, 1)"
];

// take away characters and returns numbers
function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""));
}

// initialize chart js instance
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      label: '# of Votes',
      data: [
        monthlyPrincipalInterest,
        monthlyPropertyTaxes, 
        monthlyHomeInsurance, 
        monthlyHOA
      ],
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    }]
  }
});
myChart.options.animations = false;

// add event listners to inputs
let i;
let inputTexts = document.getElementsByClassName("form-group__textInput");
for (let i = 0; i < inputTexts.length; i++) {
  inputTexts[i].addEventListener("input", () => console.log("input changed"));
}
console.log(inputTexts);