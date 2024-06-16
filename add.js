document.addEventListener("DOMContentLoaded", function() {
    const moduleSelect = document.getElementById("module-select");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");

    moduleSelect.addEventListener("change", function() {
        const selectedModule = moduleSelect.value;

        if (selectedModule === "admin") {
            usernameInput.classList.add("hidden");
            usernameInput.disabled = true;
            passwordInput.classList.remove("hidden");
            loginButton.classList.remove("hidden");
        } else if (selectedModule === "employee") {
            usernameInput.classList.remove("hidden");
            usernameInput.disabled = false;
            passwordInput.classList.remove("hidden");
            loginButton.classList.remove("hidden");
        } else {
            usernameInput.classList.add("hidden");
            usernameInput.disabled = true;
            passwordInput.classList.add("hidden");
            loginButton.classList.add("hidden");
        }
    });

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedModule = moduleSelect.value;
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (selectedModule === "admin") {
            if (enteredPassword === "ADMIN@123") {
                window.location.href = "admin.html";
            } else {
                alert("Invalid credentials");
            }
        } else if (selectedModule === "employee") {
            // Retrieve stored user data from local storage
            const storedUser = localStorage.getItem(enteredUsername);

            if (storedUser) {
                const storedPassword = JSON.parse(storedUser).password;
                // Check if the entered password matches the stored password
                if (enteredPassword === storedPassword) {
                    window.location.href = "employee.html?username=" + enteredUsername;
                } else {
                    alert("Invalid credentials");
                }
            } else {
                alert("User not found");
            }
        }
    });
});
