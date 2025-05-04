//Get all "Book Now" buttons on specified button
// document.addEventListener("DOMContentLoaded", () => {
//     //Buttons on dermatology specialize
//     let laylaButton = document.getElementById("layla-button");
//     let oliviaButton = document.getElementById("olivia-button");
//     // Buttons on psychiatry specialize
//     let nouranButton = document.getElementById("nouran-button");
//     let emilyButton = document.getElementById("emily-button");
//     //Buttons on nutrition and dietetics specialize
//     let mahaButton = document.getElementById("maha-button");
//     let jenniferButton = document.getElementById("jennifer-button");
//     // Buttons on cardiology specialize
//     let aymanButton = document.getElementById("ayman-button");
//     let michaelButton = document.getElementById("michael-button");
//     // Buttons on orthopedics specialize
//     let tarekButton = document.getElementById("tarek-button");
//     let johnButton = document.getElementById("john-button");
//     // Buttons on pulmonology specialize
//     let ahmedButton = document.getElementById("ahmed-button");
//     let lisaButton = document.getElementById("lisa-button");

//     //Going to chat page with each doctor
//     //Dermatology doctors
//     if (laylaButton) {
//         laylaButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Layla El-Masry";
//         });
//     }
//     if (oliviaButton) {
//         oliviaButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Olivia Carter";
//         });
//     }

//     // Psychiatry doctors 
//     if (nouranButton) {
//         nouranButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Nouran El-helbawi";
//         });
//     }
//     if (emilyButton) {
//         emilyButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Emily Rhodes";
//         });
//     }

//     //nutrition & dietetics doctors
//     if (mahaButton) {
//         mahaButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Maha El-Attar";
//         });
//     }
//     if (jenniferButton) {
//         jenniferButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Jennifer Lee";
//         });
//     }

//     //cardiology doctors
//     if (aymanButton) {
//         aymanButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Ayman El-Shazly";
//         });
//     }
//     if (michaelButton) {
//         michaelButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Michael Adams";
//         });
//     }

//     //orthopedics doctors
//     if (tarekButton) {
//         tarekButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Tarek El-Hossary";
//         });
//     }
//     if (johnButton) {
//         johnButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=John Petersonr";
//         });
//     }

//     //pulmonology doctors
//     if (ahmedButton) {
//         ahmedButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Ahmed Shawky";
//         });
//     }
//     if (lisaButton) {
//         lisaButton.addEventListener("click", () => {
//             alert("Booking successful! You will now be redirected to the chat page");
//             window.location.href = "chat-patient.html?doctor=Lisa Jackson";
//         });
//     }
// });

// Form Validation

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".book-now-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const doctorName = button.getAttribute("data-doctor");
            const specialty = button.getAttribute("data-specialty");

            if (doctorName && specialty) {
                alert("Booking successful! You will now be redirected to the chat page");
                
                setTimeout(() => {
                    window.location.href = `/${specialty}/chat-patient/?doctor=${encodeURIComponent(doctorName)}`;
                }, 2000);
            }
        });
        
    });
});

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

