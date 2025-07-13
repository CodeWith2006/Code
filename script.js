document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Basic static login credentials for demonstration
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    // Simple demo: username "user" and password "password"
    if (username === "user" && password === "password") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});