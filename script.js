let sum = 0;

function inputValue(getValueId) {

    const getValue = parseFloat(document.getElementById(getValueId).innerText);

    sum += getValue;

    if(sum >= 200)
    {
        document.getElementById('apply').disabled = false;
    }

    if(sum > 0)
    {
        document.getElementById('makePurchase').disabled = false;
    }

    document.getElementById('totalPrice').innerText = sum.toFixed(2);
}

let count = 0;
function cardNameText(getCardName) {
    count++;
    const li = document.createElement('li');
    li.classList.add('newClass');
    li.innerText = count + '. ' + document.getElementById(getCardName).innerText;
    document.getElementById('cardNameShow').appendChild(li);
}

function cardFirstSet() {
    inputValue('first-price');
    cardNameText('first-card');
}
function cardSecondSet() {
    inputValue('second-price');
    cardNameText('second-card');
}
function cardThirdSet() {
    inputValue('third-price');
    cardNameText('third-card');
}
function cardFourSet() {
    inputValue('four-price');
    cardNameText('four-card');
}
function cardFiveSet() {
    inputValue('five-price');
    cardNameText('five-card');
}
function cardSixSet() {
    inputValue('six-price');
    cardNameText('six-card');
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
    sum = 0;
    count = 0;

}



