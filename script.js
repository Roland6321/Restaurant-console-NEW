function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show the requested section
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('submitBtn').addEventListener('click', function() {
    var password = document.getElementById('passwordInput').value;
    // Ensure the alert is hidden initially on each submit
    document.getElementById('alert').style.display = 'none';

    if (password === '1234') { // Correct password
        showSection('activeOrders');
    } else {
        // Only display the alert if the password is incorrect
        document.getElementById('alert').style.display = 'block';
    }
});

document.getElementById('historyBtn').addEventListener('click', function() {
    showSection('orderHistory');
});

document.getElementById('ordersBtnHistory').addEventListener('click', function() {
    showSection('activeOrders');
});








