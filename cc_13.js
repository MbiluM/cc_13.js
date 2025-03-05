function addEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer");
    
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");
    card.style.border = "1px solid #000";
    card.style.padding = "10px";
    card.style.margin = "10px 0";
    card.style.backgroundColor = "#fff";
    
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;
    
    const positionParagraph = document.createElement("p");
    positionParagraph.textContent = position;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        employeeContainer.removeChild(card);
    });
    
    card.appendChild(nameHeading);
    card.appendChild(positionParagraph);
    card.appendChild(removeButton);
    employeeContainer.appendChild(card);
}

// Example usage
addEmployeeCard("John Doe", "Software Engineer");
addEmployeeCard("Jane Smith", "Project Manager");