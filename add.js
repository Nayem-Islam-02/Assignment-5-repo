

// --------------
// blog link

const blog = document.getElementById("blog");

blog.addEventListener("click", function(){
    window.location.href = "blog.html";
  });
  


// modal
const modal = document.getElementById("modal");

//    for one
document.getElementById('donate-click-one').addEventListener('click', function(event){
    event.preventDefault();
    let donateInputOne = parseFloat(document.getElementById('donateInputOne').value);

    if(isNaN(donateInputOne)){
        alert('please entered the valid Number');
        return
    }

    else if(donateInputOne < 0){
        alert('Negative Number are not allowed')
        return
    }
    else{
        modal.showModal();

    }

    
    let coinNumber = parseFloat(document.getElementById('first-donate').innerText);
    let totalDonate = coinNumber + donateInputOne;
    document.getElementById('first-donate').innerText = totalDonate;


    let myCredit = parseFloat(document.getElementById('my-amount').innerText);
    let creditDonate = myCredit - donateInputOne;
    document.getElementById('my-amount').innerText = creditDonate;

    // history part for one

    const historyItem = document.createElement("div");

    const nowTime = new Date();
    const donationDate = nowTime.toString();

historyItem.className ="bg-white rounded-md border border-indigo-500";

historyItem.innerHTML= `
<p class="font-bold px-3 py-2"> ${donateInputOne} Taka is Donate for Flood at Noakhali, Bangladesh</p>

<p class="font-bold px-3 py-2"> Date: ${donationDate} </p>

`;

const historyContainer = document.getElementById("history-list");

historyContainer.insertBefore(historyItem, historyContainer.firstChild)


    
})


// for two

document.getElementById('donate-click-two').addEventListener('click', function(event){
    event.preventDefault();
    let donateInputTwo = parseFloat(document.getElementById('donateInputTwo').value);

    if(isNaN(donateInputTwo)){
        alert('please entered the valid Number');
        return
    }

    else if(donateInputTwo < 0){
        alert('Negative Number are not allowed');
        return
    }

    else{
        modal.showModal();

    }

    let coinNumber = parseFloat(document.getElementById('second-donate').innerText);
    let totalDonate = coinNumber + donateInputTwo;
    document.getElementById('second-donate').innerText = totalDonate;


    let myCredit = parseFloat(document.getElementById('my-amount').innerText);
    let creditDonate = myCredit - donateInputTwo;
    document.getElementById('my-amount').innerText = creditDonate;

    // history for  two

    const historyItem = document.createElement("div");

    const nowTime = new Date();
    const donationDate = nowTime.toString();

historyItem.className ="bg-white rounded-md border border-indigo-500";

historyItem.innerHTML= `
<p class="font-bold px-3 py-2"> ${donateInputTwo}  Taka is Donated for Flood Relief in Feni,Bangladesh</p>

<p class="font-bold px-3 py-2"> Date: ${donationDate} </p>
`;

const historyContainer = document.getElementById("history-list");

historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// for three

document.getElementById('donate-click-three').addEventListener('click', function(event){
    event.preventDefault();
    let donateInputThree = parseFloat(document.getElementById('donateInputThree').value);

    if(isNaN(donateInputThree)){
        alert('please entered the valid Number');
        return
    }

    else if(donateInputThree < 0){
        alert('Negative Number are not allowed');
        return
    }

    else{
        modal.showModal();

    }

    let coinNumber = parseFloat(document.getElementById('third-donate').innerText);
    let totalDonate = coinNumber + donateInputThree;
    document.getElementById('third-donate').innerText = totalDonate;


    let myCredit = parseFloat(document.getElementById('my-amount').innerText);
    let creditDonate = myCredit - donateInputThree;
    document.getElementById('my-amount').innerText = creditDonate;

    // history for three

    const historyItem = document.createElement("div");

    const nowTime = new Date();
    const donationDate = nowTime.toString();

historyItem.className ="bg-white rounded-md border border-indigo-500";

historyItem.innerHTML= `
<p class="font-bold px-3 py-2"> ${donateInputThree}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>

<p class="font-bold px-3 py-2"> Date: ${donationDate} </p>
`;

const historyContainer = document.getElementById("history-list");

historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// history button function

const historyTab = document.getElementById('history');
const donationTab = document.getElementById("donation");
historyTab.addEventListener('click', function(){

    historyTab.classList.add( 'bg-yellow-200');


    donationTab.classList.remove('bg-yellow-200');

    document.getElementById('cards-donation').classList.add('hidden');

    document.getElementById("donationHistory").classList.remove("hidden");
})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-yellow-200')

    historyTab.classList.remove('bg-yellow-200');

    document.getElementById('cards-donation').classList.remove('hidden');

    document.getElementById("donationHistory").classList.add("hidden");

})





