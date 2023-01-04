const app = document.getElementById('app');

app.addEventListener('submit', submitApp);

function submitApp (event) {
    alert('Thank you for submitting your application! You will hear from us very soon. :)');
};

const cost = document.getElementById('cost');

cost.addEventListener('submit', function (event){
    event.preventDefault();

    const adventurePrice = document.querySelector('input[name="adventure"]:checked').value;

    const palPrice = document.querySelector('input[name="pal"]:checked').value;

    const timePrice = document.querySelector('input[name="time"]:checked').value;

    let totalCost = parseInt(adventurePrice) + parseInt(palPrice) + parseInt(timePrice);

    alert(`Thank you for your submission! Your 'ruff' estimate is $${totalCost}.`);
});
