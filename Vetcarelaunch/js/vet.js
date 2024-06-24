document.addEventListener('DOMContentLoaded', function() {
    const vets = [
        {
            name: "Dr. Leticia Quisumbing",
            specialization: "Internal Medicine",
            yearsOfService: 8,
            licenseNo: "***574",
            age: 49,
            gender: "Female",
            contactNo: "+63 919-4567-890",
            email: "leticia.quisumbing@vetcare.com",
            image: "images/vet1.jpg"
        },
        {
            name: "Dr. Jiro Clemente",
            specialization: "Surgery",
            yearsOfService: 12,
            licenseNo: "***318",
            age: 41,
            gender: "Male",
            contactNo: "+63 923-5678-901",
            email: "jiro.clemente@vetcare.com",
            image: "images/vet2.jpg"
        },
        {
            name: "Dr. Margarita Hernandez",
            specialization: "Dermatology",
            yearsOfService: 12,
            licenseNo: "***816",
            age: 45,
            gender: "Female",
            contactNo: "+63 955-1250-521",
            email: "margarita.hernandez@vetcare.com",
            image: "images/vet3.jpg"
        }
    ]

    const vetList= document.getElementById('vet-list');
    const vetDetailsModal = document.getElementById('vetDetailsModal');
    const closeModal = document.getElementById('closeModal');
    const appointmentBtn = document.getElementById('appointmentBtn');
    const appointmentModal = document.getElementById('appointmentModal');
    const closeAppointmentModal = document.getElementById('closeAppointmentModal');
    const appointmentForm = document.getElementById('appointmentForm');


    vets.forEach(vet => {
        const vetItem = document.createElement('div');
        vetItem.className = 'vet-item';
        vetItem.innerHTML = `
            <img src="${vet.image}" alt="${vet.name}">
            <h3>${vet.name}</h3>
            <p>Specialization: ${vet.specialization}</p>
        `;
        vetItem.addEventListener('click', () => {
            document.getElementById('vetName').innerText = vet.name;
            document.getElementById('vetSpecialization').innerText = vet.specialization;
            document.getElementById('YrsOfService').innerText = vet.yearsOfService;
            document.getElementById('license').innerText = vet.licenseNo;
            document.getElementById('age').innerText = vet.age;
            document.getElementById('gender').innerText = vet.gender;
            document.getElementById('vetContact').innerText = vet.contactNo;
            document.getElementById('vetEmail').innerText = vet.email;
            vetDetailsModal.style.display = 'block';
        });
        vetList.appendChild(vetItem);
    });

    // Open appointment modal when appointment button is clicked
    appointmentBtn.addEventListener('click', () => {
        appointmentModal.style.display = 'block';
    });

    // Close appointment modal when close button is clicked
    closeAppointmentModal.addEventListener('click', () => {
        appointmentModal.style.display = 'none';
    });

    // Close appointment modal when clicking outside the modal content
    window.addEventListener('click', event => {
        if (event.target === appointmentModal) {
            appointmentModal.style.display = 'none';
        }
    });

    // Handle form submission
    appointmentForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form data
        const ownerName = document.getElementById('ownerName').value;
        const petName = document.getElementById('petName').value;
        const animalType = document.getElementById('animalType').value;
        const appointmentDateTime = document.getElementById('appointmentDateTime').value;

        // Perform any additional processing here (e.g., send data to server)

        // Optionally, display a confirmation message or close the modal
        appointmentModal.style.display = 'none';
        alert(`Appointment successfully booked for ${petName} (${animalType}) with ${ownerName} on ${appointmentDateTime}.`);
    });
    ;

    closeModal.addEventListener('click', () => {
        vetDetailsModal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === vetDetailsModal) {
            vetDetailsModal.style.display = 'none';
        }
    });
});
