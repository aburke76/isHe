function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").textContent = now.toLocaleString();
}

updateDateTime(); // Initial update
setInterval(updateDateTime, 1000); // Update every 1000 milliseconds (1 second)
