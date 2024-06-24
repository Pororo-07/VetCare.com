document.addEventListener("DOMContentLoaded", function() {
    const userInfo = {
        name: "John Doe",
        pet: "Dog: Milley",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Springfield, USA"
    };

    document.getElementById("userName").textContent = userInfo.name;
    document.getElementById("petInfo").textContent = userInfo.pet;
    document.getElementById("email").textContent = `Email: ${userInfo.email}`;
    document.getElementById("phone").textContent = `Phone: ${userInfo.phone}`;
    document.getElementById("address").textContent = `Address: ${userInfo.address}`;
});