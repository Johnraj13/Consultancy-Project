$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        
        // Simulate login for demonstration
        const username = $('input[type="text"]').val();
        const password = $('input[type="password"]').val();
        
        // Replace with actual validation logic
        if (username === 'admin' && password === 'password') {
            // Redirect to the dashboard
            window.location.href = 'admin-dashboard.html';
        } else {
            $('#loginMessage').text('Invalid username or password.');
        }
    });
});

document.getElementById('logoutButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'adminlogin.html'; // Redirect to the login page
    }
});

document.getElementById('createPatientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add functionality to handle the form data here.
    alert('Patient record created successfully!');

    // Optionally, reset the form and close the modal
    this.reset();
    $('#createPatientModal').modal('hide');
});




