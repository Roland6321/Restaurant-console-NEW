function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show the requested section
    document.getElementById(sectionId).style.display = 'block';
}

// Example order data to be dynamically displayed
let orders = [
    { id: 1, item: { name: "Pizza Margherita", price: 12.00, quantity: 1, extras: ["Olives", "Extra Cheese"], removed: [] }, dineOption: 'Dine In', customer: { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", tableNumber: "21" } }
];

function displayOrders() {
    const container = document.getElementById('activeOrders');
    // Ensure the menu and header are not re-created
    container.innerHTML = `<div class="menu">
        <div id="ordersBtn" class="menu-item active">Active Orders</div>
        <div id="historyBtn" class="menu-item">Order History</div>
    </div><h2>Active Orders</h2>`;

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
}

document.getElementById('submitBtn').addEventListener('click', function() {
    var password = document.getElementById('passwordInput').value;
    document.getElementById('alert').style.display = 'none';
    if (password === '1234') {
        showSection('activeOrders');
        displayOrders(); // Ensure orders are displayed when section is shown
    } else {
        document.getElementById('alert').style.display = 'block';
    }
});

document.getElementById('historyBtn').addEventListener('click', function() {
    showSection('orderHistory');
});

document.getElementById('ordersBtn').addEventListener('click', function() {
    showSection('activeOrders');
    displayOrders(); // Refresh display when switching back to active orders
});








