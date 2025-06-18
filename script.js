// Load rules from localStorage (if any)
// Load rules from localStorage (if any)
let rules = {
  "hello": "Hi! How can I help you today?",
  "how are you": "I'm a bot, but I'm doing great! Thanks for asking.",
  "bye": "Goodbye! Have a great day.",
  "hola": "heeeey",
  "What are the pipeline figures for this quarter?": "The total pipeline for this quarter is projected to be $500,000. This includes opportunities across multiple sectors, with $300,000 expected from new customers and $200,000 from existing customers. Would you like more details on the opportunity breakdown or forecasted close dates?",
  "What are the overall pipeline figures?": "The overall pipeline stands at $1.2 million, which includes $800,000 from existing customers and $400,000 from new customer opportunities. The pipeline is spread across various stages, with 60% in early stages and 40% in advanced stages. Would you like to see a more detailed breakdown or the projected close dates for specific deals?",
  "What are the closed revenues so far?": "The total closed revenue so far is $950,000. This includes $600,000 from existing customers and $350,000 from new business. The largest deal closed was worth $200,000. Would you like a breakdown by industry or by sales representative?",
  "Hey can you update the deal value of the Express Logistics SLA opp to 200,000?": "The deal value for the Express Logistics SLA opportunity has been successfully updated to $200,000. Is there anything else you’d like to adjust for this opportunity, such as the close date or stage?",
  "Hey, can you help me approve the quote that was sent for GenePoint": "Hey there, you cannot approve quotes directly in Copilot. Click <a href=\"https://whatfix-cc-dev-ed.lightning.force.com/lightning/o/SBQQ__Quote__c/list?c__wfx=a7b56243-64c4-40cf-9bcb-e63560727488&c__wfx_stage=production&c__wfx_state=null&filterName=__Recent\">approve quote</a> to do it on the application",
  "can you suggest a quote configuration for Brampton industries?": "<p><strong>Copilot Response:</strong></p><p>Based on the projected amount of <strong>$1,000,000</strong> for Brampton Industries...</p>",
  "summarise": "The United Oils SLA opportunity is valued at $100,000 and focuses on a digital adoption solution. The expected close date is 30th November 2024...",
  "account news": "<p><strong>Account News:</strong> Certainly! Here's the latest update on United Oil: <ul>...</ul></p>",
  "investment focus": "<p><strong>Investment Focus:</strong> United Oil has recently shifted its investment strategy... <ul>...</ul></p>",
  "competitive insights": "<p><strong>Competitive Insights:</strong> Here's a competitive analysis for United Oil: <ul>...</ul></p>",
  "cross-sell and up-sell": "<p> For the <strong>Greentech Partnership</strong> opportunity, I have identified the following... </p>",
  "last login": "<p> Here’s a summary of the critical events that have occurred since your last login: ...</p>",
  "update the opportunity type and change the forecast category": "Got it! Click the link below to update your Opportunity Type & Forecast Category... <a href=\"https://whatfix.crm8.dynamics.com/...\">Update Opportunity</a>",
  "Hey, can you help me create a task on Microsoft Dynamics": "Hey there, I can help you create a task. Click <a href=\"https://whatfix.crm8.dynamics.com/...\">create task</a> to do it on the application",
  "can you help me create sales order items":"Hey there, I can help you create a task. Click <a href=\"https://my405746.s4hana.cloud.sap/ui?_wfx_=22edd632-f7ef-4694-a823-90ad737ca160&_wfx_stage=production&_wfx_state=null#Shell-home\">create task</a> to do it on the application",
  
  "Can you explain the overview of create sales order process": `
    <h3>Create Sales Order Process – SAP ECC</h3>
    <p>In Whatfix, the <strong>Sales Order Creation</strong> process in <strong>SAP ECC</strong> is initiated when a customer places a confirmed purchase request...</p>
    <h3>1. Sales Area Selection</h3>
    <p>The sales user logs into <strong>SAP GUI</strong> and accesses transaction <strong>VA01</strong> to create a sales order...</p>
    <h3>2. Customer and Order Type Entry</h3>
    <p>The user enters the <strong>Sold-To Party</strong> and <strong>Ship-To Party</strong> (retrieved from the customer master)...</p>
    <h3>3. Item and Quantity Details</h3>
    <p>The user inputs <strong>material codes (SKUs)</strong> and <strong>quantities</strong>...</p>
    <h3>4. Availability Check & Credit Control</h3>
    <p>SAP ECC performs a <strong>real-time availability check (ATP)</strong> and runs a <strong>credit check</strong>...</p>
    <h3>5. Delivery & Billing Data</h3>
    <p>The system auto-fills or the user enters <strong>delivery plant</strong>, <strong>shipping conditions</strong>...</p>
    <h3>6. Order Review & Save</h3>
    <p>The sales user reviews all order lines, totals, and terms, then saves the document...</p>
    <h3>Organization-Specific Notes:</h3>
    <ul>
      <li>All sales orders above $5,000 are <strong>auto-routed for approval</strong> via workflow.</li>
      <li>Orders for strategic accounts are tagged under <strong>Key Account Management</strong>...</li>
      <li>Integration with <strong>SAP SD, MM, and FI</strong> ensures inventory commitment...</li>
    </ul>
  `
};

// Function to send a message and get a response from the bot
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const messageBox = document.getElementById("message-box");

    // Clear the input field after sending the message
    document.getElementById("user-input").value = "";

    // Add user message to the chat
    const userMessageWrapper = document.createElement('div');
    userMessageWrapper.classList.add('message-wrapper');
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;
    userMessageWrapper.appendChild(userMessage);
    messageBox.appendChild(userMessageWrapper);

    // Scroll to the bottom
    messageBox.scrollTop = messageBox.scrollHeight;

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

        // Add bot response to the chat
        const botMessageWrapper = document.createElement('div');
        botMessageWrapper.classList.add('message-wrapper', 'bot-message-wrapper');
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.innerHTML = response;
        botMessageWrapper.appendChild(botMessage);
        messageBox.appendChild(botMessageWrapper);

        // Scroll to the bottom
        messageBox.scrollTop = messageBox.scrollHeight;
    }, 3000);
}
