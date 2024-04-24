function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show the requested section
    document.getElementById(sectionId).style.display = 'block';

    // If showing active orders, refresh the orders display
    if (sectionId === 'activeOrders') {
        displayOrders();
    }
}

// Sample mock orders data
let orders = [
    { id: 1, item: { name: "Pizza", price: 12, quantity: 1, extraIngredients: [{ name: "Olives" }], removedIngredients: ["Cheese"] }, dineOption: 'Dine In', customer: { name: "John Doe", email: "john@example.com", phone: "1234567890", tableNumber: "5" } },
    { id: 2, item: { name: "Burger", price: 10, quantity: 2, extraIngredients: [{ name: "Bacon" }], removedIngredients: ["Onions"] }, dineOption: 'Take Away', customer: { name: "Jane Doe", email: "jane@example.com", phone: "0987654321", tableNumber: "N/A" } }
];

function displayOrders() {
    const container = document.getElementById('activeOrders');
    container.innerHTML = ''; // Clear current orders

    orders.forEach(order => {
        const orderBox = document.createElement('div');
        orderBox.className = 'order-box';
        orderBox.innerHTML = `
            <h3>${order.item.name}</h3>
            <p>Price: $${order.item.price}</p>
            <p>Quantity: ${order.item.quantity}</p>
            <p>Extras: ${order.item.extraIngredients.map(extra => extra.name).join(', ')}</p>
            <p>Removed: ${order.item.removedIngredients.join(', ')}</p>
            <p>Dine Option: ${order.dineOption}</p>
            <p>Name: ${order.customer.name}</p>
            <p>Email: ${order.customer.email}</p>
            <p>Phone: ${order.customer.phone}</p>
            <p>Table: ${order.customer.tableNumber}</p>
            <button onclick="markOrderReady(${order.id})">Order Ready</button>
        `;
        container.appendChild(orderBox);
    });
}

function markOrderReady(orderId) {
    const index = orders.findIndex(order => order.id === orderId);
    if (index !== -1) {
        orders[index].status = 'completed';
        displayOrders(); // Refresh active orders
        addToOrderHistory(orders[index]); // Add to order history
    }
}

function addToOrderHistory(order) {
    const historyContainer = document.getElementById('orderHistory');
    const orderElem = document.createElement('div');
    orderElem.className = 'history-box';
    orderElem.innerHTML = `
        <p>Completed Order ID: ${order.id}</p>
        <p>${order.item.details}</p>
    `;
    historyContainer.appendChild(orderElem);
}

document.getElementById('submitBtn').addEventListener('click', function() {
    var password = document.getElementById('passwordInput').value;
    document.getElementById('alert').style.display = 'none';
    if (password === '1234') {
        showSection('activeOrders');
    } else {
        document.getElementById('alert').style.display = 'block';
    }
});


// Setup event listeners for navigation
document.getElementById('historyBtn').addEventListener('click', function() {
    showSection('orderHistory');
});

document.getElementById('ordersBtnHistory').addEventListener('click', function() {
    showSection('activeOrders');
});








