function logout() {
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to logout page
}

// Extract username from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the username in the welcome message
if (username) {
    document.getElementById('username').textContent = username;
}
