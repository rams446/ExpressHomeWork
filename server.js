const express = require("express")

const app = express();
const PORT=process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`<h1>99 BEERS </h1>
  <a href=${'/98'} > take one down </a>  `)
});

app.get('/98', (req, res) => {
    res.send(`<h1>98</h1>`)
  });

app.get('/:number_of_bottles', (req, res) => {
 
        res.send(`${req.params.number_of_bottles} <a href=${req.params.number_of_bottles-1} > take one down </a>`);
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
