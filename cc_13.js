// cc_13.js

function addEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer");
    
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");
    
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;
    
    const positionParagraph = document.createElement("p");
    positionParagraph.textContent = position;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function(event) {
        event.stopPropagation();
        employeeContainer.removeChild(card);
    });
    
    card.appendChild(nameHeading);
    card.appendChild(positionParagraph);
    card.appendChild(removeButton);
    employeeContainer.appendChild(card);
}

function highlightAllCards() {
    const cards = document.querySelectorAll(".employee-card");
    Array.from(cards).forEach(card => {
        card.style.border = "2px solid blue";
        card.style.backgroundColor = "#e0f7fa";
    });
}

// Example usage
addEmployeeCard("John Doe", "Software Engineer");
addEmployeeCard("Jane Smith", "Project Manager");


document.getElementById("employeeContainer").addEventListener("click", function() {
    console.log("Employee card clicked!");
});