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
        "can you suggest a quote configuration for Brampton industries?": "<p><strong>Copilot Response:</strong></p><p>Based on the projected amount of <strong>$1,000,000</strong> for Brampton Industries, here are the optimized quote configurations with pricing and discount recommendations:</p><ol><li><strong>Base Pricing & Discount</strong>:<ul><li>For an order of this size, I recommend applying a <strong>5% discount</strong>, which aligns with our standard discount policy for orders exceeding $500,000. This brings the total to <strong>$950,000</strong>.</li><li>You can further adjust this based on negotiation preferences or specific customer relationships.</li></ul></li><li><strong>Optimized SKUs for Cross-Sell & Up-Sell Opportunities</strong>:<ul><li><strong>SKU: [Product A]</strong> – A complementary add-on to their current product line, offering increased functionality. Estimated value: <strong>$50,000</strong>.</li><li><strong>SKU: [Product B]</strong> – A high-margin upgrade option, which may help them scale operations more efficiently. Estimated value: <strong>$75,000</strong>.</li><li><strong>SKU: [Service Package C]</strong> – A premium service package for ongoing support, worth <strong>$25,000</strong> annually, which can improve customer satisfaction and retention.</li></ul></li><li><strong>Total Suggested Amount</strong>:<ul><li>After applying the recommended discount and including cross-sell/up-sell items, the updated quote total is <strong>$1,100,000</strong>.</li></ul></li></ol><p>Would you like me to <strong>automatically create the quote</strong> with these configurations and adjustments? Additionally, I can draft an email for you to send this to the customer.</p>",
        "summarise":"The United Oils SLA opportunity is valued at $100,000 and focuses on a digital adoption solution. The expected close date is 30th November 2024, giving the sales team a key window to finalize terms and secure the deal.",
        "account news":"<p><strong>Account News:</strong> Certainly! Here's the latest update on United Oil: <ul><li><strong>Date</strong>: October 15, 2024</li><li>United Oil recently announced a strategic partnership with Clean Energy Solutions to expand their renewable energy portfolio. This collaboration aims to integrate clean energy sources into their supply chain and production processes.</li><li>They are also planning to open a new regional office in Houston, Texas, to strengthen their presence in the U.S. energy market, particularly in the renewable sector.</li><li>Their Q3 earnings report revealed a 12% year-over-year growth in revenue, driven by increased demand for their sustainable oil products and a 20% reduction in operating costs due to AI-driven optimization of their logistics network.</li></ul>Would you like more details on any of these updates?</p>",
        "investment focus":"<p><strong>Investment Focus:</strong> United Oil has recently shifted its investment strategy towards renewable energy and advanced technology integration. Key areas of focus include: <ul><li><strong>Renewable Energy</strong>: They are investing $1.5 billion over the next 5 years to diversify their energy portfolio, particularly in solar and wind energy projects across North America and Europe.</li><li><strong>AI & Automation</strong>: United Oil has allocated $300 million to modernize its operations with AI-driven solutions to enhance production efficiency, predictive maintenance, and real-time data analytics in their oil fields and refineries.</li><li><strong>Sustainability Initiatives</strong>: The company has committed to reducing its carbon emissions by 30% by 2030. This involves investing in carbon capture technology and transitioning a portion of their fleet to electric vehicles.</li></ul>These investments reflect their strategy to balance traditional energy production with cutting-edge green technology. Would you like more insights on their long-term goals?</p>",
        "competitive insights":"<p><strong>Competitive Insights:</strong> Here's a competitive analysis for United Oil: <ul><li><strong>Primary Competitors</strong>: United Oil faces strong competition from companies like Shell Energy, ExxonMobil, and BP, especially in the renewable energy space. These companies are aggressively expanding their clean energy initiatives, putting pressure on United Oil to accelerate its sustainability efforts.</li><li><strong>Strengths</strong>: United Oil’s long-standing expertise in traditional oil production, combined with its innovative use of AI for operational efficiency, gives it a competitive edge in cost management. Their diversified product line, including sustainable oil products, positions them well as the energy industry shifts toward greener options.</li><li><strong>Weaknesses</strong>: However, United Oil has been slower than some competitors in fully embracing renewables. While they’ve announced significant investments, companies like Shell and BP have already established major renewable energy projects. Pricing pressure from competitors offering more affordable green energy solutions could challenge United Oil’s market position.</li></ul>Would you like more in-depth analysis of their competitive strategies?</p>",
        "cross-sell and up-sell":"<p> For the <strong>Greentech Partnership</strong> opportunity, I have identified the following cross-sell and up-sell opportunities based on the customer’s purchase history and current discussions:<br><strong>1. Cross-Sell Opportunity:</strong> <em>Product X</em> (Energy Efficiency Add-on): Complements their current solution by optimizing energy usage, aligning with their sustainability goals. Estimated value: <strong>$50,000</strong>.<br><strong>2. Up-Sell Opportunity:</strong> <em>Product Y</em> (Premium Monitoring Service): An upgrade to their existing service, offering real-time monitoring and advanced analytics to enhance operational efficiency. Estimated value: <strong>$75,000</strong>.<br>These recommendations are based on Greentech's focus on sustainability and efficiency.</p>",
        "last login":"<p> Here’s a summary of the critical events that have occurred since your last login:<br><strong>1. Opportunity: Greentech Partnership</strong> – A follow-up meeting was completed, and the customer has requested additional information on the premium monitoring service. The opportunity has moved to the negotiation stage.<br><strong>2. Lead: Brampton Industries</strong> – A new lead was created based on their inquiry about sustainable energy solutions. The sales team has scheduled an introductory call for next week.<br><strong>3. Case: Product Support Request #4532</strong> – A high-priority support case was opened by EcoTech regarding a technical issue with their monitoring system. The case has been escalated to the engineering team for resolution.<br><strong>4. Quote: Solar Solutions</strong> – A new quote was generated and sent to the customer, including the cross-sell recommendations. The customer has acknowledged receipt and will review by the end of the week. Would you like further details or next steps on any of these events?</p>",
        "update the opportunity type and change the forecast category" : "Got it! Click the link below to update your Opportunity Type & Forecast Category in Dynamics 365 with guided steps. <br> <a href=\"https://whatfix.crm8.dynamics.com/main.aspx?appid=7e9bfbf5-e1ad-ea11-a813-000d3af03ad1&forceUCI=1&pagetype=entitylist&etn=activitypointer&viewid=00000000-0000-0000-00aa-000010001899&viewType=1039#_wfx_=887a5193-2ee5-4aae-8379-17c770320c07&_wfx_stage=production&_wfx_state=null\" target="_blank" > Update Opportunity </a>"
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
