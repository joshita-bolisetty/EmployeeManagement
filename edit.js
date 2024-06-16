document.addEventListener("DOMContentLoaded", function() {
    // Parse the query parameters to get the index of the employee to edit
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    // Get the existing employees from local storage
    let existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];

    // Retrieve the employee data using the index
    const employeeToUpdate = existingEmployees[index];

    // Fill the form fields with the employee's data
    document.getElementById("name").value = employeeToUpdate.name;
    document.getElementById("username").value = employeeToUpdate.username;
    document.getElementById("post").value = employeeToUpdate.post;

    // Event listener for form submission
    document.addEventListener("submit", function(event) {
        event.preventDefault();

        // Update the employee's data with the new values from the form
        employeeToUpdate.name = document.getElementById("name").value;
        employeeToUpdate.username = document.getElementById("username").value;
        employeeToUpdate.post = document.getElementById("post").value;

        // Update the employee's data in the existingEmployees array
        existingEmployees[index] = employeeToUpdate;

        // Update the local storage with the modified array
        localStorage.setItem("employees", JSON.stringify(existingEmployees));

        // Notify user
        alert("Employee updated successfully!");

        // Redirect to admin page
        window.location.href = "admin.html";
    });
});
