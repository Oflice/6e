# Roblox Lua Executor

This project allows users to write Lua scripts via a web interface and execute them for specific players in a Roblox game.

## Structure

- **Frontend**: Hosted on GitHub Pages, includes the HTML, CSS, and JS for the user interface.
- **Backend**: A webhook server (Node.js) that processes requests.

## Usage

1. Deploy the frontend on GitHub Pages.
2. Host the backend on a service like Railway or Replit.
3. Update the `WEBHOOK_URL` in `frontend/script.js` to point to your backend.