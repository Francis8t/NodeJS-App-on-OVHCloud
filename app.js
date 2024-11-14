// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, OVHCloud! This App has been deployed through GitHub Actions automatically!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


