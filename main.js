/*
Validation requirements

name:
it letters not numbers
over 2 characters
not symbols

lastName:
it letters not numbers
at least 2 characters
not symbols

phone: 
Only numbers
(danish) 8 numbers

email:
text to begin with
a dot after @ symbol
text between @ and dot
and som text after the dot

password:
lower and uppercase letters
at least one number
at least 8 characters
a symbol

repeatPassword:
should be exactly the same as password

Adress:
at least one number
at least 3 characters

zipCode:
4 numbers (danish)
Maybe we could validate with a array of zipcCodes.
*/
// definer formen så man kan hente alle dataerne
let form = document.querySelector("form");
// definer alle regex så de kan kaldes
let regexName = /^[a-zæøåA-ZÆØÅ\s\-]{2,}$/;
let regexPhone = /^[\d]{8,8}$/;
let regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\S])[a-zA-Z0-9\S]{8,}$/;

// valider fornavn
if(regexName.test(form.name.value)){
    console.log("only contains letters spaces and or dashes")
}else{
    console.log("must not contain numbers or symbols")
}

// valider efternavn

if(regexName.test(form.lastName.value)){
    console.log("only contains letters spaces and or dashes")
}else{
    console.log("must not contain numbers or symbols")
}

// valider telefon nr
if(regexPhone.test(form.phone.value)){
    console.log("only contains numbers and is exactly 8 char long")
}else{
    console.log("must not contain letters or symbols and must be exactly 8 char long")
}

// valider email
if(regexMail.test(form.mail.value)){
    console.log("has letters, underline, dashes and/or numbers in front of a @, letters between @ and a dot, as well as 2-3 char")
}else{
    console.log("must not contain letters or symbols and must be exactly 8 char long")
}

// valider gentagelse af password
if(form.password.value == form.repeatPassword.value){
    console.log("Passwords match !!!!")
}else{
    console.log("Passwords do not match")
}