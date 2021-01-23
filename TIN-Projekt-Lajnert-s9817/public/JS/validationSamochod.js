function validateFormSamochod() {
    

    const vinInput = document.getElementById('vin');
    const errorVIN = document.getElementById('errorVIN');
    const errorsSummary = document.getElementById('errorsSummary');

    const modelInput = document.getElementById('model');
    const errorModel = document.getElementById('errorModel');

    const rokInput = document.getElementById('rokProdukcji');
    const errorRok = document.getElementById('errorRok');

    const wartoscInput = document.getElementById('wartosc');
    const errorWartosc = document.getElementById('errorWartosc');

    resetErrors([vinInput, modelInput, rokInput, wartoscInput],
         [errorVIN, errorModel, errorRok, errorWartosc], errorsSummary);

         let valid = true;

    if(!checkRequired(vinInput.value)){
        valid = false;
        vinInput.classList.add("error-input");
        errorVIN.innerText = "Pole jest wymagane!";
    }else if(!checkTextLengthRange(vinInput.value, 17, 17)){
        valid = false;
        vinInput.classList.add("error-input");
        errorVIN.innerText = "VIN musi posiadać 17 znaków!";
    }
    if(!checkRequired(modelInput.value)){
        valid = false;
        modelInput.classList.add("error-input");
        errorModel.innerText = "Pole jest wymagane!";
    }
    if(!checkRequired(rokInput.value)){
        valid = false;
        rokInput.classList.add("error-input");
        errorRok.innerText = "Pole jest wymagane!";
    }else if(!checkTextLengthRange(rokInput.value, 4, 4)){
        valid = false;
        rokInput.classList.add("error-input");
        errorRok.innerText = "Błędny rok produkcji!";
    }
    if(!checkRequired(wartoscInput.value)){
        valid = false;
        wartoscInput.classList.add("error-input");
        errorWartosc.innerText = "Pole jest wymagane!";
    }
    if(!valid){
        errorsSummary.innerText = "Formularz zawiera błędy!";   
    } 
    return valid;
}