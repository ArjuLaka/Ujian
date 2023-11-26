const math = require('mathjs');
const express = require('express');

const PORT = 8080;
const app = express();
const http = require('http').Server(app);

app.use(express.json());

app.post('/derivative', async (req, res) => {
  try {
    await math.derivative(req.body.expression, 'x')
  }
})

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});