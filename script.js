const app = document.getElementById('app');

app.addEventListener('submit', submitApp);

function submitApp (event) {
    alert('Thank you for submitting your application! You will hear from us very soon. :)');
};

let totalCost = 450;

const cost = document.getElementById('cost');

cost.addEventListener('submit', function (event){
    alert(`Thank you for your submission! Your 'ruff' estimate is $${totalCost}.`);
});