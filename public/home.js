const bookingForm = document.getElementById('booking-form');

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}


bookingForm.onsubmit = () => {
    const destinationInput = document.getElementById('destination-input').value.trim();
    const departureInput = document.getElementById('date-input').value.trim();
    const travelerInput = document.getElementById('num-travelers').value.trim();
    console.log(destinationInput + " " + departureInput + " " + travelerInput)


    
    clearErrors()

    let valid = true;

    if (destinationInput === "none"){
        document.getElementById('destination-error').style.display = 'block';
        valid = false;
    } 

    if (departureInput === ''){
        document.getElementById('departure-error').style.display = 'block';
        valid = false;
    } 

    if (travelerInput === '' || travelerInput <= 0){
        document.getElementById('traveler-error').style.display = 'block';
        valid = false;
    }

    return valid;
}