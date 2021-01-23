function validateForm() {
    //Ustaw flagę, która będzie zmieniana w zależności od poprawności pól formularza (false - formularz niepoprawny):
    
    //Pobierz poszczególne elementy pól na odpowiednie zmienne:
    const nazwaKlientaInput = document.getElementById('nazwaKlienta');
    const emailInput = document.getElementById('email');
    

    //Pobierz poszczególne elementy komunikatów błędów na odpowiednie zmienne:
    const errorNazwaKlienta = document.getElementById('errorNazwaKlienta');
    const errorEmail = document.getElementById('errorEmail');
    const errorsSummary = document.getElementById('errorsSummary');
    
    //Wyczyść poprzednie komunikaty błędów formularza wywołując funkcję resetErrors:
    resetErrors([nazwaKlientaInput, emailInput], [errorNazwaKlienta, errorEmail], errorsSummary);

    let valid = true;
    
    if(!checkRequired(nazwaKlientaInput.value)){
        valid = false;
        nazwaKlientaInput.classList.add("error-input");
        errorNazwaKlienta.innerText = "Pole jest wymagane!";
    } else if(!checkTextLengthRange(nazwaKlientaInput.value, 2, 60)){
        valid = false;
        nazwaKlientaInput.classList.add("error-input");
        errorNazwaKlienta.innerText = "Pole powinno zawierać od 2 do 60 znaków!";
    }

    if (!valid) {
		errorsSummary.innerText = "Formularz zawiera błędy!";
	}

    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane!";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków!";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email!";
    }

    return valid;
}

