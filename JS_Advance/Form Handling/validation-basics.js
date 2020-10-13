let un, up, ue, unum, check;
un = up = ue = unum = false;
// All field are valid or not;
function allValid() {
    if (check == "empty") {
        alert(`Please Fill out all Form Fields -_-`);
    } else {
        if (un && up && ue && unum && check) {
            document.form1.submit();
        } else {
            alert("Please Fill The form fields carefully-_-");
        }
    }
}
document.getElementById("submit").addEventListener("click", allValid);

// Validating function
let validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.className = "valid";
        switch (field.attributes.name.value) {
            case "username":
                un = true;
                break;
            case "password":
                if (/.{8,13}/.test(field.value)) {
                    document.getElementById("pw").innerText = "Weak Password";
                }
                if (/.{13,20}/.test(field.value)) {
                    document.getElementById("pw").innerText = "Strong Password";
                }
                if (/[!@#$%^&*<>,.?/+-].{13,20}/.test(field.value)) {
                    document.getElementById("pw").innerText = "Very Strong Password";
                }
                up = true;
                break;
            case "number":
                unum = true;
            case "email":
                ue = true;
            default:
                un = up = ue = unum = false;
                break;
        }
    } else {
        field.className = "invalid";
        switch (field.attributes.name.value) {
            case "username":
                un = false;
                break;
            case "password":
                up = false;
                break;
            case "number":
                unum = false;
            case "email":
                ue = false;
            default:
                un = up = ue = unum = false;
                break;
        }
    }
};

// Regex Patterns:
const patterns = {
    username: /^[a-z\d]{5,15}$/i,
    email: /^[a-z0-9.]+@[a-z]+\.([a-z]{2,3})(\.[a-z]{2})?/i,
    number: /^\+91-?[6-9]\d{9}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};

// Handler:
let handler = e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
};

// Appending action listeners:
document.form1.username.addEventListener("keyup", handler);
document.form1.email.addEventListener("keyup", handler);
document.form1.number.addEventListener("keyup", handler);
document.form1.password.addEventListener("keyup", handler);

// Show password:
function showPassword(e) {
    if (e.target.checked) {
        document.form1.password.type = "text";
    } else {
        document.form1.password.type = "password";
    }
}
document.form1.showPass.addEventListener("click", showPassword);

// Checking terms and conditions:
function checkTerms(e) {
    if (e.target.checked) {
        check = true;
    } else {
        check = false;
    }
}
document.form1.check.addEventListener("click", checkTerms);