const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to our Version Control System.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});