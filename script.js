// Get all "Book Now" buttons on specified button
document.addEventListener("DOMContentLoaded", () => {
    //Buttons on dermatology specialize
    let laylaButton = document.getElementById("layla-button");
    let oliviaButton = document.getElementById("olivia-button");
    let youssefButton = document.getElementById("youssef-button");
    let aminaButton = document.getElementById("amina-button");
    let nouraButton = document.getElementById("noura-button");
    // Buttons on psychiatry specialize
    let nouranButton = document.getElementById("nouran-button");
    let karimButton = document.getElementById("karim-button");
    let salmaButton = document.getElementById("salma-button");
    let mostafaButton = document.getElementById("mostafa-button");
    let emilyButton = document.getElementById("emily-button");
    //Buttons on nutrition and dietetics specialize
    let mahaButton = document.getElementById("maha-button");
    let adelButton = document.getElementById("adel-button");
    let salmaHButton = document.getElementById("salmaH-button");
    let naderButton = document.getElementById("nader-button");
    let jenniferButton = document.getElementById("jennifer-button");
    // Buttons on cardiology specialize
    let aymanButton = document.getElementById("ayman-button");
    let monaButton = document.getElementById("mona-button");
    let walidButton = document.getElementById("walid-button");
    let rashaButton = document.getElementById("rasha-button");
    let michaelButton = document.getElementById("michael-button");
    // Buttons on orthopedics specialize
    let tarekButton = document.getElementById("tarek-button");
    let nourhanButton = document.getElementById("nourhan-button");
    let ahmedSButton = document.getElementById("ahmedS-button");
    let hossamButton = document.getElementById("hossam-button");
    let johnButton = document.getElementById("john-button");
    // Buttons on pulmonology specialize
    let ahmedButton = document.getElementById("ahmed-button");
    let raniaButton = document.getElementById("rania-button");
    let moatazButton = document.getElementById("moataz-button");
    let omarButton = document.getElementById("omar-button");
    let lisaButton = document.getElementById("lisa-button");

    //Going to chat page with each doctor
    //Dermatology doctors
    if (laylaButton) {
        laylaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Layla El-Masry";
        });
    }
    if (youssefButton) {
        youssefButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Youssef Hegazy";
        });
    }
    if (aminaButton) {
        aminaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Amina Shoukry";
        });
    }
    if (nouraButton) {
        nouraButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Noura Kamal";
        });
    }
    if (oliviaButton) {
        oliviaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Olivia Carter";
        });
    }

    // Psychiatry doctors 
    if (nouranButton) {
        nouranButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Nouran El-helbawi";
        });
    }
    if (karimButton) {
        karimButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Karim Abdel Wahab";
        });
    }
    if (salmaButton) {
        salmaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Salma Fathi";
        });
    }
    if (mostafaButton) {
        nouranButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Mostafa El-Gendy";
        });
    }
    if (emilyButton) {
        emilyButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Emily Rhodes";
        });
    }

    //nutrition & dietetics doctors
    if (mahaButton) {
        mahaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Maha El-Attar";
        });
    }
    if (adelButton) {
        adelButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Adel Samir";
        });
    }
    if (salmaHButton) {
        salmaHButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Salma Hegazy";
        });
    }
    if (naderButton) {
        naderButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Nader Fathy";
        });
    }
    if (jenniferButton) {
        jenniferButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Jennifer Lee";
        });
    }

    //cardiology doctors
    if (aymanButton) {
        aymanButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Ayman El-Shazly";
        });
    }
    if (monaButton) {
        monaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Mona Hafez";
        });
    }
    if (walidButton) {
        walidButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Walid Kamal";
        });
    }
    if (rashaButton) {
        rashaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Rasha El-Gendy";
        });
    }
    if (michaelButton) {
        michaelButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Michael Adams";
        });
    }

    //orthopedics doctors
    if (tarekButton) {
        tarekButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Tarek El-Hossary";
        });
    }
    if (nourhanButton) {
        nourhanButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Nourhan Sherif";
        });
    }
    if (ahmedSButton) {
        ahmedSButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Ahmed Samir";
        });
    }
    if (hossamButton) {
        hossamButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Hossam El-Masry";
        });
    }
    if (johnButton) {
        johnButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=John Petersonr";
        });
    }

    //pulmonology doctors
    if (ahmedButton) {
        ahmedButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Ahmed Shawky";
        });
    }
    if (raniaButton) {
        raniaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Rania El-Sayed";
        });
    }
    if (moatazButton) {
        moatazButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Moataz Fathy";
        });
    }
    if (omarButton) {
        omarButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Omar Abdel-Rahman";
        });
    }
    if (lisaButton) {
        lisaButton.addEventListener("click", () => {
            alert("Booking successful! You will now be redirected to the chat page");
            window.location.href = "chat-patient.html?doctor=Lisa Jackson";
        });
    }
});


