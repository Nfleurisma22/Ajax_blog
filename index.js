const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen( PORT, () =>{
  console.log(`AJAX Blog: Listen on port no. $ {PORT}`);
});
