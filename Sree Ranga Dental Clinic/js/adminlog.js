document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const username = document.querySelector('input[type="text"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();

        // Default credentials
        const defaultUsername = "admin";
        const defaultPassword = "admin";

        // Debug values
        console.log("Username:", username);
        console.log("Password:", password);

        // Validate credentials
        if (username === defaultUsername && password === defaultPassword) {

            alert("Admin login successful!");
            // Redirect to admin dashboard
            window.location.href = "admindash.html";
        } else {
            // Show error message
            document.getElementById("loginMessage").textContent = "Invalid Username or Password";
        }
    });
});