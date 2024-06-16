document.addEventListener("DOMContentLoaded", function() {
    const employeeList = document.querySelector(".employee-list");

    // Get existing employees from Local Storage
    let existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];

    // Function to update the UI with existing employees
    function updateUI() {
        employeeList.innerHTML = ""; // Clear the existing list

        // Loop through existing employees and create list items for each
        existingEmployees.forEach(function(employee, index) {
            const listItem = document.createElement("li");
            listItem.classList.add("employee-item");

            const employeeName = document.createElement("span");
            employeeName.classList.add("employee-name");
            employeeName.textContent = employee.name;

            const editButton = document.createElement("button");
            editButton.classList.add("btn", "btn-edit");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", function() {
                // Pass employee data to the edit page
                window.location.href = `edit.html?index=${index}`;
            });

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("btn", "btn-delete");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function() {
                deleteEmployee(index); // Delete employee from the list
            });

            // Append elements to list item
            listItem.appendChild(employeeName);
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);

            // Append list item to employee list
            employeeList.appendChild(listItem);
        });
    }

    // Function to delete an employee
    function deleteEmployee(index) {
        // Remove the employee from the array
        existingEmployees.splice(index, 1);

        // Update the local storage with the modified array
        localStorage.setItem("employees", JSON.stringify(existingEmployees));

        // Update the UI
        updateUI();
    }

    // Update the UI with existing employees
    updateUI();

    // Add event listener to the logout button
    const logoutButton = document.querySelector(".btn-logout");
    logoutButton.addEventListener("click", function() {
        // Redirect to login page
        window.location.href = "login.html";
    });

    // Function to handle adding an employee
    function addEmployee() {
        // Redirect to add.html
        window.location.href = "add.html";
    }

    // Add event listener to the "Add Employee" button
    const addEmployeeButton = document.querySelector(".btn-add");
    addEmployeeButton.addEventListener("click", addEmployee);
});
