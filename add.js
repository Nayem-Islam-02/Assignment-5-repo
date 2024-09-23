


// function btnInput() {
    // const inputValue = parseFloat(document.getElementById('donateInput').value);

    // if (isNaN(inputValue)) {
        // alert('Please enter a valid number.');
    // } else if (inputValue < 0) {
        // alert('You entered a negative value!');
    // } else {
        // alert('The value is non-negative.');
    // }
// }
// __________
// conceptual ar moto

// const donateBtnOne = document.getElementById("donate-click-one");
// donateBtnOne.addEventListener("click", function(){
    // const amountMoneyOne = parseFloat(document.getElementById("donateInputOne").value);
    
    

    
// })


// const donateBtnTwo = document.getElementById("donate-click-two");
// donateBtnTwo.addEventListener("click", function(){
    // const amountMoneyTwo = parseFloat(document.getElementById("donateInputTwo").value);

    
// })


// const donateBtnThree = document.getElementById("donate-click-three");
// donateBtnThree.addEventListener("click", function(){
    // const amountMoneyThree = parseFloat(document.getElementById("donateInputThree").value);

    

// })


// --------------
//    for one
document.getElementById('donate-click-one').addEventListener('click', function(event){
    event.preventDefault();
    let donateInputOne = parseFloat(document.getElementById('donateInputOne').value);

    if(isNaN(donateInputOne)){
        alert('please entered the valid Number');
    }

    else if(donateInputOne < 0){
        alert('Negative Number are not allowed')
    }

    else{
        alert('Number is entered')
    }
    let coinNumber = parseFloat(document.getElementById('first-donate').innerText);
    let totalDonate = coinNumber + donateInputOne;
    document.getElementById('first-donate').innerText = totalDonate;


    let myCredit = parseFloat(document.getElementById('my-amount').innerText);
    let creditDonate = myCredit - donateInputOne;
    document.getElementById('my-amount').innerText = creditDonate;
})


// for two

document.getElementById('donate-click-two').addEventListener('click', function(event){
    event.preventDefault();
    let donateInputTwo = parseFloat(document.getElementById('donateInputTwo').value);

    if(isNaN(donateInputTwo)){
        alert('please entered the valid Number');
    }

    else if(donateInputTwo < 0){
        alert('Negative Number are not allowed')
    }

    else{
        alert('Number is entered')
    }
    let coinNumber = parseFloat(document.getElementById('second-donate').innerText);
    let totalDonate = coinNumber + donateInputTwo;
    document.getElementById('second-donate').innerText = totalDonate;


    let myCredit = parseFloat(document.getElementById('my-amount').innerText);
    let creditDonate = myCredit - donateInputTwo;
    document.getElementById('my-amount').innerText = creditDonate;
})

// for three

document.getElementById('donate-click-three').addEventListener('click', function(event){
    event.preventDefault();
    let donateInputThree = parseFloat(document.getElementById('donateInputThree').value);

    if(isNaN(donateInputThree)){
        alert('please entered the valid Number');
    }

    else if(donateInputThree < 0){
        alert('Negative Number are not allowed')
    }

    else{
        alert('Number is entered')
    }
    let coinNumber = parseFloat(document.getElementById('third-donate').innerText);
    let totalDonate = coinNumber + donateInputThree;
    document.getElementById('third-donate').innerText = totalDonate;


    let myCredit = parseFloat(document.getElementById('my-amount').innerText);
    let creditDonate = myCredit - donateInputThree;
    document.getElementById('my-amount').innerText = creditDonate;
})

