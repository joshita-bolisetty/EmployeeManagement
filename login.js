document.addEventListener("DOMContentLoaded", function() {
    const moduleSelect = document.getElementById("module-select");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");

    moduleSelect.addEventListener("change", function() {
        const selectedModule = moduleSelect.value;

        if (selectedModule === "admin") {
            usernameInput.classList.add("hidden");
            usernameInput.disabled = true; // Disable the input field
            passwordInput.classList.remove("hidden");
            loginButton.classList.remove("hidden");
        } else if (selectedModule === "employee") {
            usernameInput.classList.remove("hidden");
            usernameInput.disabled = false; // Enable the input field
            passwordInput.classList.remove("hidden");
            loginButton.classList.remove("hidden");
        } else {
            usernameInput.classList.add("hidden");
            usernameInput.disabled = true; // Disable the input field
            passwordInput.classList.add("hidden");
            loginButton.classList.add("hidden");
        }
    });

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const selectedModule = moduleSelect.value;
        const enteredPassword = passwordInput.value;

        // Check if the selected module is admin
        if (selectedModule === "admin") {
            // If it's admin, directly check the password
            if (enteredPassword === "ADMIN@123") {
                window.location.href = "admin.html"; // Redirect to admin page
            } else {
                alert("Invalid credentials");
            }
        } else if (selectedModule === "employee") {
            // If it's employee, also check the username and password
            const enteredUsername = usernameInput.value;

            const existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];

            // Find the employee with the entered username
            const employee = existingEmployees.find(emp => emp.username === enteredUsername);
            if (!employee) {
                alert("Invalid credentials");
                return;
            }
            if (enteredPassword === employee.password) {
                window.location.href = "employee.html?username=" + employee.name; // Redirect to employee page
            } else {
                alert("Invalid credentials");
            }
        }
    });
});
