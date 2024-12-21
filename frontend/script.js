const WEBHOOK_URL = "https://your-backend-url.com/webhook"; // Replace with actual webhook URL

async function sendScript() {
    const luaCode = document.getElementById("luaCode").value;
    const selectedPlayer = document.getElementById("playerList").value;

    if (!luaCode.trim()) {
        alert("Please enter a Lua script.");
        return;
    }

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ playerId: selectedPlayer, script: luaCode }),
        });

        if (response.ok) {
            alert("Script sent successfully!");
        } else {
            alert("Failed to send script.");
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Mock player list (replace with real-time data if needed)
document.addEventListener("DOMContentLoaded", () => {
    const playerList = document.getElementById("playerList");
    const players = [
        { id: 1, name: "Player1" },
        { id: 2, name: "Player2" },
    ];

    players.forEach(player => {
        const option = document.createElement("option");
        option.value = player.id;
        option.textContent = player.name;
        playerList.appendChild(option);
    });
});