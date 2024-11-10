// dob validation js code
function validateDob(){
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be in the future."
        dob.value="";
        return false;
    } else if(date < new Date(maxDate)){
        document.getElementById("dob-error").innerHTML =
        "Date cannot be more than 120 years ago."
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
        
}
// ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // regex for ssn pattern thing
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid Social Security Number.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }

}

function validateAddress1() {
    var ad1 = document.getElementByID("address1").value;
    console.log(ad1);
    console.log(ad1.legth);

    if (ad1.length < 2) {
         document.getElementById("address1-error").innerHTML = 
        "Please enter something on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}