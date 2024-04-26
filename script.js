function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show the requested section
    document.getElementById(sectionId).style.display = 'block';
    if (sectionId === 'activeOrders') {
        fetchAndDisplayOrders(); // Fetch and display orders dynamically whenever the activeOrders section is shown
    }
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

function fetchAndDisplayOrders() {
    setTimeout(() => { // Simulated delay to mimic network response time
        const orders = [
            {
                item: { name: 'Grilled Salmon', price: 15.99, quantity: 1, extras: ['Extra Cheese', 'Special Sauce'], removed: ['No Onions'] },
                dineOption: 'Eat In',
                customer: { name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890', tableNumber: 5 }
            },
            // More orders can be added here for testing
        ];

        const container = document.getElementById('ordersContainer');
        container.innerHTML = ''; // Clear existing orders before displaying new ones
        orders.forEach(order => {
            const orderBox = document.createElement('div');
            orderBox.className = 'order-box';
            orderBox.innerHTML = `
                <h3>${order.item.name}</h3>
                <p>Price: $${order.item.price}</p>
                <p>Quantity: ${order.item.quantity}</p>
                <p>Extras: ${order.item.extras.join(', ')}</p>
                <p>Removed: ${order.item.removed.length > 0 ? order.item.removed.join(', ') : 'None'}</p>
                <p>Dine Option: ${order.dineOption}</p>
                <p>Name: ${order.customer.name}</p>
                <p>Email: ${order.customer.email}</p>
                <p>Phone: ${order.customer.phone}</p>
                <p>Table: ${order.customer.tableNumber}</p>
                <button class="order-ready-btn">Order Ready</button>
            `;
            container.appendChild(orderBox);
        });
    }, 500);
}