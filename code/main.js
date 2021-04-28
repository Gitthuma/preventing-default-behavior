/*Reference form element and store it in a variable*/

const form = document.querySelector('form');

/*Reference form inputs and store them in a variable*/

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

/*Reference paragraph element and store it in a variable*/

const para = document.querySelector('p');

/*Implement a simple check inside an onsubmit event handler (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. If they are, we call the preventDefault() function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong*/

form.onsubmit = function(e){
    if(fname.value === '' || lname.value === '') {
        e.preventDefault();
        para.textContent = 'You need to fill in both names!';
    }
}