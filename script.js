const app = document.getElementById('app');

app.addEventListener('submit', submitApp);

function submitApp (event) {
    alert('Thank you for submitting your application! You will hear from us very soon. :)');
};

const inside = document.getElementById('insideActivity');
const outside = document.getElementById('outsideActivity');
const mischievous = document.getElementById('mischievous');
const el = document.getElementById('el');
const jos = document.getElementById('jos');
const both = document.getElementById('both');
const four = document.getElementById('four');
const six = document.getElementById('six');
const eight = document.getElementById('eight');

let additives = [inside, outside, mischievous, el, jos, both, four, six, eight];

function runCost (additives) {
    for (let i = 0; i < additives.length; i++) {
        let additive = additives[i];  

    if (additive === inside) {
        return 50;
    } else if (additive === outside) {
        return 60;
    } else if (additive === mischievous) {
        return 100;
    } else if (additive === el) {
        return 40;
    } else if (additive === jos) {
        return 50;
    } else if (additive === both) {
        return 100;
    } else if (additive === four) {
        return 100;
    } else if (additive === six) {
        return 150;
    } else if (additive === eight) {
        return 250;
    };

    let firstPick = [inside, outside, both];
    let secondPick = [el, jos, both];
    let thirdPick = [four, six, eight];
    let totalCost = firstPick + secondPick + thirdPick;

    return totalCost
};
};

const quote = document.getElementById('clicky');

quote.addEventListener('onClick', costSummary);

function costSummary (event) {
    alert('thanks!');
};