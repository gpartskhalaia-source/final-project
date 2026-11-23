
 // =================================
 // SHOW / HIDE PASSWORD
 // =================================
 // Get elements

let passwordshow = document.getElementById('password');

let toggleIconEye = document.getElementById('toggleIcon');

let togglePassword = document.getElementById('togglePassword');


// Show / Hide Password

function showHidePassword() {

    if (passwordshow.type === 'password') {

        // Show password
        passwordshow.type = 'text';

        toggleIconEye.classList.remove('fa-eye');
        toggleIconEye.classList.add('fa-eye-slash');

        togglePassword.setAttribute('aria-label', 'Hide password');
        togglePassword.setAttribute('aria-pressed', 'true');

    } else {

        // Hide password
        passwordshow.type = 'password';

        toggleIconEye.classList.remove('fa-eye-slash');
        toggleIconEye.classList.add('fa-eye');

        togglePassword.setAttribute('aria-label', 'Show password');
        togglePassword.setAttribute('aria-pressed', 'false');

    }

}


// Click event

togglePassword.addEventListener('click', showHidePassword);




// =================================
// FORM VALIDATION
// =================================

let registration = document.getElementById('registration');

let message = document.getElementById('form-message');


registration.addEventListener('submit', function(event) {

    event.preventDefault();

    message.textContent = '';

    let errors = {

    };

    let username = document.getElementById('username').value.trim();

    let emailInput = document.getElementById('email');

    let email = emailInput.value.trim();

    let password = document.getElementById('password').value;

    let password2 = document.getElementById('password2').value;

    let agree = document.getElementById('checkagree').checked;


    // USERNAME VALIDATION

    if (username === '') {

        errors.username = "Username can't be empty";

    } else if (username.length < 4) {

        errors.username = "Username must contain at least 4 characters";
    }


    // EMAIL VALIDATION

    if (email === '') {

        errors.email = "Email can't be empty";

    } else if (emailInput.validity.typeMismatch) {

        errors.email = "Please enter a valid email address";
    }


    // PASSWORD VALIDATION

    if (password === '') {

        errors.password = "Password can't be empty";

    } else if (password.length < 8) {

        errors.password = "Password must contain at least 8 characters";
    }


    // REPEAT PASSWORD VALIDATION

    if (password2 === '') {

        errors.password2 = "Please repeat your password";

    } else if (password !== password2) {

        errors.password2 = "Passwords do not match";
    }


    // CHECKBOX VALIDATION

    if (!agree) {

        errors.agree = "Please confirm that this is a demo registration";
    }


    // SHOW ERROR MESSAGES

    document.getElementById('error-username').textContent =
        errors.username || '';

    document.getElementById('error-email').textContent =
        errors.email || '';

    document.getElementById('error-password').textContent =
        errors.password || '';

    document.getElementById('error-password2').textContent =
        errors.password2 || '';

    document.getElementById('error-agree').textContent =
        errors.agree || '';


    // ADD / REMOVE ERROR CLASS

    let fields = ['username', 'email', 'password', 'password2'];

    fields.forEach(function(field) {

        let input = document.getElementById(field);

        input.classList.toggle('error', !!errors[field]);

        input.setAttribute('aria-invalid', String(!!errors[field]));

    });

    document.getElementById('checkagree').setAttribute(
        'aria-invalid',
        String(!!errors.agree)
    );


    // SUCCESSFUL REGISTRATION

    if (Object.keys(errors).length === 0) {

        registration.reset();

        // Reset eye icon
        passwordshow.type = 'password';

        toggleIconEye.classList.remove('fa-eye-slash');
        toggleIconEye.classList.add('fa-eye');

        togglePassword.setAttribute('aria-label', 'Show password');
        togglePassword.setAttribute('aria-pressed', 'false');

        message.textContent = 'Your form has been submitted successfully!';

    } else {

        registration.querySelector('[aria-invalid="true"]').focus();

    }

});
