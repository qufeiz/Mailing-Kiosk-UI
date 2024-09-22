// screens
const screens = document.querySelectorAll('.screen');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');
const screen5 = document.getElementById('screen5');
const screen6 = document.getElementById('screen6');
const screen7= document.getElementById('screen7');
const screen8= document.getElementById('screen8');


// buttons
const confirmServiceBtn = document.getElementById('confirmService');
const confirmPackageBtn = document.getElementById('confirmPackage');
const confirmMailingBtn = document.getElementById('confirmMailing');
const confirmAddressBtn = document.getElementById('confirmAddress');
const confirmPaymentBtn = document.getElementById('confirmPayment');
const confirmReviewBtn = document.getElementById('confirmReview');
const editInfoBtn = document.getElementById('editInfo');

// Back button references
const backToServiceBtn = document.getElementById('backToService');
const backToPackageBtn = document.getElementById('backToPackage');
const backToMailingBtn = document.getElementById('backToMailing');
const backToPayBtn = document.getElementById('backToPay');

// elements on the Review screen
const reviewService = document.getElementById('reviewService');
const reviewMailing = document.getElementById('reviewMailing');
const reviewAddress = document.getElementById('reviewAddress');
const reviewZip = document.getElementById('reviewZip');

// user input
let selectedService = '';
let selectedMailingOption = '';
let enteredAddress = '';
let enteredZip = '';

function showScreen(screen) {
    screens.forEach(s => {
        s.style.opacity = '0'; 
        setTimeout(() => {
            s.style.display = 'none'; 
        }, 500); 
    });

    setTimeout(() => {
        screen.style.display = 'block'; 
        screen.style.opacity = '1'; 
    }, 500); 
}

confirmServiceBtn.addEventListener('click', function() {
    // Check if either "Package" or "Letter" is selected
    const serviceSelected = document.querySelector('input[name="service"]:checked');
    if (!serviceSelected) {
        alert("Please select a service (Package or Letter) before proceeding.");
        return;  
    }
    selectedService = serviceSelected.value; 
    showScreen(screen2); 
});

confirmPackageBtn.addEventListener('click', function() {
    showScreen(screen3);  
});

confirmMailingBtn.addEventListener('click', function() {
    // Check if a mailing option is selected
    const mailingSelected = document.querySelector('input[name="mailing"]:checked');
    if (!mailingSelected) {
        alert("Please select a mailing option before proceeding.");
        return; 
    }
    selectedMailingOption = mailingSelected.value;
    showScreen(screen4);  
});

confirmAddressBtn.addEventListener('click', function() {
    // Get the address and zip code values
    enteredAddress = document.getElementById('address').value.trim();
    enteredZip = document.getElementById('zip').value.trim();
    
    if (enteredAddress === "" || enteredZip === "") {
        alert("Please enter both an address and a zip code.");
        return;  // Don't go to the next screen if inputs are invalid
    }
    
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(enteredZip)) {
        alert("Please enter a valid 5-digit zip code.");
        return;
    }
    // Populate the Review screen with the user input
    reviewService.textContent = selectedService;
    reviewMailing.textContent = selectedMailingOption;
    reviewAddress.textContent = enteredAddress;
    reviewZip.textContent = enteredZip;
    showScreen(screen5); 
});

confirmReviewBtn.addEventListener('click', function() {
    showScreen(screen6);  
});

editInfoBtn.addEventListener('click', function() {
    showScreen(screen4); 
});

confirmPaymentBtn.addEventListener('click', function() {
   
    const cardNumber = document.getElementById('card').value.trim();

    const cardRegex = /^\d{12,19}$/;  // Card numbers usually range from 12 to 19 digits
    if (!cardRegex.test(cardNumber)) {
        alert("Please enter a valid credit card number (12 to 19 digits).");
        return;  
    }

    showScreen(screen7);  


    setTimeout(function() {
        showScreen(screen8); 
    }, 3000);   
});

// Event listeners for the "Back" buttons
backToServiceBtn.addEventListener('click', function() {
    showScreen(screen1);  
});

backToPackageBtn.addEventListener('click', function() {
    showScreen(screen2);  
});

backToMailingBtn.addEventListener('click', function() {
    showScreen(screen3);  
});

backToPayBtn.addEventListener('click', function() {
    showScreen(screen1);  
});
