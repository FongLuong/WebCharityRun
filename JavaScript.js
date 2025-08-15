// Get form and message display area
const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("messageBox");

// Handle Submit
function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const eventSelected = document.getElementById("event").value;

    if (!name || !email || !eventSelected) {
        alert("⚠️ Please fill in all required fields!");
        return;
    }

    // Show success message
    messageBox.innerHTML = `<p style="color:green;font-weight:bold;">✅ Registration successful! Thank you, ${name}, for your interest.</p>`;

    // Reset form fields
    form.reset();
}

// Handle Cancel
function handleCancel() {
    if (confirm("❌ Are you sure you want to cancel and clear all entered information?")) {
        form.reset();
        messageBox.innerHTML = ""; // Clear any message
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn form reload trang
        window.location.href = "success.html"; // Chuyển tới trang thông báo thành công
    });
});
