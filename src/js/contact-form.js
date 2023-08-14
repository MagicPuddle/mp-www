const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/path-to-your-server-endpoint", (req, res) => {
    // Process the form data and send emails
    // Return a response indicating success or failure
    const { name, email, message } = req.body;
    // Process and send emails here
    const success = true; // or false based on your processing

    res.json({ success });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
