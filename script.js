document.getElementById('submitBtn').addEventListener('click', function() {
    var password = document.getElementById('passwordInput').value;
    if (password === '1234') {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('activeOrders').classList.remove('hidden');
    } else {
        document.getElementById('alert').classList.remove('hidden');
    }
});

document.getElementById('historyBtn').addEventListener('click', function() {
    document.getElementById('activeOrders').classList.add('hidden');
    document.getElementById('orderHistory').classList.remove('hidden');
});

document.getElementById('ordersBtnHistory').addEventListener('click', function() {
    document.getElementById('orderHistory').classList.add('hidden');
    document.getElementById('activeOrders').classList.remove('hidden');
});




