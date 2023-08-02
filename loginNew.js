function signUp() {
    // Get the input values
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('pswd').value;

    // Check if the user ID and password are not empty
    if (userId.trim() === '' || password.trim() === '') {
        alert('Please enter a valid User ID and Password.');
        return;
    }

    // Store the user data in local storage
    const userData = {
        userId,
        password
    };

    // Save the data in local storage (convert to JSON string before saving)
    localStorage.setItem('userData', JSON.stringify(userData));

    // Optionally, you can notify the user that the sign-up was successful
    alert('Sign-up successful. You can now log in.');
    window.location="form.html"
}

function login() {
    // Get the input values
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('pswd').value;

    // Get the user data from local storage and parse it back to an object
    const storedData = localStorage.getItem('userData');
    const userData = JSON.parse(storedData);

    // Check if the entered username and password match the stored data
    if (!userData || userId !== userData.userId || password !== userData.password) {
        alert('Invalid User ID or Password. Please try again.');
        return;
    }

    // If login is successful, you can redirect the user to the dashboard or other pages
    // For example: window.location.href = 'dashboard.html';
    alert('Login successful. Redirecting to the dashboard...');
}

// Attach the sign-up function to a button click (you should have a "Sign Up" button in your HTML)
document.getElementById('sign-up-button').onclick = signUp;

// Attach the login function to the login button (you should have a "Login" button in your HTML)
document.getElementById('login-button').onclick = login;