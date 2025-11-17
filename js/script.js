/* 
==============================
 EVENT-DRIVEN JS + API SETUP
==============================
*/

// Example 1: Button click event on homepage
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("welcomeBtn");

    if (btn) {
        btn.addEventListener("click", () => {
            alert("Welcome to the Campus Life App!");
        });
    }

    // Example 2: Fake API call for events
    const loadEventsBtn = document.getElementById("loadEventsBtn");

    if (loadEventsBtn) {
        loadEventsBtn.addEventListener("click", () => {
            document.getElementById("eventsContainer").innerHTML = `
                <div class="alert alert-info">
                    API call placeholder: Events will appear here later.
                </div>
            `;
        });
    }

    // Example 3: Another fake API call for services page
    const serviceBtn = document.getElementById("serviceBtn");

    if (serviceBtn) {
        serviceBtn.addEventListener("click", () => {
            // Placeholder for API integration
            document.getElementById("serviceOutput").innerHTML = `
                <p><strong>Campus Service Info Loaded!</strong><br>
                (API integration coming soon...)</p>
            `;
        });
    }
});
// Highlight active FAQ item
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log("FAQ item toggled:", button.textContent.trim());
    });
});

/*
=========================================
  Placeholder for future real API setup
=========================================

const API_URL = "https://example.com/api/events";
fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("API error:", err));

*/

