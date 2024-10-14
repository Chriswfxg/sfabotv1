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

// Display the current rules stored in localStorage
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

// Add or edit a rule
function addOrEditRule() {
    const keyword = document.getElementById("keyword-input").value.toLowerCase();
    const response = document.getElementById("response-input").value;
    rules[keyword] = response;
    localStorage.setItem("rules", JSON.stringify(rules));  // Save to localStorage
    displayRules();  // Refresh the display
}

// Edit an existing rule
function editRule(keyword) {
    document.getElementById("keyword-input").value = keyword;
    document.getElementById("response-input").value = rules[keyword];
}

// Delete a rule
function deleteRule(keyword) {
    delete rules[keyword];
    localStorage.setItem("rules", JSON.stringify(rules));  // Update localStorage
    displayRules();  // Refresh the display
}

// Send a message and get a response from the bot
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const messageBox = document.getElementById("message-box");

    // Show user input in chat (aligned to the left)
    messageBox.innerHTML += `<div class="user-message">${userInput}</div>`;
    document.getElementById("user-input").value = "";  // Clear the input field

    // Delay the bot's response by 3 seconds
    setTimeout(() => {
        let response = "Sorry, I don't understand that.";

        // Check if there's a matching rule
        for (let keyword in rules) {
            if (userInput.includes(keyword)) {
                response = rules[keyword];
                break;
            }
        }

        // Show the bot response (aligned to the right)
        messageBox.innerHTML += `<div class="bot-message">${response}</div>`;
        messageBox.scrollTop = messageBox.scrollHeight;  // Scroll to the bottom
    }, 3000);
}
