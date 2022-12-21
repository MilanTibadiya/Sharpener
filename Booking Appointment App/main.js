

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');


// Listen for form submit ok this is edit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else { 
       // store user name in local storage   &&&&& EVERY TIME KEY,VALUE PAIR IN KEY DIIFT SO ITS STORE IN IT DIGFF
   localStorage.setItem(nameInput.value,emailInput.value );

    // Add text node with input values
   console.log(`${nameInput.value}: ${emailInput.value}`);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
