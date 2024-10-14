let rules = {};

// Load rules from localStorage (if any)
if (localStorage.getItem("rules")) {
    rules = JSON.parse(localStorage.getItem("rules"));
} else {
    // Default rules if none exist
    rules = {
        "hello": "Hi! How can I help you today?",
        "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
        "bye": "Goodbye! Have a great day."
    };
    localStorage.setItem("rules", JSON.stringify(rules));  // Store default rules
}

let editingKeyword = null;  // Track if editing a rule

// Function to display the current rules (used on the rules page)
function displayRules() {
    const rulesList = document.getElementById("rules-list");
    rulesList.innerHTML = "";  // Clear existing list

    for (let keyword in rules) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `"${keyword}" → "${rules[keyword]}" 
            <button class="edit-button" onclick="editRule('${keyword}')">Edit</button> 
            <button class="delete-button" onclick="deleteRule('${keyword}')">Delete</button>`;
        rulesList.appendChild(listItem);
    }
}

// Function to add or edit a rule (used on the rules page)
function addOrEditRule() {
    const keyword = document.getElementById("keyword-input").value.toLowerCase();
    const response = document.getElementById("response-input").value;

    if (keyword && response) {
        rules[keyword] = response;

        // Store updated rules in localStorage
        localStorage.setItem("rules", JSON.stringify(rules));

        // If editing, reset the editing flag
        if (editingKeyword !== null) {
            editingKeyword = null;
        }

        // Update the rules display
        displayRules();

        // Clear the input fields
        document.getElementById("keyword-input").value = "";
        document.getElementById("response-input").value = "";
    }
}

// Function to edit a rule (used on the rules page)
function editRule(keyword) {
    document.getElementById("keyword-input").value = keyword;
    document.getElementById("response-input").value = rules[keyword];
    editingKeyword = keyword;  // Set the rule being edited
}

// Function to delete a rule (used on the rules page)
function deleteRule(keyword) {
    delete rules[keyword];

    // Store updated rules in localStorage
    localStorage.setItem("rules", JSON.stringify(rules));

    displayRules();  // Refresh the rules display
}

// Function to send a message (used on the chat page)
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const messageBox = document.getElementById("message-box");

   
