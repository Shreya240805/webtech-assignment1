document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple validation logic
    let name = document.getElementById('name').value.trim();
    
    if (name === "") {
        alert("Oops! You forgot to enter your name.");
        return false;
    }

    // Optionally send form data to server or display a success message
});