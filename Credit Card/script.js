function inputNumber(){

    const GETcardNumber = document.getElementById("credit_number");

    const PRINTcardNumber = document.getElementById("number");

    //PRINTcardNumber.innerHTML = GETcardNumber.value;
    
    console.log('inputNumber() fonctionnelle');

    let cardNumberInput = GETcardNumber.value;
    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card number is groups of 4
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(" ");
    }
    // If the formmattedCardNumber is different to what is shown, change the value
    if (cardNumberInput !== formattedCardNumber) {
      GETcardNumber.value = formattedCardNumber;
    }
    PRINTcardNumber.innerHTML = GETcardNumber.value;
    if (GETcardNumber.value === "") {
      PRINTcardNumber.innerHTML = GETcardNumber.placeholder;
    }
    
}

function onlyNumberKey(evt) {
         
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
function checkname() {
    var name = document.getElementById('credit_name').value;

    var name_box = document.getElementById('credit_name');

    var error_name = document.getElementById('credit_name_error');

    if (name == "") {
        name_box.style.borderColor = "red";
        error_name.style.opacity = "1";
    }
    // else if (name == "AAA") {
    //         name_box.style.borderColor = "green";
    //         error_name.style.opacity = "0";
    // }
    
    else {
        name_box.style.borderColor = "rgb(121, 121, 121)";
        error_name.style.opacity = "0";
    };
}


function checkNumber() {
    var number_spaces = document.getElementById('credit_number').value;
    var number = String(number_spaces.replace(/\s/g, ''));

    var number_box = document.getElementById('credit_number');

    var error_number = document.getElementById('credit_number_error');


    if (number == "") {
        number_box.style.borderColor = "red";
        error_number.innerHTML="Can't be blank";
        error_number.style.opacity = "1";
    }

    else if (number.length == 16) {
            number_box.style.borderColor = "green";
            error_number.style.opacity = "0";
    }
    
    else if (number.length > 16) {
        number_box.style.borderColor = "red";
        error_number.innerHTML="Enter 16 characters!";
        error_number.style.opacity = "1";
    }

    else if (number.length < 16) {
        number_box.style.borderColor = "red";
        error_number.innerHTML="Enter 16 characters!";
        error_number.style.opacity = "1";
    }
    
    else {
        number_box.style.borderColor = "rgb(121, 121, 121)";
        error_number.style.opacity = "0";
    };
}
function inputDate() {
    var EXP_Month = document.getElementById('credit_month').value;

    var EXP_Year = document.getElementById('credit_year').value;

    if (EXP_Month == "") {
        EXP_Month = "00";
    }
    if (EXP_Month > 12) {
        EXP_Month = 12;
    }

    if (EXP_Year == "") {
        EXP_Year = "00";
    }

    formatted_Month = EXP_Month.substring(0, 2);
    formatted_Year = EXP_Year.substring(0, 2);

    if (formatted_Month <= 9) {
        formatted_Month = "0" + formatted_Month;
    }
    if (formatted_Month == "000") {
        formatted_Month = "00";
    }

    document.getElementById('date').innerHTML=formatted_Month+"/"+formatted_Year;




    
}
function checkdate() {

    const GETexpiration_month = document.getElementById("credit_month");

    const GETexpiration_year = document.getElementById("credit_year");

    var year = "";
    var month = "";


    
    let formattedMM = GETexpiration_month.value;
    let onlyNumber = formattedMM.replace(/[^\d]/g, "");
    onlyNumber = onlyNumber.substring(0, 2);
    GETexpiration_month.value = onlyNumber;
    if (GETexpiration_month.value === "") {
      month = "00";
    } else {
      month = GETexpiration_month.value;
    }


    let formattedYear = GETexpiration_year.value;
    let formattedYearOnlyNumber = formattedYear.replace(/[^\d]/g, "");
    formattedYearOnlyNumber = formattedYearOnlyNumber.substring(0, 2);
    GETexpiration_year.value = formattedYearOnlyNumber;
    if (GETexpiration_year.value === "") {
      year = "00";
    } else {
      year = GETexpiration_year.value;
    }

    document.getElementById('date').innerHTML=month+"/"+year;

}
