const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.post("/webhook", (req, res) => {
    const { playerId, script } = req.body;

    console.log(`Received script for Player ID ${playerId}:
${script}`);

    res.status(200).send({ message: "Script received successfully" });
});

app.listen(PORT, () => {
    console.log(`Webhook server is running on port ${PORT}`);
});