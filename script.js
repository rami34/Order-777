document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let governorate = document.getElementById("governorate").value;
    let district = document.getElementById("district").value;
    let quantity = document.getElementById("quantity").value;
    let totalPrice = document.getElementById("totalPrice").value;
    let phone = document.getElementById("phone").value;

    let msg = `طلب جديد - منتجات عصير الحياة:%0A📍 المحافظة: ${governorate}%0A🏠 الحي/المنطقة: ${district}%0A📦 الكمية: ${quantity} قطعة%0