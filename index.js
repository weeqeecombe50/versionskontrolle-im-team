const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to the version control system');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});