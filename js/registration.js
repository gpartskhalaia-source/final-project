
 // =================================
 // SHOW / HIDE PASSWORD
 // =================================
 // Get elements

let passwordshow = document.getElementById('password');

let toggleIconEye = document.getElementById('toggleIcon');


// Show / Hide Password

function showHidePassword() {

    if (passwordshow.type === 'password') {

        // Show password
        passwordshow.type = 'text';

        toggleIconEye.classList.remove('fa-eye');
        toggleIconEye.classList.add('fa-eye-slash');

    } else {

        // Hide password
        passwordshow.type = 'password';

        toggleIconEye.classList.remove('fa-eye-slash');
        toggleIconEye.classList.add('fa-eye');

    }

}


// Click event

toggleIconEye.addEventListener('click', showHidePassword);


// Keyboard accessibility

toggleIconEye.addEventListener('keydown', function(event) {

    if (event.key === 'Enter' || event.key === ' ') {

        event.preventDefault();

        showHidePassword();
    }

});


// =================================
// FORM VALIDATION
// =================================

let registration = document.getElementById('registration');


registration.addEventListener('submit', function(event) {

    event.preventDefault();

    let errors = {

    };

    let username = document.getElementById('username').value.trim();

    let email = document.getElementById('email').value.trim();

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

    } else if (!document.getElementById('email').validity.valid) {

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

    document.getElementById('username').classList.toggle(
        'error',
        !!errors.username
    );

    document.getElementById('email').classList.toggle(
        'error',
        !!errors.email
    );

    document.getElementById('password').classList.toggle(
        'error',
        !!errors.password
    );

    document.getElementById('password2').classList.toggle(
        'error',
        !!errors.password2
    );


    // SUCCESSFUL REGISTRATION

    if (Object.keys(errors).length === 0) {

        alert('Your form has been submitted successfully!');

        // Clear all input fields
        registration.reset();

        // Clear error messages
        document.querySelectorAll('.errorText').forEach(function(error) {
            error.textContent = '';
        });

        // Remove error styles
        document.querySelectorAll('input').forEach(function(input) {
            input.classList.remove('error');
        });

        // Reset eye icon
        passwordshow.type = 'password';

        toggleIconEye.classList.remove('fa-eye-slash');
        toggleIconEye.classList.add('fa-eye');

    }

});
