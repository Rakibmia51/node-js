const express = require('express');
const app = express();
const PORT = 3000;

// 1. /abc বা /abcd match করবে
app.get('/abc?', (req, res) => {
  res.send('Matched route: /abc or /abcd');
});

// 2. /ab, /abb, /abbb... match করবে
app.get('/ab+', (req, res) => {
  res.send('Matched route: /ab, /abb, /abbb ...');
});

// 3. /abcd, /abxcd, /abRANDOMcd match করবে
app.get('/ab*cd', (req, res) => {
  res.send('Matched route: /abcd, /abxcd, /abRANDOMcd');
});

// 4. Pure regex ব্যবহার - যেকোনো route যাতে "a" আছে
app.get(/a/, (req, res) => {
  res.send('This route contains the letter "a"');
});

// 5. Route যা "fly" দিয়ে শেষ হবে
app.get(/.*fly$/, (req, res) => {
  res.send('This route ends with "fly"');
});

// 6. Regex দিয়ে parameter validate: শুধু সংখ্যা হবে
app.get('/user/:id([0-9]+)', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// 7. Regex দিয়ে parameter validate: শুধু alphabet হবে
app.get('/user/:username([a-zA-Z]+)', (req, res) => {
  res.send(`Username: ${req.params.username}`);
});

// Server start
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
