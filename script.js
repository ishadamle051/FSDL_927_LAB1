document.getElementById("collegeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();

    let genderSelected = document.querySelector('input[name="gender"]:checked');

    // 1. Empty fields check
    if (name === "" || email === "" || phone === "" || course === "" || address === "") {
        alert("❌ All fields are mandatory.");
        return;
    }

    // 2. Name validation (only alphabets & space)
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("❌ Name should contain only alphabets.");
        return;
    }

    // 3. Email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("❌ Please enter a valid email address.");
        return;
    }

    // 4. Phone number validation (10 digits)
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("❌ Phone number must be exactly 10 digits.");
        return;
    }

    // 5. Gender not selected
    if (!genderSelected) {
        alert("❌ Please select your gender.");
        return;
    }

    // 6. Address length check
    if (address.length < 10) {
        alert("❌ Address must be at least 10 characters long.");
        return;
    }

    // SUCCESS
    alert("✅ Form submitted successfully!\n\nThank you for applying.");
    
    // Optional: reset form
    document.getElementById("collegeForm").reset();
});
