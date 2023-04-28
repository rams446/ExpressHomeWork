const express = require("express")

const app = express();
const PORT=process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`<h3>99 Beers Left</h3>
  <br/>
  <a href=${'/98'}>take one down, pass it around</a>  `)
});

// app.get('/98', (req, res) => {
//     res.send(`<h1>98</h1>`)
//   });

app.get('/:number_of_bottles', (req, res) => {
        let number = req.params.number_of_bottles;
        console.log(number);
        if(number == 0){
            res.send('<a href="/"> Start over </a>');            
        }else{
            res.send(`<h3>${req.params.number_of_bottles} Beers Left</h3> <br/><a href=${number-1}>take one down, pass it around</a>`);
        }
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
