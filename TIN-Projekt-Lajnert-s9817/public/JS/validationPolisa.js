function validateFormPolisa() {
    

    const errorsSummary = document.getElementById('errorsSummary');

    const numerPolisyInput = document.getElementById('numerPolisy');
    const errorNumerPolisy = document.getElementById('errorNumerPolisy');

    const dataOdInput = document.getElementById('ochronaOd');
    const errorDataOd = document.getElementById('errorDataOd');
    const dataDoInput = document.getElementById('ochronaDo');
    const errorDataDo = document.getElementById('errorDataDo');

    const tuInput = document.getElementById('tu');
    const errorTU = document.getElementById('errorTU');

    resetErrors([numerPolisyInput , dataOdInput, dataDoInput, tuInput], 
        [errorNumerPolisy, errorDataOd, errorDataDo, errorTU], errorsSummary);

        let valid = true;

    if(!checkRequired(numerPolisyInput.value)){
        valid = false;
        numerPolisyInput.classList.add("error-input");
        errorNumerPolisy.innerText = "Pole jest wymagane!";
    }else if(!checkTextLengthRange(numerPolisyInput.value, 5, 25)){
        valid = false;
        numerPolisyInput.classList.add("error-input");
        errorNumerPolisy.innerText = "Nieprawidłowy numer polisy!";
    }

    if(!checkRequired(dataOdInput.value)){
        valid = false;
        dataOdInput.classList.add("error-input");
        errorDataOd.innerText = "Pole jest wymagane!";
    }
    if(!checkRequired(dataDoInput.value)){
        valid = false;
        dataDoInput.classList.add("error-input");
        errorDataDo.innerText = "Pole jest wymagane!";
    }

    if(!valid){
        errorsSummary.innerText = "Formularz zawiera błędy!";   
    } 
    return valid;
}