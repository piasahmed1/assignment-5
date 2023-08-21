let total = 0;

function callValue(piasAhmed) {

    const getValue = parseFloat(document.getElementById(piasAhmed).innerText);

    total += getValue;

    if(total >= 200)
    {
        document.getElementById('apply-button').disabled = false;
    }

    if(total > 0)
    {
        document.getElementById('makePurchase').disabled = false;
    }

    document.getElementById('totalPrice').innerText = total.toFixed(2);
}


function cardFirstSet() {
    callValue('first-price');
    cardNameText('first-card');
}
function cardSecondSet() {
    callValue('second-price');
    cardNameText('second-card');
}
function cardThirdSet() {
    callValue('third-price');
    cardNameText('third-card');
}
function cardFourSet() {
    callValue('four-price');
    cardNameText('four-card');
}
function cardFiveSet() {
    callValue('five-price');
    cardNameText('five-card');
}
function cardSixSet() {
    callValue('six-price');
    cardNameText('six-card');
}


let count = 0;
function cardNameText(getCardName) {
    count++;
    const li = document.createElement('li');
    li.classList.add('newClass');
    li.innerText = count + '. ' + document.getElementById(getCardName).innerText;
    document.getElementById('cardNameShow').appendChild(li);
}


function applyBtn() {
    const coupon = document.getElementById('coupon');

    if(coupon.value == 'SELL200')
    {
        let totalprice =  parseFloat(document.getElementById('totalPrice').innerText);
        let discount = totalprice*0.2
        
        document.getElementById('discount').innerText = discount.toFixed(2);
        document.getElementById('total').innerText = (totalprice.toFixed(2) - discount.toFixed(2)).toFixed(2);
    }

    coupon.value = '';

}

function goHome()
{
    const deleteButtons = document.querySelectorAll('.newClass');

    for(const deleteButton of deleteButtons){
        deleteButton.remove();
    }

    document.getElementById('totalPrice').innerText = '00.00';
    document.getElementById('discount').innerText = '00.00';
    document.getElementById('total').innerText = '00.00';
    total = 0;
    count = 0;

}