// Show doctors based on their gender
function filterDoctors() {
    const genderFilter = document.getElementById('gender').value;
    const doctors = document.querySelectorAll('.east-doctors > div, .west-doctors > div'); 
    doctors.forEach(doc => {
        const docGender = doc.getAttribute('data-gender');
        if (genderFilter === 'all' || docGender === genderFilter) {
            doc.style.display = ''; 
        } else {
            doc.style.display = 'none'; 
        }
    });
}

// Sort the doctors based on fees
function sortDoctors(order) {
    const containerEast = document.querySelector('.east-doctors');
    const containerWest = document.querySelector('.west-doctors');
    const doctorsArrayEast = Array.from(containerEast.children);
    const doctorsArrayWest = Array.from(containerWest.children);

    // Merge east and west doctors
    const allDoctors = [...doctorsArrayEast, ...doctorsArrayWest];

    allDoctors.sort((a, b) => {
        const feeA = parseFloat(a.getAttribute('data-fees'));
        const feeB = parseFloat(b.getAttribute('data-fees'));
        return order === 'asc' ? feeA - feeB : feeB - feeA;
    });

    // Reset the sort of doctors
    containerEast.innerHTML = ''; 
    containerWest.innerHTML = ''; 

    allDoctors.forEach(doc => {
        if (doc.parentElement === containerEast) {
            containerEast.appendChild(doc); // Add to East doctors
        } else {
            containerWest.appendChild(doc); // Add to west doctors
        }
    });
}




// Form Validation
document.getElementById("sign-up").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get inputs
    const firstName = document.querySelector("input[name='firstName']").value.trim();
    const secondName = document.querySelector("input[name='SecondName']").value.trim();
    const password = document.querySelector("input[name='Password']").value;
    const mobile = document.querySelector("input[name='Mobile']").value.trim();
    const email = document.querySelector("input[name='Email']").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const dob = document.querySelector("input[name='birthdate']").value;

    // Clear old errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let valid = true;

    // First name 
    if (!/^[A-Za-z]+$/.test(firstName) || firstName.length < 3) {
        document.getElementById("firstNameError").textContent = "First name must contain letters only and be at least 3 characters long.";
        valid = false;
    }

    // Second name 
    if (!/^[A-Za-z]+$/.test(secondName) || secondName.length < 3) {
        document.getElementById("secondNameError").textContent = "Second name must contain letters only and be at least 3 characters long.";
        valid = false;
    }

    // Password
    if (!validatePassword(password)) {
        document.getElementById("passwordError").textContent = "8-15 chars with letters, numbers & symbol.";
        valid = false;
    }

    // Mobile
    if (!/^\d{11}$/.test(mobile)) {
        document.getElementById("mobileError").textContent = "Enter a valid 11 digit number.";
        valid = false;
    }

    // Email
    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        valid = false;
    }

    // Gender
    if (!gender) {
        document.getElementById("genderError").textContent = "Select gender.";
        valid = false;
    }

    // Date of Birth
    if (!dob) {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully! 🎉");
        this.submit(); 
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
function validatePassword(password) {
    // (?=.*[A-Za-z]) => Must contain letter
    // (?=.*\d) => must contain a num
    // (?=.*[@$!%*#?&]) => must contain a character

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    return passwordRegex.test(password);
}

