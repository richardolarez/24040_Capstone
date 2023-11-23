const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public')); // Assuming your static files are in a 'public' folder

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading index.html:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.send(data);
    });
});

app.get('/', (req, res) => {
    // Serve index.html
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/menu', (req, res) => {
    // Serve menu.html
    res.sendFile(path.join(__dirname, 'menu.html'));
});

app.get('/EDV', (req, res) => {
    // Serve EDV.html
    res.sendFile(path.join(__dirname, 'EDV.html'));
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
