document.addEventListener('DOMContentLoaded', function() {
    const pets = [
        {
            name: 'Buddy',
            type: 'Dog',
            registeredDate: '2020-01-15',
            ownerName: 'James Cruz',
            vetName: 'Dr. Quisumbing',
            homeAddress: '123 Main St, Springfield',
            vitals: 'Healthy, Weight: 19kg, Temperature: 38.2°C',
            image: 'images/buddy.jpg'
        },
        {
            name: 'Kitty',
            type: 'Cat',
            registeredDate: '2022-11-23',
            ownerName: 'Ben Santos',
            vetName: 'Dr. Quisumbing',
            homeAddress: '456 Elm St, Springfield',
            vitals: 'Healthy, Weight: 5kg, Temperature: 38.1°C',
            image: 'images/kitty.jpg'
        },
        {
            name: 'Spike',
            type: 'Hedgehog',
            registeredDate: '2021-06-06',
            ownerName: 'Mike Leones',
            vetName: 'Dr. Clemente',
            homeAddress: '789 Oak St, Brookfield',
            vitals: 'Healthy, Weight: 600g, Temperature: 36.0°C',
            image: 'images/spike.jpg'
        },
        {
            name: 'Fluffy',
            type: 'Hamster',
            registeredDate: '2021-08-01',
            ownerName: 'Mae Arceta',
            vetName: 'Dr. Clemente',
            homeAddress: '321 Pine St, Greenfield',
            vitals: 'Healthy, Weight: 150g, Temperature: 37.5°C',
            image: 'images/fluffy.jpg'
        },
        {
            name: 'Tweety',
            type: 'Bird',
            registeredDate: '2023-05-30',
            ownerName: 'Sara Cruz',
            vetName: 'Dr. Hernandez',
            homeAddress: '654 Maple St, Fairview',
            vitals: 'Healthy, Weight: 30g, Temperature: 41.0°C',
            image: 'images/tweety.jpg'
        },
        {
            name: 'Clover',
            type: 'Rabbit',
            registeredDate: '2023-03-06',
            ownerName: 'Kim Roberts',
            vetName: 'Dr. Hernandez',
            homeAddress: '987 Willow St, Lakeside',
            vitals: 'Healthy, Weight: 2.5kg, Temperature: 38.3°C',
            image: 'images/clover.jpg'
        }
    ];

const petGallery = document.getElementById('petGallery');
const petDetailsModal = document.getElementById('petDetailsModal');
const registerModal = document.getElementById("registerModal");
const registerBtn = document.getElementById("registerBtn");
const closeModal = document.getElementById("closeModal");
const closeRegisterModal = document.getElementById("closeRegisterModal");

pets.forEach(pet => {
    const petItem = document.createElement("div");
    petItem.classList.add("pet-item");
    petItem.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>${pet.type}</p>
    `;
    petItem.addEventListener("click", () => {
        showPetDetails(pet);
    });
    petGallery.appendChild(petItem);
});

function showPetDetails(pet) {
    document.getElementById("petName").textContent = pet.name;
    document.getElementById("petType").textContent = pet.type;
    document.getElementById("registeredDate").textContent = pet.registrationDate;
    document.getElementById("ownerName").textContent = pet.owner;
    document.getElementById("vetName").textContent = pet.veterinarian;
    document.getElementById("homeAddress").textContent = pet.homeAddress;
    document.getElementById("vitals").innerHTML = `
        <strong>Weight:</strong> ${pet.vitals.weight} kg<br>
        <strong>Temperature:</strong> ${pet.vitals.temperature} °C
    `;
    petDetailsModal.style.display = "block";
}

closeModal.addEventListener("click", () => {
    petDetailsModal.style.display = "none";
});

registerBtn.addEventListener("click", () => {
    registerModal.style.display = "block";
});

closeRegisterModal.addEventListener("click", () => {
    registerModal.style.display = "none";
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newPet = {
        name: document.getElementById("registerPetName").value,
        type: document.getElementById("registerAnimalType").value,
        registrationDate: document.getElementById("registerDate").value,
        owner: document.getElementById("registerOwnerName").value,
        homeAddress: document.getElementById("registerHomeAddress").value,
        vitals: {
            weight: parseFloat(document.getElementById("registerWeight").value),
            temperature: parseFloat(document.getElementById("registerTemperature").value)
        },
        image: "images/default.jpg" // Default image for newly registered pets
    };

    pets.push(newPet);
    addPetToGallery(newPet);

    registerModal.style.display = "none";
    this.reset();
});

function addPetToGallery(pet) {
    const petItem = document.createElement("div");
    petItem.classList.add("pet-item");
    petItem.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>${pet.type}</p>
    `;
    petItem.addEventListener("click", () => {
        showPetDetails(pet);
    });
    petGallery.appendChild(petItem);
}

window.addEventListener("click", function(event) {
    if (event.target == petDetailsModal) {
        petDetailsModal.style.display = "none";
    } else if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
});
});