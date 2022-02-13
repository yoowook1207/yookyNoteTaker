const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express()
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use('/api', apiRoutes);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT , () => {
    console.log('API server now on port 3002!')
})